// const ContactHero = () => {
//   return (
//     <section className="bg-blue-800 py-16 text-white">
//       <div className="container mx-auto px-4">
//         <div className="mx-auto max-w-3xl text-center" data-animation="fade-up">
//           <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
//           <p className="text-lg text-blue-100">
//             Get in touch with us for appointments, inquiries, or feedback. We're here to help.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactHero

const ContactHero = () => {
  return (
    <section className="bg-blue-800 py-16 text-white overflow-hidden transform-gpu">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="mb-4 text-4xl font-bold md:text-5xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Contact Us
          </h1>
          <p
            className="text-lg text-blue-100"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Get in touch with us for appointments, inquiries, or feedback. We're
            here to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
