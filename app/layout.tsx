import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './assets/css/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Léo Poumailloux',
  description: 'Portfolio de Léo Poumailloux',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
