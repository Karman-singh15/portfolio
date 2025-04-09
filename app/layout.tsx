import type { Metadata } from 'next'
import './globals.css'
import { IBM_Plex_Mono } from 'next/font/google'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '700'], // Add weights as needed
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Karman Singh'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body>{children}</body>
    </html>
  )
}
