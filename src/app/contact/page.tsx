import ContactForm from '@/components/ContactForm'

const ContactPage: React.FC = () => {
  return (
    <section className="mr-12 md:mr-24">
      <h2 className="text-foreground text-xl">Send Me a Message</h2>
      <div className="mt-8 w-2/3">
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactPage
