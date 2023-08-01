import { AiFillLinkedin, AiOutlineDownload } from 'react-icons/ai'

export default function Home() {
  return (
    <main className="flex gap-2 flex-col justify-center items-center bg-pink-700 max-h-min h-screen text-purple-200">
      <div className="drop-shadow-lg shadow-black">
        <p>Portfolio Site | Under Construction</p>
      </div>
      <div className="drop-shadow-lg shadow-black">
        <a
          href="https://www.linkedin.com/in/ishini-wijesinghe"
          className="flex gap-1 text-blue-500 hover:underline"
        >
          Linked In <AiFillLinkedin className="mt-1" />
        </a>
      </div>
      <a
        href="/cv/Ishini_Wijesinghe.pdf"
        className="flex gap-1 hover:underline"
        download
      >
        CV <AiOutlineDownload className="mt-0.5 hover:underline" />
      </a>
    </main>
  )
}
