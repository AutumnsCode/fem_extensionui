
export const RemoveBtn = ({ onClick,name }: { onClick: () => void, name:string}) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer transition-all duration-300 bg-remove py-2 px-4 outline-transparent outline-offset-2 outline-2 border-remove-border rounded-full border shadow-filter hover:bg-remove-hover hover:shadow-none hover:border-remove-hover-border text-foreground hover:text-remove-body text-base/5.5 tracking-tighter focus:bg-remove-focus  focus:outline-remove-outline focus:outline-offset-2 focus:border-remove-focus font-sans"
      aria-label={`Remove ${name}`}
    >
      Remove
    </button>
  )
}
