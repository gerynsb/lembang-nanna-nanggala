"use client";
import Navbar from "./Navbar";
import { scrollToElement } from "@/lib/scrollUtils";

export default function Hero() {
  const handleHubungiClick = () => {
    scrollToElement('sectionHubungi');
  };

  const handleLokasiClick = () => {
    scrollToElement('sectionLokasi');
  };

  const handlePelajariClick = () => {
    scrollToElement('hero');
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/hero-section.png')"
      }}
    >
      {/* More transparent overlay */}
      <div className="absolute inset-0 bg-blue-48 bg-opacity-10 z-0"></div>

      {/* Navbar */}
      <Navbar />

      {/* Konten tengah */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-snug text-shadow-lg">
          LEMBANG NANNA NANGGALA, KEC. NANGGALA, KAB. TORAJA UTARA
        </h1>
        
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-shadow">
          Menelusuri keindahan alam dan kekayaan budaya Toraja
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <button 
            onClick={handleHubungiClick}
            className="bg-blue-500 hover:bg-blue-700 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 cursor-pointer"
          >
            HUBUNGI KAMI
          </button>
          <button 
            onClick={handleLokasiClick}
            className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 cursor-pointer"
          >
            LOKASI KAMI
          </button>
        </div>
        
        {/* <div className="mt-6">
          <button 
            onClick={handlePelajariClick}
            className="text-white underline hover:text-blue-300 transition-colors"
          >
            Pelajari Lebih Lanjut
          </button>
        </div> */}
      </div>
    </section>
  );
}
