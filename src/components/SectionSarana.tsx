import Image from "next/image";

const sarana = [
  {
    title: "Pelayanan Publik",
    image: "/images/Sarana/puskesmas.jpg",
  },
  {
    title: "Fasilitas Umum",
    image: "/images/Sarana/tempat-sampah.jpg",
  },
  {
    title: "Destinasi Menarik",
    image: "/images/Sarana/tongkonan1.jpg",
  },
];

export default function SectionSarana() {
  return (
    <section id="sectionSarana" className="bg-[#f2f8e8] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Sarana dan Prasarana
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sarana.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden shadow-md h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-base font-semibold text-gray-800">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
