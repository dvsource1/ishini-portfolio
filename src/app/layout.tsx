import './globals.css'

import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ishini Wigesinghe',
  description: 'A Teacher - BSc. Mathematics @ University of Kelaniya',
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-col pt-24 bg-black">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
