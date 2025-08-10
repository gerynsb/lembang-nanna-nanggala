import Image from "next/image";

const potensi = [
  {
    title: "Screenhouse",
    desc: "Screenhouse budidaya cabai khas Toraja di Nanna' Nanggala.",
    image: "/images/Potensi/screenhouse.jpeg",
  },
  {
    title: "Agrowisata Batu Osok",
    desc: "Wisata alam buatan perkebunan di dusun Mangli', Nanna' Nanggala.",
    image: "/images/Potensi/Agrowisata.jpeg",
  },
  {
    title: "Hutan Lindung Nanggala",
    desc: "Nanna' Nanggala memiliki hutan lindung yang asri dan lebat.",
    image: "/images/Potensi/hutan.jpeg",
  },
    {
    title: "Air Terjun Batu Lampo' ",
    desc: "Air terjun Batu Lampo' adalah air terjun yang indah dan menawan.",
    image: "/images/Potensi/batulampo'.jpeg",
  },
    {
    title: "Tongkonan Kariango",
    desc: "Tongkonan paling tua di lembang Nanna' Nanggala dengan nilai sejarah yang tinggi.",
    image: "/images/Potensi/Tongkonan.jpeg",
  },
    {
    title: "Pesona Alam Nanna'",
    desc: "Begitu banyak hamparan sawah dan hutan dengan pemandangannya yang indah.",
    image: "/images/Potensi/Alam.jpeg",
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
