import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"

export const metadata = {
  title: "Contact Us | MediCare Hospital",
  description: "Get in touch with MediCare Hospital for appointments, inquiries, and feedback",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </main>
  )
}
