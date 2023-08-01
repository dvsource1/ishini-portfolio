import './globals.css'
import type { Metadata } from 'next'
import { Dekko } from 'next/font/google'

const dekko = Dekko({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ishini Wijesinghe',
  description: 'Undergraduate (BSc) of University of Kelaniya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dekko.className} bg-repeat bg-sad-face`}>
        {children}
      </body>
    </html>
  )
}
