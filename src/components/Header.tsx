import Image from 'next/image'
import Link from 'next/link'
import LogoPNG from '../assets/Logo.png'

const Header: React.FC = () => {
  return (
    <header className="absolute flex flex-row w-screen justify-center mt-8">
      {/* <div className="">
        <Image src={LogoPNG} alt="IW Logo" />
      </div> */}
      <ul className="flex flex-row gap-12 text-slate-100">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/service">Service</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
