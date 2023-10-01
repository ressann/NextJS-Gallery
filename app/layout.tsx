import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

// it will revalidate page after 1h
export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Next.js images gallary',
  description: 'ressann next.js tutorial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`p-4`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
