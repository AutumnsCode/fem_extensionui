import { useQuery } from "@tanstack/react-query"
import { fetchExtensions } from "../fetchExtensions"
import { useMemo, useState } from "react"


export const useExtensions = (option: filterOption) => {
  // Session-local overrides for isActive — keyed by extension name, reset on refresh
  const [toggleOverrides, setToggleOverrides] = useState<Record<string, boolean>>({})
  // Session-local set of removed extension names — reset on refresh (no backend)
  const [removedExtensions, setRemovedExtensions] = useState<Set<string>>(new Set())
  // Names currently in their 1s grace period after being toggled out of the active filter
  const [pendingRemoval, setPendingRemoval] = useState<Set<string>>(new Set())

  // Fetches the extension list from the data source; isFetching is true while the request is in flight
  const { data, isFetching } = useQuery({
    queryKey: ["extensions"],
    queryFn: () => fetchExtensions()
  })

  // Merge server data with local toggle overrides so toggled cards don't revert on re-render
  const extensions = useMemo(() =>
      (data ?? []).map(ext => ({
        ...ext,
        isActive: toggleOverrides[ext.name] ?? ext.isActive
      })),
      [data, toggleOverrides]
  )

  const filteredExtensions = useMemo(() => {
    // Strip session-removed extensions before applying the active/inactive filter
    const visible = extensions.filter(ext => !removedExtensions.has(ext.name))
    if (option === "all") return visible
    return visible.filter(ext =>
      ext.isActive === (option === "active") || pendingRemoval.has(ext.name)
    )
  }, [extensions, option, pendingRemoval, removedExtensions])

  // Hides the extension for the current session; reappears on page refresh
  const handleRemove = (name: string) => {
    setRemovedExtensions(prev => new Set(prev).add(name))
  }

  const handleToggle = (name: string) => {
      const current = extensions.find(e => e.name === name)?.isActive ?? false
      const next = !current

      // Persist the new active state locally without re-fetching
      setToggleOverrides(prev => ({ ...prev, [name]: next }))

      // When filtered, keep the card visible for 1 second before it disappears from the list
      if (option !== "all" && next !== (option === "active")) {
        setPendingRemoval(prev => new Set(prev).add(name))
        setTimeout(() => {
          setPendingRemoval(prev => {
            const updated = new Set(prev)
            updated.delete(name)
            return updated
          })
        }, 1000)
      }
    }

  return { filteredExtensions, handleToggle, handleRemove, isFetching }
}