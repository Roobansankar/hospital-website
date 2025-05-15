"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "https://i.pinimg.com/originals/63/6e/17/636e17db16bb81b63b8e6cc30546ebf9.jpg",
      alt: "Hospital Building",
      caption: "Our Modern Hospital Facility",
    },
    {
      url: "https://hospitalarchitects.in/sites/default/files/2022-09/All%20The%20Keys%20To%20The%20Correct%20Design%20And%20Planning%20Of%20An%20Operating%20Theatre.jpg",
      alt: "Operation Theatre",
      caption: "State-of-the-art Operation Theatres",
    },
    {
      url: "https://1.bp.blogspot.com/-JbkztpDv0hE/XwAoLwwjQHI/AAAAAAAABqw/Y-p36M5x58kVKe_hbkxaTEIuoiHbwr_VACK4BGAsYHg/s1280/edited_ots2.jpg",
      alt: "Patient Room",
      caption: "Comfortable Patient Rooms",
    },
    {
      url: "https://www.missouripartnership.com/wp-content/uploads/2021/12/iStock-1346675584.jpg",
      alt: "Laboratory",
      caption: "Advanced Diagnostic Laboratory",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* <h2
          className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white custom-text-shadow md:text-4xl"
          data-aos="fade-up"
        >
          Our Facilities
        </h2> */}
        <h2
          className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white custom-text-shadow md:text-4xl transform-gpu"
          data-aos="fade-up"
        >
          Our <span className="text-orange-600">Facilities</span>
        </h2>

        <div
          className="relative mx-auto h-[300px] max-w-5xl overflow-hidden rounded-xl md:h-[400px] lg:h-[500px] transform-gpu"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-between px-4">
            <button
              onClick={prevSlide}
              className="rounded-full bg-white/30 p-2 text-white backdrop-blur-sm transition hover:bg-white/50"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full bg-white/30 p-2 text-white backdrop-blur-sm transition hover:bg-white/50"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div
            className="h-full w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="absolute flex h-full w-full">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className="relative h-full w-full flex-shrink-0"
                >
                  <Image
                    src={slide.url || "/placeholder.svg"}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={slideIndex === 0}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                    <h3 className="text-xl font-semibold md:text-2xl">
                      {slide.caption}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center space-x-2">
            {slides.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`h-2 w-8 rounded-full transition-all ${
                  slideIndex === currentIndex
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
