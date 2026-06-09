"use client"
import { ThemeBtn } from "./ThemeBtn"
import { Icon } from "./Icon"
import { useTheme } from "@/lib/hooks/useTheme"

export const Header = () => {
  const {isDark, setIsDark} = useTheme()
  return (
    <header className="w-full py-2 sm:py-3 px-3 sm:px-4 bg-secondary border border-secondary-border shadow-header rounded-2.5 sm:rounded-5 flex justify-between gap-4 items-center">
      <picture>
        <Icon color={isDark ? "#fbfdfe" : "#0a0a0a"} />
      </picture>

      <ThemeBtn isDark={isDark} setIsDark={setIsDark} />
    </header>
  )
}
