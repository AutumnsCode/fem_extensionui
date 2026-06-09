"use client"

import ExtensionCard from "@/components/ExtensionCard";
import { FilterBtn } from "@/components/FilterBtn";
import { Header } from "@/components/Header";
import { FILTERS } from "@/lib/constant";
import { useExtensions } from "@/lib/hooks/useExtensions";
import { useState } from "react";


export default function Home() {
  // Tracks which filter button is currently selected ("all" | "active" | "inactive")
  const [option, setOption] = useState<filterOption>("all")

  const {filteredExtensions, handleToggle, handleRemove, isFetching} = useExtensions(option)
  

  return (
    <div className="w-full max-w-292.5 mx-auto mt-5 mb-16 sm:mt-6 lg:mt-10 space-y-10 lg:space-y-16">
      <Header />
      <main className="space-y-8">
        <div className="flex flex-col gap-2 items-center sm:flex-row sm:justify-between">
          <h1 className="font-bold text-4xl/8.5 tracking-[-1px]">Extensions List</h1>

          <div className="flex gap-4">
            {FILTERS.map((filter) => (
              <FilterBtn name={filter.name} key={filter.name} option={option} setOption={setOption} />
            ))}
          </div>
        </div>
        <ul className="grid
  grid-cols-[repeat(auto-fill,minmax(330px,1fr))]
  lg:grid-cols-[repeat(auto-fill,minmax(382px,1fr))]
  gap-3">
          {isFetching ? (
            <li>Is Loading...</li>
          ) : filteredExtensions.length > 0 ? (
            filteredExtensions.map((ext) => (
              <ExtensionCard {...ext} key={ext.name} onToggle={() => handleToggle(ext.name)} onRemove={() => handleRemove(ext.name)} />
            ))
          ) : (
            <li>No Extension found</li>
          )}
        </ul>
      </main>
    </div>
  );
}
