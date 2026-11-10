// Um botão de link. No hover a borda fica sólida e o fundo mais leve (Style Guide).
export default function LinkButton({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center rounded-lg border border-black/50 bg-black/5 px-6 py-[15px] text-center text-base leading-6 font-medium backdrop-blur-xs transition-colors hover:border-black hover:bg-black/2 hover:outline-[0.5px] hover:outline-black focus-visible:border-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:border-white/50 dark:bg-white/10 dark:hover:border-white dark:hover:bg-white/5 dark:hover:outline-white dark:focus-visible:border-white dark:focus-visible:outline-white"
    >
      {label}
    </a>
  )
}
