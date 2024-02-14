import { Facebook, MessageCircleHeart } from 'lucide-react'

import Action from '@/components/Action'
import Image from 'next/image'
import { Paytone_One } from 'next/font/google'
import TeacherPNG from '../assets/Teacher.png'

const secondaryFont = Paytone_One({ subsets: ['latin'], weight: '400' })

const Home: React.FC = () => {
  return (
    <>
      <h2 className="text-foreground text-xl">A Teacher</h2>
      <h1
        className={`${secondaryFont.className} mr-14 text-5xl sm:text-7xl text-primary break-words`}
      >
        Ishini
        <br /> Wijesinghe
      </h1>

      <div className="mt-16 text-foreground mr-14 text-lg">
        <p>BSc in Mathematics</p>
        <p>University of Kelaniya, Sri Lanka</p>
      </div>
      <div className="md:hidden flex flex-col mt-16 gap-2 w-1/2">
        <Action variant={'outline'} size={'sm'}>
          <Facebook />
          Facebook
        </Action>
        <Action variant={'outline'} size={'sm'}>
          <MessageCircleHeart />
          Whatsapp
        </Action>
      </div>
      <Image
        className="absolute right-0 bottom-0 -scale-x-100 w-80 md:w-96"
        src={TeacherPNG}
        alt="A Teacher"
      />
    </>
  )
}

export default Home
