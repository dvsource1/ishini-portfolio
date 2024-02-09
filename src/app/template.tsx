import ActionWrapper from '@/components/ActionWrapper'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="absolute left-8 bottom-8">
        <ActionWrapper />
      </div>
      <div className="absolute right-0 top-0 w-32 h-2/3 bg-[#F29F05] rounded-bl-3xl"></div>
      {children}
    </div>
  )
}
