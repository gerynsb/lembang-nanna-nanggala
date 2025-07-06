import Link from "next/link";

export default function SectionHubungi() {
  return (
    <section
      id="sectionHubungi"
      className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/Hubungi/Hubungi.png')"
      }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-blue bg-opacity-60 z-0"></div>

      {/* Konten */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
          Siap mengunjungi Desa Lembang Nanna Nanggala ?
        </h2>
        <Link href="#kontak">
          <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all">
            HUBUNGI KAMI
          </button>
        </Link>
      </div>
    </section>
  );
}
