
import { Extension } from './data/extensions'

export const fetchExtensions = async(filter: filterOption = "all") => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (filter === "all") return Extension
  
  const isActive = filter === "active"

  return Extension.filter((ext) => ext.isActive === isActive)
}
