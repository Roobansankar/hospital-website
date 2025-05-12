import { Clock, AlertTriangle, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const VisitingHoursContent = () => {
  const visitingHours = [
    {
      department: "General Wards",
      hours: "10:00 AM - 12:00 PM & 4:00 PM - 8:00 PM",
      days: "All days",
      notes: "Maximum 2 visitors per patient at a time",
    },
    {
      department: "Intensive Care Unit (ICU)",
      hours: "11:00 AM - 12:00 PM & 5:00 PM - 6:00 PM",
      days: "All days",
      notes: "Only 1 visitor per patient for 10 minutes",
    },
    {
      department: "Pediatric Ward",
      hours: "10:00 AM - 8:00 PM",
      days: "All days",
      notes: "Parents/guardians allowed 24/7, other visitors during visiting hours only",
    },
    {
      department: "Maternity Ward",
      hours: "10:00 AM - 12:00 PM & 4:00 PM - 8:00 PM",
      days: "All days",
      notes: "Spouse/partner allowed 24/7, other visitors during visiting hours only",
    },
    {
      department: "Psychiatric Ward",
      hours: "4:00 PM - 6:00 PM",
      days: "Monday, Wednesday, Friday, Sunday",
      notes: "Visitors must be pre-approved by the attending physician",
    },
    {
      department: "Isolation Wards",
      hours: "As advised by medical staff",
      days: "As advised by medical staff",
      notes: "Special protocols apply, please consult with nursing staff",
    },
  ]

  const guidelines = [
    "All visitors must check in at the reception desk and obtain a visitor's pass",
    "Children under 12 years are not allowed in patient areas except in special circumstances",
    "Visitors with cold, flu, or other contagious illnesses should refrain from visiting",
    "Maintain quiet and respect the privacy of all patients",
    "Follow all instructions given by hospital staff",
    "Limit the number of personal items brought for patients",
    "Smoking is strictly prohibited throughout the hospital premises",
    "Turn mobile phones to silent mode in patient areas",
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Visiting Hours by Department
          </h2>
          <div className="mb-8 mx-auto h-1 w-24 bg-blue-600"></div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg bg-white shadow-md dark:bg-gray-800">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border-b p-4 text-left">Department</th>
                  <th className="border-b p-4 text-left">Hours</th>
                  <th className="border-b p-4 text-left">Days</th>
                  <th className="border-b p-4 text-left">Special Notes</th>
                </tr>
              </thead>
              <tbody>
                {visitingHours.map((item, index) => (
                  <tr key={index} className="border-b last:border-b-0 dark:border-gray-700">
                    <td className="p-4 font-medium text-gray-900 dark:text-white">{item.department}</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">{item.hours}</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">{item.days}</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Visitor Guidelines</h2>
            <div className="mb-6 h-1 w-24 bg-blue-600"></div>
            <ul className="space-y-4">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{guideline}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <Alert variant="default">
              <Clock className="h-4 w-4" />
              <AlertTitle>Visiting Hours May Change</AlertTitle>
              <AlertDescription>
                Please note that visiting hours may be adjusted based on patient needs or hospital circumstances. Always
                check with the nursing station for the most current information.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>COVID-19 Precautions</AlertTitle>
              <AlertDescription>
                Due to ongoing health concerns, additional restrictions may apply. All visitors must wear masks and may
                be subject to temperature checks and screening questions.
              </AlertDescription>
            </Alert>

            <Alert variant="default" className="border-blue-600 text-blue-600">
              <Info className="h-4 w-4" />
              <AlertTitle>Virtual Visits</AlertTitle>
              <AlertDescription className="text-gray-700 dark:text-gray-300">
                We encourage the use of video calls for patients to connect with family and friends who cannot visit in
                person. Our staff can assist with setting up these calls.
              </AlertDescription>
            </Alert>
          </div>
        </div>

        <div className="rounded-lg bg-blue-50 p-8 dark:bg-blue-950">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">Visitor Amenities</h2>
          <div className="mb-8 mx-auto h-1 w-24 bg-blue-600"></div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Cafeteria</h3>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                Located on the ground floor, our cafeteria offers a variety of meals, snacks, and beverages.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Hours:</strong> 7:00 AM - 9:00 PM daily
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Waiting Lounges</h3>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                Comfortable waiting areas are available on each floor with seating, Wi-Fi, and charging stations.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Access:</strong> 24/7 for visitors
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Gift Shop</h3>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                Our gift shop offers flowers, cards, gifts, toiletries, and other essentials for patients.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Hours:</strong> 9:00 AM - 7:00 PM (Mon-Sat), 11:00 AM - 5:00 PM (Sun)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisitingHoursContent
