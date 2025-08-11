"use client";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const dokumentasi = [
  "/images/kknt114/foto2.JPG",
  "/images/kknt114/foto3.JPG",
  "/images/kknt114/foto4.JPG",
  "/images/kknt114/foto1.jpg",
  "/images/kknt114/foto.JPG",
  "/images/kknt114/Foto8.jpg",
  "/images/kknt114/Foto7.jpg",
  "/images/kknt114/fotor.jpeg",
  "/images/kknt114/Foto9.jpg",
  "/images/kknt114/foto12.jpeg",
  "/images/kknt114/foto13.jpeg",
  "/images/kknt114/foto15.jpeg",
];

export default function KKNTSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Menentukan foto yang ditampilkan (6 dfgdgpertama atau semua)
  const displayedPhotos = showAll ? dokumentasi : dokumentasi.slice(0, 6);

  return (
    <div id="sectionkknt114">
      {/* Section 1: Full-width KKNT logo image */}
      <section className="bg-red-600 py-0">
        <div className="w-full">
          <Image
            src="/images/kknt114/kknt114Unhas.png"
            alt="KKNT 114 Unhas"
            width={1920}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </section>

      {/* Section 2: Photo Gallery */}
      <section className="bg-red-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Galeri Dokumentasi</h2>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedPhotos.map((foto, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-white"
                onClick={() => openLightbox(foto)}
              >
                <Image
                  src={foto}
                  alt={`Dokumentasi ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Klik untuk memperbesar
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Tampilkan Selengkapnya */}
          {dokumentasi.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-white text-red-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                {showAll ? "Tampilkan Lebih Sedikit" : `Tampilkan Selengkapnya (${dokumentasi.length - 6} foto lagi)`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <Image
              src={selectedImage}
              alt="Dokumentasi Diperbesar"
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Section 3: Sample image */}
      <section className="bg-red-600 text-white py-12 px-4 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-3">
          <Image
            src="/images/kknt114/kknt.png"
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