

type FilterBtnProps = {
  name: filterOption,
  option: filterOption,
  setOption: React.Dispatch<React.SetStateAction<filterOption>>
}
export const FilterBtn = ({name, option, setOption}: FilterBtnProps) => {
  return (
    <button
      className={`cursor-pointer transition-all duration-300 bg-filter pt-2 pb-2.5 px-5 outline-transparent outline-offset-2 outline-2 border-filter-border rounded-full border shadow-filter hover:bg-filter-hover hover:shadow-none hover:border-filter-hover-border text-filter-text font-medium text-xl tracking-tighter focus:bg-filter-focus  focus:outline-filter-outline focus:outline-offset-2 focus:border-filter-focus font-sans capitalize ${option === name && "active"}`}

      onClick={() => setOption(name)}
      aria-pressed={option === name}
    >
      {name}
    </button>
  )
}
