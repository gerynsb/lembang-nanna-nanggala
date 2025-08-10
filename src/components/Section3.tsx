import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Section3() {
  return (
    <section id="section3" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Gambar */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/Tentang/Tongkonan.jpeg"
            alt="Budaya Toraja"
            width={700}
            height={500}
            className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Teks */}
        <div className="text-gray-900 lg:pl-10">
          <p className="flex items-center gap-2 text-sm text-green-700 font-medium mb-4">
            <MapPin className="w-4 h-4" /> Desa Nanna&apos; Nanggala
          </p>
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Membawa Lembang Nanna&apos;
            <br />
            dalam Dunia Digital
          </h2>
          <blockquote className="text-gray-700 mb-10 text-base leading-relaxed border-l-4 border-green-600 pl-6 py-2">
            &ldquo;Digitalisasi mampu membuka peluang yang lebih besar,
            Lembang Nanna adalah sebuah desa yang memiliki berbagai
            kekayaan alam yang melimpah serta tradisi yang
            menggambarkan keunikan Toraja. Perpaduan antara
            keduanya memberikan daya tarik yang luar biasa guna
            mengunjungi desa ini.&rdquo;
          </blockquote>

          <Link href="#tentang">
            <button className="bg-white hover:bg-green-700 cursor-pointer text-black hover:text-white border-2 border-green-700 transition-all px-8 py-3 rounded-full font-medium text-base flex items-center gap-2 shadow-md">
              Pelajari lebih lanjut
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="mt-0.5"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
