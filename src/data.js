import avatar from './assets/avatar.jpg'
import avatarDark from './assets/avatar-dark.png'
import githubLight from './assets/github-light.svg'
import githubDark from './assets/github-dark.svg'
import instagramLight from './assets/instagram-light.svg'
import instagramDark from './assets/instagram-dark.svg'
import youtubeLight from './assets/youtube-light.svg'
import youtubeDark from './assets/youtube-dark.svg'
import linkedinLight from './assets/linkedin-light.svg'
import linkedinDark from './assets/linkedin-dark.svg'

// Textos e imagens conforme o Figma. Os ícones têm versão clara e escura.
export const user = {
  name: '@BackFlamexs',
  fullName: 'Allan Henrique Costa',
  avatar: { light: avatar, dark: avatarDark },
}

// TODO: trocar pelos endereços reais do e-book, portfólio e curso
export const links = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/BackFlamexs' },
  { id: 'ebook', label: 'Baixe meu e-book', href: '#' },
  { id: 'portfolio', label: 'Veja meu portfólio', href: '#' },
  { id: 'conheca-curso', label: 'Conheça meu curso', href: '#' },
]

// TODO: completar Instagram, YouTube e LinkedIn com o usuário de cada rede
export const socials = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/BackFlamexs', icon: { light: githubLight, dark: githubDark } },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/', icon: { light: instagramLight, dark: instagramDark } },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/', icon: { light: youtubeLight, dark: youtubeDark } },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: { light: linkedinLight, dark: linkedinDark } },
]
