"use client"

import React from 'react'


const ActiveToggle = ({ isActive, name, onToggle }: { isActive: boolean, name: string, onToggle: () => void }) => {
  return (
    <div className="relative w-9 h-5">
      <input type="checkbox"
        name={`checkbox-${name}`}
        id={`checkbox-${name}`}
        className="absolute w-1 h-1 opacity-0 peer"
        checked={isActive}
        onChange={onToggle}
      />
      <label htmlFor={`checkbox-${name}`} className="transition-all duration-300 ease-in-out before:transition-all before:duration-300 before:ease-cubic w-full h-full bg-toggle-box inline-block relative rounded-full outline-2 outline-transparent outline-offset-0 before:absolute before:size-4 before:bg-toggle before:shadow-toggle-shadow before:rounded-full before:top-0.5 before:left-0.5 before:translate-x-0 peer-checked:before:translate-x-full peer-focus:outline-offset-2 peer-focus:outline-toggle-outline peer-checked:bg-toggle-box-checked-focus peer-disabled:bg-toggle-disabled-box">
        <div className="sr-only">{isActive ? `${name} active` : `${name} inactive`}</div>
      </label>
    </div>
  )
}

export default ActiveToggle