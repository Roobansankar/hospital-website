import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-xl font-bold">MediCare Hospital</h3>
            <p className="mb-4 text-gray-400">
              Providing quality healthcare services for over 25 years. Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about/profile" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/departments/cardiology" className="hover:text-white">
                  Departments
                </Link>
              </li>
              <li>
                <Link href="/facilities/icu" className="hover:text-white">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/patients/visiting-hours" className="hover:text-white">
                  Patient Information
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services/emergency" className="hover:text-white">
                  24/7 Emergency Care
                </Link>
              </li>
              <li>
                <Link href="/services/diagnostics" className="hover:text-white">
                  Diagnostic Services
                </Link>
              </li>
              <li>
                <Link href="/services/surgery" className="hover:text-white">
                  Surgical Procedures
                </Link>
              </li>
              <li>
                <Link href="/services/consultation" className="hover:text-white">
                  Online Consultation
                </Link>
              </li>
              <li>
                <Link href="/services/pharmacy" className="hover:text-white">
                  Pharmacy Services
                </Link>
              </li>
              <li>
                <Link href="/services/rehabilitation" className="hover:text-white">
                  Rehabilitation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-blue-500" />
                <span>123 Healthcare Avenue, Medical District, City, Country - 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-blue-500" />
                <span>info@medicarehospital.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-12 h-64 w-full overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hospital Location"
          ></iframe>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} MediCare Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
