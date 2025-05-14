// "use client";

// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import axios from "axios";

// const BookAppointment = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     date: "",
//     time: "",
//     doctor: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
//     AOS.refresh();
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("loading");
//     try {
//       await axios.post(
//         "https://68247a3465ba0580339a73c6.mockapi.io/hospitalbooking",
//         formData
//       );
//       setStatus("success");
//       setFormData({
//         name: "",
//         phone: "",
//         date: "",
//         time: "",
//         doctor: "",
//         message: "",
//       });
//     } catch (error) {
//       setStatus("error");
//     }
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="bg-blue-800 text-white py-16 overflow-hidden ">
//         <div className="container mx-auto px-4">
//           <div className="mx-auto max-w-3xl text-center">
//             <h1
//               className="mb-4 text-4xl font-bold md:text-5xl transform-gpu"
//               data-aos="fade-right"
//             >
//               Booking Us
//             </h1>
//             <p
//               className="text-lg text-blue-100 transform-gpu"
//               data-aos="fade-left"
//               data-aos-delay="200"
//             >
//               Get in touch with us for appointments, inquiries, or feedback.
//               We're here to help.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Form Section */}
//       <section className="min-h-screen bg-gray-100 py-16 px-4">
//         <div
//           className="mx-auto max-w-2xl bg-white p-8 shadow-lg rounded-lg transform-gpu"
//           data-aos="zoom-in"
//         >
//           <h2 className="mb-6 text-3xl font-bold text-center text-blue-700">
//             Book an Appointment
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-6 ">
//             <div data-aos="fade-right" className="transform-gpu">
//               <label className="block mb-1 font-medium text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-4 py-2"
//               />
//             </div>

//             <div data-aos="fade-left" className="transform-gpu">
//               <label className="block mb-1 font-medium text-gray-700">
//                 Phone
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-4 py-2"
//               />
//             </div>

//             <div data-aos="fade-right" className="transform-gpu">
//               <label className="block mb-1 font-medium text-gray-700">
//                 Doctor
//               </label>
//               <select
//                 name="doctor"
//                 value={formData.doctor}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-4 py-2"
//               >
//                 <option value="">Select Doctor</option>
//                 <option value="Dr. Rajesh">Dr. Rajesh</option>
//                 <option value="Dr. Priya">Dr. Priya</option>
//                 <option value="Dr. Arun">Dr. Arun</option>
//               </select>
//             </div>

//             <div data-aos="fade-left" className="transform-gpu">
//               <label className="block mb-1 font-medium text-gray-700">
//                 Date
//               </label>
//               <input
//                 type="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-4 py-2"
//               />
//             </div>

//             <div data-aos="fade-right" className="transform-gpu">
//               <label className="block mb-1 font-medium text-gray-700">
//                 Time
//               </label>
//               <input
//                 type="time"
//                 name="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-4 py-2"
//               />
//             </div>

//             <div data-aos="fade-up" className="transform-gpu">
//               <label className="block mb-1 font-medium text-gray-700">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={4}
//                 className="w-full border rounded px-4 py-2"
//               ></textarea>
//             </div>

//             <div data-aos="zoom-in" className="transform-gpu">
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//               >
//                 {status === "loading" ? "Booking..." : "Book Now"}
//               </button>
//             </div>

//             {status === "success" && (
//               <p
//                 className="text-green-600 text-center transform-gpu"
//                 data-aos="fade-in"
//               >
//                 Appointment booked successfully!
//               </p>
//             )}
//             {status === "error" && (
//               <p
//                 className="text-red-600 text-center transform-gpu"
//                 data-aos="fade-in"
//               >
//                 Something went wrong. Please try again.
//               </p>
//             )}
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BookAppointment;

"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await axios.post(
        "https://68247a3465ba0580339a73c6.mockapi.io/hospitalbooking",
        formData
      );
      setStatus("success");
      toast.success("Appointment booked successfully!");
      setFormData({
        name: "",
        phone: "",
        date: "",
        time: "",
        doctor: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="mb-4 text-4xl font-bold md:text-5xl transform-gpu"
              data-aos="fade-right"
            >
              Booking Us
            </h1>
            <p
              className="text-lg text-blue-100 transform-gpu"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Get in touch with us for appointments, inquiries, or feedback.
              We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="min-h-screen bg-gray-100 py-16 px-4">
        <div
          className="mx-auto max-w-2xl bg-white p-8 shadow-lg rounded-lg transform-gpu"
          data-aos="zoom-in"
        >
          <h2 className="mb-6 text-3xl font-bold text-center text-blue-700">
            Book an Appointment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div data-aos="fade-right" className="transform-gpu">
              <label className="block mb-1 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div data-aos="fade-left" className="transform-gpu">
              <label className="block mb-1 font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div data-aos="fade-right" className="transform-gpu">
              <label className="block mb-1 font-medium text-gray-700">
                Doctor
              </label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2"
              >
                <option value="">Select Doctor</option>
                <option value="Dr. Rajesh">Dr. Rajesh</option>
                <option value="Dr. Priya">Dr. Priya</option>
                <option value="Dr. Arun">Dr. Arun</option>
              </select>
            </div>

            <div data-aos="fade-left" className="transform-gpu">
              <label className="block mb-1 font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div data-aos="fade-right" className="transform-gpu">
              <label className="block mb-1 font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div data-aos="fade-up" className="transform-gpu">
              <label className="block mb-1 font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border rounded px-4 py-2"
              ></textarea>
            </div>

            <div data-aos="zoom-in" className="transform-gpu">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                {status === "loading" ? "Booking..." : "Book Now"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default BookAppointment;
