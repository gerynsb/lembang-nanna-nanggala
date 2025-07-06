import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Instagram, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#00052d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Section 1: Contact */}
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-red-600">
              Kontak
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500" />
                <div>
                  <p className="text-gray-400 text-sm">Telepon</p>
                  <p className="font-medium">08xxxxxxxxxx</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="text-red-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
                </svg>
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <p className="font-medium">08xxxxxxxxxx</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Address */}
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-red-600">
              Alamat
            </h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-red-500 mt-1" />
              <p className="leading-relaxed">
                Lembang Nanna,
                <br />
                Nanggala, Kec. Nanggala,
                <br />
                Kab. Toraja Utara,
                <br />
                Sulawesi Selatan
              </p>
            </div>
          </div>

          {/* Section 3: KKNT114 Unhas */}
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-red-600">
              KKNT114 Unhas
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-red-500" />
                <div>
                  <p className="text-gray-400 text-sm">Instagram</p>
                  <Link
                    href="https://www.instagram.com/kknt114unhas_nanna"
                    target="_blank"
                    className="font-medium hover:text-red-400 transition-colors"
                  >
                    @kknt114unhas_nanna
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 448 512"
                  className="text-red-500 fill-current"
                >
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                </svg>
                <div>
                  <p className="text-gray-400 text-sm">TikTok</p>
                  <Link
                    href="https://www.tiktok.com/@kknt114.lembangnanna"
                    target="_blank"
                    className="font-medium hover:text-red-400 transition-colors"
                  >
                    @kknt114.lembangnanna
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="flex justify-center my-16">
          <Image
            src="/images/logo/logo-footer.png"
            alt="Partner Logos"
            width={350}
            height={100}
            className="h-auto"
          />
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} KKNT 114 Universitas Hasanuddin 2025. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
