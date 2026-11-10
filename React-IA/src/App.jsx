import { useEffect, useState } from 'react'
import { user, links, socials } from './data'
import Profile from './components/Profile'
import LinkButton from './components/LinkButton'
import SocialLinks from './components/SocialLinks'
import ThemeToggle from './components/ThemeToggle'
import Footer from './components/Footer'

export default function App() {
  const [isDark, setIsDark] = useState(false)

  // A classe .dark no <html> ativa as variantes dark: do Tailwind e o fundo escuro
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className="mx-auto flex w-full max-w-[588px] flex-col items-center pt-14 font-sans text-black dark:text-white">
      <main className="flex w-full flex-col items-center">
        <Profile avatar={user.avatar} name={user.name} />
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />

        <nav aria-label="Links do perfil" className="w-full p-6">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.id}>
                <LinkButton label={link.label} href={link.href} />
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks networks={socials} />
      </main>
      <Footer author={user.fullName} />
    </div>
  )
}
