// Mostra a imagem clara ou a escura conforme a classe .dark no <html>.
export default function ThemeImage({ src, alt = '', className = '' }) {
  return (
    <>
      <img src={src.light} alt={alt} className={`dark:hidden ${className}`} />
      <img src={src.dark} alt={alt} className={`hidden dark:block ${className}`} />
    </>
  )
}
