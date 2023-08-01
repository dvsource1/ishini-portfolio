import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-black/50 max-h-min h-screen">
      <div className="h-screen flex flex-col items-center justify-between pt-12 px-4 text-pink-500">
        <div className="text-center">
          <div className="text-5xl">I&apos;m Sorry, Nangi Baba ❤️</div>
          <div className="text-3xl mt-6">
            I know I have overreacted 😞, and I didn&apos;t mean to come across
            as not caring. If you feel that way, I&apos;m truly sorry 😥.
          </div>
        </div>

        <div className="text-center pt-24 pb-4">
          <div className="">I hope you find this meaningfull 🤗</div>
          <div className="pt-24">-- Aiya Baba 😘 --</div>
        </div>
      </div>
    </main>
  )
}
