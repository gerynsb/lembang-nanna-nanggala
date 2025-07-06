import Image from "next/image";

export default function SectionInfografis() {
  return (
    <section id="sectionInfografis" className="bg-white py-20 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Gambar Peta */}
        <div className="flex justify-center">
          <Image
            src="/images/Infografis/Peta.png"
            alt="Peta Kelurahan Nanna"
            width={700}
            height={700}
            className="object-contain w-full max-w-xl"
          />
        </div>

        {/* Teks */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">Infografis</h2>
          <p className="text-black text-base leading-relaxed">
            Kelurahan Nanna Nanggala memiliki luas{" "}
            <strong>4,65 km²</strong> (6,84% dari kecamatan) dengan jumlah penduduk{" "}
            <strong>1.303 jiwa</strong>. Kepadatan mencapai{" "}
            <strong>280 jiwa/km²</strong>, salah satu yang tertinggi di Nanggala.
            Jarak ke ibu kota kecamatan <strong>3 km</strong> dan memiliki{" "}
            <strong>12 RT aktif</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
