import Image from "next/image";

const potensi = [
  {
    title: "Wisata Alam",
    desc: "Dipenuhi pemandangan Alam yang indah",
    image: "/images/Potensi/Toraja-2.jpg",
  },
  {
    title: "Wisata Budaya",
    desc: "Beragam kegiatan adat Toraja menjadi daya tarik lembang ini.",
    image: "/images/Potensi/upacara.webp",
  },
  {
    title: "Wisata Buatan",
    desc: "Pertambakan dan budidaya ikan dipadukan dengan pemandangan yang indah.",
    image: "/images/Potensi/tambak.jpg",
  },
];

export default function Section4() {
  return (
    <section id="section4" className="bg-[#f2f8e8] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
          Potensi dan Daya Tarik <br /> Wisata
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {potensi.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-black">{item.title}</h3>
                <p className="text-black">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
