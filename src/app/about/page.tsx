import { Paytone_One } from 'next/font/google'

const secondaryFont = Paytone_One({ subsets: ['latin'], weight: '400' })

const AboutPage: React.FC = () => {
  return (
    <section className="mr-12 md:mr-24">
      <h2 className={`${secondaryFont.className} text-foreground text-xl`}>
        I am Ishini Wijesinghe, and
        <br />
        I&#x2019;m excited to welcome you to my website!
      </h2>
      <p className="pr-4 text-sm md:text-lg text-justify mt-8 text-primary">
        With a Bachelor of Science degree in Mathematics from the University of
        Kelaniya, Sri Lanka, I bring a passion for teaching and a wealth of
        knowledge to the table. As a government school teacher, I have
        experience in effectively communicating mathematical concepts to
        students of all backgrounds.
      </p>
      <p className="pr-4 text-sm md:text-lg text-justify mt-8 text-primary">
        In addition to my work in the traditional classroom, I offer
        personalized online classes in math and science. These sessions are
        designed to meet your specific needs and help you succeed in your
        studies.
      </p>
      <p className="pr-4 text-sm md:text-lg text-justify mt-8 text-primary">
        Whether you&#x2019;re struggling with homework or aiming to improve your
        math and science skills, I&#x2019;m here to support you every step of
        the way. Let&#x2019;s embark on this learning journey together and
        unlock your full potential!
      </p>
    </section>
  )
}

export default AboutPage
