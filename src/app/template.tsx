import ActionWrapper from '@/components/ActionWrapper'
import { Toaster } from '@/components/ui/toaster'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8">
        <ActionWrapper />
      </div>
      <div className="absolute right-0 top-0 w-16 md:w-32 h-3/4 md:h-2/3 bg-primary rounded-bl-3xl"></div>
      <div className="mx-4 md:mx-8">{children}</div>
      <Toaster />
    </>
  )
}
