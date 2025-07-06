import { MapPin, Navigation, Clock } from "lucide-react";

export default function SectionLokasi() {
  return (
    <section id="sectionLokasi" className="bg-[#f8f9fa] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {/* <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-3">
            LOKASI
          </span> */}
          <h2 className="text-4xl font-bold text-black mb-4">
            Lokasi Lembang Nanna
          </h2>
          <p className="text-black max-w-2xl mx-auto">
            Temukan keindahan Lembang Nanna yang berlokasi di Kecamatan Nanggala,
            Kabupaten Toraja Utara, Sulawesi Selatan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127698.40919975189!2d119.78123949999999!3d-2.9394705000000037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbb7b2aa9c0f2ff%3A0x66d7b9cc2f63865e!2sLembang%20Nanna%2C%20Kec.%20Nanggala%2C%20Kabupaten%20Toraja%20Utara%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1720242617481!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-black mb-6">Informasi Lokasi</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-green-600 w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-semibold text-black">Alamat</h4>
                  <p className="text-black">
                    Lembang Nanna, Kec. Nanggala, Kabupaten Toraja Utara,
                    Sulawesi Selatan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Navigation className="text-green-600 w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-semibold text-black">Jarak</h4>
                  <p className="text-black">
                    ± 15 km dari Pusat Kota Rantepao
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-green-600 w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-semibold text-black">Waktu Tempuh</h4>
                  <p className="text-black">
                    ± 45 menit dari Pusat Kota Rantepao
                  </p>
                </div>
              </div>

              <a
                href="https://goo.gl/maps/8M3GJwX7sNpb1MLGA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors text-center"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
