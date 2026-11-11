import ThemeImage from './ThemeImage'

// Avatar (uma foto para cada tema) e nome do usuário.
export default function Profile({ avatar, name }) {
  return (
    <header className="flex w-full flex-col items-center gap-2 p-6">
      <ThemeImage
        src={avatar}
        alt={`Foto de ${name}`}
        className="size-28 rounded-full border border-black/50 object-cover object-[50%_40%] dark:border-white/50"
      />
      <h1 className="text-base leading-6 font-medium md:font-normal">{name}</h1>
    </header>
  )
}
