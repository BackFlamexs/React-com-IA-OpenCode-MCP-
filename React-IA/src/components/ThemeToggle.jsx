import sun from '../assets/sun.svg'
import moon from '../assets/moon-stars.svg'
import ThemeImage from './ThemeImage'

// Switch de tema: no claro a alça fica à direita com o sol, no escuro à esquerda com a lua.
export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Tema escuro"
      aria-pressed={isDark}
      className="group relative h-10 w-16 shrink-0 cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white"
    >
      <span className="absolute top-1/2 left-0 h-6 w-16 -translate-y-1/2 rounded-full border border-black/50 bg-black/5 backdrop-blur-xs dark:border-white/50 dark:bg-white/10" />
      <span className="absolute top-1 left-8 rounded-full bg-white p-2 shadow-[0_2px_4px_rgb(0_0_0/0.1)] transition-all group-hover:shadow-[0_0_0_8px_rgb(0_0_0/0.1)] dark:left-0 dark:shadow-[0_2px_4px_rgb(0_0_0/0.25)] dark:group-hover:shadow-[0_0_0_8px_rgb(255_255_255/0.2)]">
        <ThemeImage src={{ light: sun, dark: moon }} className="size-4" />
      </span>
    </button>
  )
}
