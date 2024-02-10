import './globals.css'

import { Space_Mono as BaseFont } from 'next/font/google'
import Header from '@/components/Header'
import type { Metadata } from 'next'

const baseFont = BaseFont({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Ishini Wigesinghe',
  description: 'A Teacher - BSc. Mathematics @ University of Kelaniya',
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${baseFont.className} dark`}>
        <Header />
        <main className="relative flex h-dvh flex-col pt-8 md:pt-24 bg-background">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
