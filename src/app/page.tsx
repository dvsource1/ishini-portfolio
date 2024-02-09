import Image from 'next/image'
import TeacherPNG from '../assets/Teacher.png'

const Home: React.FC = () => {
  return (
    <>
      <div className="mx-8">
        <h2 className="text-[#D9D9D9] text-xl">A Teacher</h2>
        <h1 className="mr-20 font-black text-8xl text-[#F29F05]">
          Ishini Wijesinghe
        </h1>

        <div className="mt-16 text-[#D9D9D9] text-lg">
          <p>BSc in Mathematics</p>
          <p>University of Kelaniya, Sri Lanka</p>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 -scale-x-100">
        <Image src={TeacherPNG} alt="A Teacher" />
      </div>
    </>
  )
}

export default Home
