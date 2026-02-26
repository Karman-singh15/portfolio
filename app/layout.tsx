import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivoBlack = localFont({
  src: '../public/fonts/Archivo_Black,Bebas_Neue/Archivo_Black/ArchivoBlack-Regular.ttf',
  variable: '--font-archivo-black',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Karman Singh',
  description: 'Portfolio of Karman Singh',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${archivoBlack.variable} ${archivo.variable} antialiased selection:bg-[#4CAF50]/30 selection:text-white`}>
        {children}
      </body>
    </html>
  )
}
