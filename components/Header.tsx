"use client"
import Image from "next/image"
import { useState } from "react"

import LogoDark from '@/app/assets/images/logo.svg'
import LogoLight from '@/app/assets/images/logo-light.svg'
import { ThemeBtn } from "./ThemeBtn"

export const Header = () => {
  const [isDark, setIsDark] = useState(true)
  return (
    <header className="w-full py-2 sm:py-3 px-3 sm:px-4 bg-secondary border border-secondary-border shadow-header rounded-2.5 sm:rounded-5 flex justify-between gap-4 items-center">
      <Image
        src={isDark ? LogoDark.src : LogoLight.src}
        alt=""
        width={179}
        height={41}
      />

      <ThemeBtn />
    </header>
  )
}
