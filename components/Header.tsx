"use client"
import Image from "next/image"
import { ThemeBtn } from "./ThemeBtn"

import LogoDark from "../app/assets/images/logo.svg"
import LogoLight from "../app/assets/images/logo-light.svg"
import { useTheme } from "@/hooks/useTheme"

export const Header = () => {
  const {isDark, setIsDark} = useTheme()
  return (
    <header className="w-full py-2 sm:py-3 px-3 sm:px-4 bg-secondary border border-secondary-border shadow-header rounded-2.5 sm:rounded-5 flex justify-between gap-4 items-center">
      <picture>
        {
          isDark
            ? <Image src={LogoDark.src} width={179} height={41} className={isDark ? "block" : "hidden"} alt="" loading="eager" />
            : <Image src={LogoLight.src} width={179} height={41} className={isDark ? "hidden" : "block"} alt="" loading="eager"/>
        }
      </picture>

      <ThemeBtn isDark={isDark} setIsDark={setIsDark} />
    </header>
  )
}
