import avatarLight from './assets/avatar-light.png'
import avatarDark from './assets/avatar-dark.png'
import githubLight from './assets/github-light.svg'
import githubDark from './assets/github-dark.svg'
import instagramLight from './assets/instagram-light.svg'
import instagramDark from './assets/instagram-dark.svg'
import youtubeLight from './assets/youtube-light.svg'
import youtubeDark from './assets/youtube-dark.svg'
import linkedinLight from './assets/linkedin-light.svg'
import linkedinDark from './assets/linkedin-dark.svg'

// Textos e imagens conforme o Figma. Cada imagem tem versão clara e escura.
export const user = {
  name: '@seu.perfil',
  avatar: { light: avatarLight, dark: avatarDark },
}

// TODO: trocar pelos endereços reais do curso, e-book e portfólio
export const links = [
  { id: 'curso', label: 'Inscreva-se no Curso', href: '#' },
  { id: 'ebook', label: 'Baixe meu e-book', href: '#' },
  { id: 'portfolio', label: 'Veja meu portfólio', href: '#' },
  { id: 'conheca-curso', label: 'Conheça meu curso', href: '#' },
]

// TODO: completar com o usuário de cada rede
export const socials = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/', icon: { light: githubLight, dark: githubDark } },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/', icon: { light: instagramLight, dark: instagramDark } },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/', icon: { light: youtubeLight, dark: youtubeDark } },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: { light: linkedinLight, dark: linkedinDark } },
]
