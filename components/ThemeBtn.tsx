
import Image from 'next/image'
import IconMoon from '@/app/assets/images/icon-moon.svg'
import IconSun from '@/app/assets/images/icon-sun.svg'

type ThemeBtnProps = {
  isDark: boolean
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeBtn = ({isDark, setIsDark}: ThemeBtnProps) => {
  return (
    <button
      type="button"
      onClick={() => setIsDark(!isDark)}
        className="transition-all duraction-300 ease-in-out size-12.5 bg-theme hover:bg-theme-hover outline-2 outline-offset-2 outline-transparent focus:outline-theme-outline rounded-xl focus:bg-theme-focus cursor-pointer relative overflow-hidden *:transition-all *:duration-300 *:ease-in-ou *:absolute *:left-1/2 *:top-1/2 *:-translate-x-1/2"
    >
        <Image
          src={IconMoon.src}
          alt=""
          width={22}
          height={22}
          className={isDark ?  "translate-y-14 opacity-0" : "-translate-1/2 opacity-100"}
        />
        <Image
          src={IconSun.src}
          alt="" width={22}
          height={22}
          className={isDark ? "-translate-y-1/2 opacity-100" : "-translate-y-14 opacity-0"}
        />
    </button>
  )
}
