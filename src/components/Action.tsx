import { Button } from './ui/button'

type ActionProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

const Action: React.FC<ActionProps> = ({ children, ...props }: any) => {
  return (
    <Button
      className="rounded-full h-12 px-6 bg-[#D9D9D9] text-[#593202]"
      {...props}
    >
      <p className=" text-xl font-black tracking-wider">{children}</p>
    </Button>
  )
}

export default Action
