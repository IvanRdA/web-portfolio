import LanguageSelector from '@/components/LanguageSelector'
import './globals.css'

export const metadata = {
  title: 'IVAN RODRIGUEZ - FULLSTACK DEVELOPER PORTFOLIO',
  description:
    'Web portfolio of Ivan Rodriguez, a fullstack web developer specialized in MERN stack.'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
