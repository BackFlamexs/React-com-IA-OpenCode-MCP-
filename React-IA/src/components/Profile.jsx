import ThemeImage from './ThemeImage'

// Avatar e nome do usuário.
export default function Profile({ avatar, name }) {
  return (
    <header className="flex w-full flex-col items-center gap-2 p-6">
      <ThemeImage src={avatar} alt={`Avatar de ${name}`} className="size-28 object-contain" />
      <h1 className="text-base leading-6 font-medium md:font-normal">{name}</h1>
    </header>
  )
}
