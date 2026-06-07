
import Image from 'next/image'
import IconMoon from '@/app/assets/images/icon-moon.svg'
import IconSun from '@/app/assets/images/icon-sun.svg'

export const ThemeBtn = () => {
  return (
    <button
        type="button"
        className="transition-all duraction-300 ease-in-out size-12.5 bg-theme hover:bg-theme-hover outline-2 outline-offset-2 outline-transparent focus:outline-theme-outline rounded-xl focus:bg-theme-focus cursor-pointer relative overflow-hidden"
      >
        <Image
          src={IconMoon.src}
          alt=""
          width={22}
          height={22}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-14`}
        />
        <Image
          src={IconSun.src}
          alt="" width={22}
          height={22}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
    </button>
  )
}
