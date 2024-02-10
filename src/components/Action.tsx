import { Button, buttonVariants } from './ui/button'

import { Paytone_One } from 'next/font/google'
import { VariantProps } from 'class-variance-authority'

const secondaryFont = Paytone_One({ subsets: ['latin'], weight: '400' })

type ActionProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode
  }

const Action: React.FC<ActionProps> = ({ children, ...props }: any) => {
  return (
    <Button className="rounded-full h-12 px-6" {...props}>
      <p
        className={`${secondaryFont.className} flex flex-row gap-2 items-center  font-black tracking-wide`}
      >
        {children}
      </p>
    </Button>
  )
}

export default Action
