"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const dokumentasi = [
  "/images/kknt114/dokumentasi-1.png",
  "/images/kknt114/dokumentasi-2.png",
  "/images/kknt114/dokumentasi-3.png",
];

export default function KKNTSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? dokumentasi.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === dokumentasi.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === dokumentasi.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="sectionkknt114">
      {/* Section 1: Full-width KKNT logo image */}
      <section className="bg-red-600 py-0">
        <div className="w-full">
          <Image
            src="/images/kknt114/kknt-114-Unhas.png"
            alt="KKNT 114 Unhas"
            width={1920}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </section>

      {/* Section 2: Carousel with proper sizing */}
      <section className="bg-red-600 text-white py-12 px-4">
        <div className="relative max-w-5xl mx-auto bg-white p-5 rounded-lg text-black mb-8">
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-1 hover:bg-gray-300 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="h-[400px] flex items-center justify-center">
            <Image
              src={dokumentasi[currentIndex]}
              alt={`Dokumentasi ${currentIndex + 1}`}
              width={800}
              height={450}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-1 hover:bg-gray-300 z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {dokumentasi.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === idx ? "bg-red-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Sample image */}
      <section className="bg-red-600 text-white py-12 px-4 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-3">
          <Image
            src="/images/kknt114/kknt-sample.png"
            alt="KKNT Sample"
            width={1000}
            height={400}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </section>
    </div>
  );
}