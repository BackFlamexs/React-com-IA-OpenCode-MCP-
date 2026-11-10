export default function Footer({ author }) {
  return (
    <footer className="flex w-full justify-center p-6 text-sm leading-6">
      <p>{author}</p>
    </footer>
  )
}
