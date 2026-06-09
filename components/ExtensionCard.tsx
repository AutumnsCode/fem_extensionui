import Image from 'next/image'
import React from 'react'
import { RemoveBtn } from './RemoveBtn'
import ActiveToggle from './ActiveToggle'

const ExtensionCard = ({ logo, name, description, isActive, onToggle, onRemove }: ExtensionType & { onToggle: () => void; onRemove: () => void }) => {
  return (
    <li className=" h-50 w-full bg-secondary border border-ext-border rounded-5 grid p-5 flex-row gap-4 grid-rows-[1fr_auto]">
      <div className="self-start grid grid-cols-[auto_1fr] gap-4">
        <Image src={logo} alt={name} width={60} height={60} />
        <div className="space-y-2">
          <h2 className="text-xl/6 tracking-tight font-bold">{name}</h2>
          <p className="text-ext-body text-base/5.5">{description}</p>
        </div>
      </div>
      <div className="self-end flex justify-between items-center">
        <RemoveBtn onClick={onRemove} name={name} />
        <ActiveToggle isActive={isActive} name={name} onToggle={onToggle} />
      </div>
    </li>
  )
}

export default ExtensionCard