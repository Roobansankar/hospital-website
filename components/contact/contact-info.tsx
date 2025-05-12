import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react"

const ContactInfo = () => {
  return (
    <div data-animation="fade-left">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
      <div className="mb-6 h-1 w-24 bg-blue-600"></div>

      <div className="mb-8 space-y-6">
        <div className="flex items-start">
          <MapPin className="mr-4 h-6 w-6 shrink-0 text-blue-600" />
          <div>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Our Location</h3>
            <p className="text-gray-700 dark:text-gray-300">
              123 Healthcare Avenue, Medical District
              <br />
              City, Country - 12345
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="mr-4 h-6 w-6 shrink-0 text-blue-600" />
          <div>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Phone Numbers</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Main: +1 (555) 123-4567
              <br />
              Emergency: +1 (555) 911-0000
              <br />
              Appointments: +1 (555) 123-4569
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="mr-4 h-6 w-6 shrink-0 text-blue-600" />
          <div>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Email Addresses</h3>
            <p className="text-gray-700 dark:text-gray-300">
              General Inquiries: info@medicarehospital.com
              <br />
              Appointments: appointments@medicarehospital.com
              <br />
              Patient Support: support@medicarehospital.com
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="mr-4 h-6 w-6 shrink-0 text-blue-600" />
          <div>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Working Hours</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Emergency Department:</span> 24/7
              <br />
              <span className="font-medium">Outpatient Departments:</span> Monday to Friday, 8:00 AM - 8:00 PM
              <br />
              <span className="font-medium">Weekend OPD:</span> Saturday, 9:00 AM - 5:00 PM
              <br />
              <span className="font-medium">Administrative Office:</span> Monday to Friday, 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Calendar className="mr-4 h-6 w-6 shrink-0 text-blue-600" />
          <div>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Appointment Booking</h3>
            <p className="text-gray-700 dark:text-gray-300">
              For appointments, you can call our appointment desk, use our online booking system, or visit the hospital
              during working hours.
            </p>
          </div>
        </div>
      </div>

      <div className="h-80 w-full overflow-hidden rounded-lg">
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
    </div>
  )
}

export default ContactInfo
