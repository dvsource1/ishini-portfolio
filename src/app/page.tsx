import Image from 'next/image'
import TeacherPNG from '../assets/Teacher.png'

const Home: React.FC = () => {
  return (
    <div className="">
      <div className="absolute right-0 bottom-0 -scale-x-100">
        <Image src={TeacherPNG} alt="A Teacher" />
      </div>
    </div>
  )
}

export default Home
