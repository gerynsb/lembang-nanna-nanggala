"use client";

export default function SectionAboutNanna() {
  return (
    <section id="about-nanna" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-green-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header Section dengan animasi */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r text-black bg-clip-text mb-6 leading-tight">
            Desa Nanna
          </h2>
          <div className="text-2xl md:text-3xl text-gray-700 font-medium mb-6">
            Lembang Nanna Nanggala
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Desa Nanna atau lembang nanna&apos; terletak di Lembang Nanna Nanggala, Kecamatan Nanggala, 
            Kabupaten Toraja Utara, Sulawesi Selatan. Nanna merupakan destinasi 
            wisata budaya yang kaya akan tradisi Toraja autentik.
          </p>
        </div>
        
        {/* Cards Section dengan hover effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Sejarah Nanna</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Desa Nanna memiliki sejarah panjang sebagai pusat budaya Toraja 
                di Kecamatan Nanggala dengan tradisi yang masih terjaga hingga kini.
              </p>
            </div>
          </div>
          
          <div className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Budaya Toraja di Nanna</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Tradisi Rambu Solo, Tongkonan, dan upacara adat Toraja masih 
                dijalankan dengan autentik di Desa Nanna, Nanggala.
              </p>
            </div>
          </div>
          
          <div className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Wisata Nanggala</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Nikmati keindahan alam Toraja Utara dan pengalaman budaya yang 
                tak terlupakan di Lembang Nanna Nanggala.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Section dengan design yang lebih menarik */}
        <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-10 rounded-3xl shadow-2xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 border-2 border-white/20 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-2 border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/10 rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Mengapa harus ke Lembang Nanna?
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="font-bold text-white mb-3 text-lg flex items-center">
                  <span className="text-2xl mr-3">📍</span>
                  Lokasi Strategis
                </h4>
                <p className="text-blue-100 leading-relaxed">
                  Desa Nanna terletak di jantung Kecamatan Nanggala, Toraja Utara, 
                  mudah diakses dari berbagai destinasi wisata di Toraja.
                </p>
              </div>
              
              <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="font-bold text-white mb-3 text-lg flex items-center">
                  <span className="text-2xl mr-3">🏛️</span>
                  Budaya Autentik
                </h4>
                <p className="text-blue-100 leading-relaxed">
                  Pengalaman budaya Toraja yang otentik di Nanna Nanggala dengan 
                  tradisi yang masih hidup dan terpelihara.
                </p>
              </div>
              
              <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="font-bold text-white mb-3 text-lg flex items-center">
                  <span className="text-2xl mr-3">🌄</span>
                  Alam Menawan
                </h4>
                <p className="text-blue-100 leading-relaxed">
                  Pemandangan alam khas Toraja Utara yang memukau di sekitar 
                  Lembang Nanna Nanggala.
                </p>
              </div>
              
              <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="font-bold text-white mb-3 text-lg flex items-center">
                  <span className="text-2xl mr-3">👥</span>
                  Masyarakat Ramah
                </h4>
                <p className="text-blue-100 leading-relaxed">
                  Masyarakat Desa Nanna yang ramah dan siap menyambut wisatawan 
                  dengan kehangatan khas Toraja.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
