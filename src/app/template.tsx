export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="absolute right-0 top-0 w-36 h-2/3 bg-yellow-500 rounded-bl-3xl"></div>
      {children}
    </div>
  )
}
