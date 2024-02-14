import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import ActionWrapper from '@/components/ActionWrapper'
import Image from 'next/image'
import LogoPNG from '../assets/Logo.png'
import ValentineCard from '@/components/valentiene/ValentineCard'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8">
        <ActionWrapper />
      </div>

      <Dialog>
        <div className="absolute flex justify-center items-center right-4 bottom-4 md:right-8 md:bottom-8 z-50 w-10 h-10 border-2 border-primary cursor-pointer opacity-50 hover:opacity-100 shadow-md hover:shadow-sm shadow-primary">
          <DialogTrigger asChild>
            <Image className="w-7" src={LogoPNG} alt="Logo" />
          </DialogTrigger>
        </div>
        <DialogContent className="w-[90vw] h-[90vh] justify-center items-center flex">
          <ValentineCard />
        </DialogContent>
      </Dialog>

      <div className="absolute right-0 top-0 w-24 md:w-32 h-3/4 md:h-2/3 bg-primary rounded-bl-3xl"></div>
      <div className="mx-4 md:mx-8">{children}</div>
    </div>
  )
}
