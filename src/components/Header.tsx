'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import Image from 'next/image'
// import LogoPNG from '../assets/Logo.png'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/service', label: 'Service' },
  { href: '/contact', label: 'Contact' },
  { href: '/about', label: 'About' },
]

const Header: React.FC = () => {
  const pathname = usePathname()

  return (
    <header className="absolute flex flex-row w-screen justify-center mt-8">
      {/* <div className="">
        <Image src={LogoPNG} alt="IW Logo" />
      </div> */}
      <ul className="flex flex-row gap-14 text-slate-100">
        {LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              className={`${
                pathname === href
                  ? 'text-[#F29F05] underline underline-offset-2'
                  : 'text-[#D9D9D9]'
              }`}
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
