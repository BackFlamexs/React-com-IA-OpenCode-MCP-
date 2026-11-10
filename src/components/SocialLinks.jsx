import ThemeImage from './ThemeImage'

// Ícones das redes. No hover aparece um círculo de 56px atrás do ícone (Style Guide).
export default function SocialLinks({ networks }) {
  return (
    <ul className="flex w-full justify-center gap-4 p-6">
      {networks.map((network) => (
        <li key={network.id}>
          <a
            href={network.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={network.label}
            className="block size-10 rounded-full transition-shadow hover:bg-black/10 hover:shadow-[0_0_0_8px_rgb(0_0_0/0.1)] focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black dark:hover:bg-white/20 dark:hover:shadow-[0_0_0_8px_rgb(255_255_255/0.2)] dark:focus-visible:outline-white"
          >
            <ThemeImage src={network.icon} className="size-10" />
          </a>
        </li>
      ))}
    </ul>
  )
}
