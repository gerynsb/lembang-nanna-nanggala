import Image from "next/image";

export default function SectionKeunggulan() {
  return (
    <section id="sectionKeunggulan" className="bg-[#00052d] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Gambar */}
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/images/keunggulan/Pemandangan.jpg"
            alt="Pemandangan Lembang Nanna"
            width={600}
            height={400}
            className="rounded-3xl object-cover w-full h-auto hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Konten */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-10">Keunggulan Lembang Nanna</h2>
          <ul className="space-y-8 text-xl">
            <li className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold">•</span>
                <span className="font-semibold">Budaya dan Kearifan Lokal</span>
              </div>
              <hr className="border-white/30 w-full mt-2" />
            </li>

            <li className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold">•</span>
                <span className="font-semibold">Agriculture dan pertanian</span>
              </div>
              <hr className="border-white/30 w-full mt-2" />
            </li>

            <li className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold">•</span>
                <span className="font-semibold">Ramah Lingkungan</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
