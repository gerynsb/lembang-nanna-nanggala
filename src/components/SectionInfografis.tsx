"use client";

import Image from "next/image";
import { useState } from "react";

export default function SectionInfografis() {
  const [activeTab, setActiveTab] = useState('penduduk');

  // Data untuk diagram penduduk
  const pendudukData = [
    { label: 'Total', sublabel: 'Penduduk', value: 1206, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500', height: 280 },
    { label: 'Laki-laki', sublabel: '49.7%', value: 599, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500', height: 139 },
    { label: 'Perempuan', sublabel: '51.4%', value: 620, color: 'from-pink-500 to-rose-500', bgColor: 'bg-pink-500', height: 144 }
  ];

  // Data untuk diagram pendidikan
  const pendidikanData = [
    { label: 'SMA/Sederajat', sublabel: '345 jiwa', value: 345, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500', height: 280 },
    { label: 'SD/Sederajat', sublabel: '250 jiwa', value: 250, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500', height: 203 },
    { label: 'SMP/Sederajat', sublabel: '179 jiwa', value: 179, color: 'from-orange-500 to-amber-500', bgColor: 'bg-orange-500', height: 145 },
    { label: 'Tidak Sekolah', sublabel: '159 jiwa', value: 159, color: 'from-red-500 to-rose-500', bgColor: 'bg-red-500', height: 129 },
    { label: 'TK/PAUD', sublabel: '93 jiwa', value: 93, color: 'from-purple-500 to-violet-500', bgColor: 'bg-purple-500', height: 76 },
    { label: 'S1', sublabel: '78 jiwa', value: 78, color: 'from-indigo-500 to-blue-500', bgColor: 'bg-indigo-500', height: 63 },
    { label: 'Belum Sekolah', sublabel: '78 jiwa', value: 78, color: 'from-gray-500 to-slate-500', bgColor: 'bg-gray-500', height: 63 },
    { label: 'Diploma', sublabel: '21 jiwa', value: 21, color: 'from-teal-500 to-cyan-500', bgColor: 'bg-teal-500', height: 17 },
    { label: 'Profesi', sublabel: '2 jiwa', value: 2, color: 'from-yellow-500 to-amber-500', bgColor: 'bg-yellow-500', height: 5 },
    { label: 'S2', sublabel: '1 jiwa', value: 1, color: 'from-pink-500 to-rose-500', bgColor: 'bg-pink-500', height: 3 }
  ];

  // Data untuk diagram rentang usia
  const rentangUsiaData = [
    { label: '15-19', sublabel: '127 jiwa', value: 127, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500', height: 280 },
    { label: '20-24', sublabel: '114 jiwa', value: 114, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500', height: 252 },
    { label: '10-14', sublabel: '113 jiwa', value: 113, color: 'from-purple-500 to-violet-500', bgColor: 'bg-purple-500', height: 248 },
    { label: '5-9', sublabel: '92 jiwa', value: 92, color: 'from-orange-500 to-amber-500', bgColor: 'bg-orange-500', height: 203 },
    { label: '25-29', sublabel: '88 jiwa', value: 88, color: 'from-pink-500 to-rose-500', bgColor: 'bg-pink-500', height: 194 },
    { label: '40-44', sublabel: '87 jiwa', value: 87, color: 'from-indigo-500 to-blue-500', bgColor: 'bg-indigo-500', height: 192 },
    { label: '50-54', sublabel: '85 jiwa', value: 85, color: 'from-teal-500 to-cyan-500', bgColor: 'bg-teal-500', height: 187 },
    { label: '0-4', sublabel: '81 jiwa', value: 81, color: 'from-red-500 to-pink-500', bgColor: 'bg-red-500', height: 179 },
    { label: '45-49', sublabel: '76 jiwa', value: 76, color: 'from-yellow-500 to-amber-500', bgColor: 'bg-yellow-500', height: 168 },
    { label: '35-39', sublabel: '68 jiwa', value: 68, color: 'from-gray-500 to-slate-500', bgColor: 'bg-gray-500', height: 150 },
    { label: '30-34', sublabel: '60 jiwa', value: 60, color: 'from-emerald-500 to-green-500', bgColor: 'bg-emerald-500', height: 132 },
    { label: '55-59', sublabel: '55 jiwa', value: 55, color: 'from-violet-500 to-purple-500', bgColor: 'bg-violet-500', height: 121 },
    { label: '<75', sublabel: '54 jiwa', value: 54, color: 'from-cyan-500 to-blue-500', bgColor: 'bg-cyan-500', height: 119 },
    { label: '65-69', sublabel: '46 jiwa', value: 46, color: 'from-lime-500 to-green-500', bgColor: 'bg-lime-500', height: 101 },
    { label: '70-74', sublabel: '40 jiwa', value: 40, color: 'from-sky-500 to-blue-500', bgColor: 'bg-sky-500', height: 88 },
    { label: '60-64', sublabel: '36 jiwa', value: 36, color: 'from-rose-500 to-pink-500', bgColor: 'bg-rose-500', height: 79 },
    { label: '75-79', sublabel: '21 jiwa', value: 21, color: 'from-amber-500 to-orange-500', bgColor: 'bg-amber-500', height: 46 },
    { label: '80-84', sublabel: '18 jiwa', value: 18, color: 'from-slate-500 to-gray-500', bgColor: 'bg-slate-500', height: 40 },
    { label: '90-94', sublabel: '6 jiwa', value: 6, color: 'from-fuchsia-500 to-purple-500', bgColor: 'bg-fuchsia-500', height: 13 },
    { label: '85-89', sublabel: '5 jiwa', value: 5, color: 'from-emerald-600 to-green-600', bgColor: 'bg-emerald-600', height: 11 },
    { label: '95-99', sublabel: '4 jiwa', value: 4, color: 'from-blue-600 to-cyan-600', bgColor: 'bg-blue-600', height: 9 }
  ];

  // Data untuk diagram difabel (mengambil yang tertinggi untuk visualisasi)
  const difabelData = [
    { label: 'Rabun Dekat', sublabel: '56 jiwa', value: 56, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500', height: 280 },
    { label: 'Rabun Jauh', sublabel: '51 jiwa', value: 51, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500', height: 255 },
    { label: 'Tuli Rabun Jauh', sublabel: '14 jiwa', value: 14, color: 'from-purple-500 to-violet-500', bgColor: 'bg-purple-500', height: 70 },
    { label: 'Tuli', sublabel: '7 jiwa', value: 7, color: 'from-orange-500 to-amber-500', bgColor: 'bg-orange-500', height: 35 },
    { label: 'Gangguan Jiwa', sublabel: '6 jiwa', value: 6, color: 'from-pink-500 to-rose-500', bgColor: 'bg-pink-500', height: 30 },
    { label: 'Low Vision', sublabel: '5 jiwa', value: 5, color: 'from-indigo-500 to-blue-500', bgColor: 'bg-indigo-500', height: 25 },
    { label: 'Difabel Fisik', sublabel: '3 jiwa', value: 3, color: 'from-teal-500 to-cyan-500', bgColor: 'bg-teal-500', height: 15 },
    { label: 'Difabel Intelektual', sublabel: '2 jiwa', value: 2, color: 'from-red-500 to-pink-500', bgColor: 'bg-red-500', height: 10 },
    { label: 'Buta', sublabel: '2 jiwa', value: 2, color: 'from-yellow-500 to-amber-500', bgColor: 'bg-yellow-500', height: 10 },
    { label: 'Rabun Dekat Rabun Jauh', sublabel: '2 jiwa', value: 2, color: 'from-gray-500 to-slate-500', bgColor: 'bg-gray-500', height: 10 }
  ];

  // Data untuk diagram golongan darah
  const golonganDarahData = [
    { label: 'Tidak Tahu', sublabel: '1027 jiwa', value: 1027, color: 'from-gray-500 to-slate-500', bgColor: 'bg-gray-500', height: 280 },
    { label: 'O', sublabel: '77 jiwa', value: 77, color: 'from-red-500 to-rose-500', bgColor: 'bg-red-500', height: 21 },
    { label: 'A', sublabel: '63 jiwa', value: 63, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500', height: 17 },
    { label: 'AB', sublabel: '20 jiwa', value: 20, color: 'from-purple-500 to-violet-500', bgColor: 'bg-purple-500', height: 5 },
    { label: 'B', sublabel: '19 jiwa', value: 19, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500', height: 5 }
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'penduduk': return pendudukData;
      case 'pendidikan': return pendidikanData;
      case 'usia': return rentangUsiaData;
      case 'difabel': return difabelData;
      case 'goldar': return golonganDarahData;
      default: return pendudukData;
    }
  };

  const currentData = getCurrentData();
  return (
    <section id="sectionInfografis" className="bg-white py-20 px-6" style={{ overflow: 'visible' }}>
      <div className="max-w-full mx-auto" style={{ overflow: 'visible' }}>
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black bg-clip-text mb-6">
            Infografis
          </h2>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full mb-8"></div> */}
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12">
            Peta Informasi Lembang Nanna&apos;
          </h3>
        </div>

        {/* Peta Section */}
        <div className="flex justify-center mb-20">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-green-200 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 blur-xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <Image
                src="/images/Infografis/petafix.png"
                alt="Peta Lembang Nanna"
                width={800}
                height={600}
                className="object-contain w-full max-w-4xl rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Data Penduduk Section */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Data Penduduk Lembang Nanna&apos;
          </h3>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Lembang Nanna&apos; memiliki luas <strong>4,65 km²</strong> (6,84% dari kecamatan) 
            dengan kepadatan <strong>280 jiwa/km²</strong>, salah satu yang tertinggi di Nanggala.
          </p>
          
          {/* Population Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* Total Penduduk */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Total Penduduk</h4>
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                    1,206
                  </div>
                  <p className="text-gray-600 text-sm">Jiwa</p>
                </div>
              </div>
            </div>

            {/* Laki-laki */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Laki-laki</h4>
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                    599
                  </div>
                  <p className="text-gray-600 text-sm">Jiwa (49.7%)</p>
                </div>
              </div>
            </div>

            {/* Perempuan */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Perempuan</h4>
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
                    620
                  </div>
                  <p className="text-gray-600 text-sm">Jiwa (51.4%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagram Section */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-center text-gray-800 mb-8">Diagram Data Penduduk</h4>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-2xl p-2 flex flex-wrap gap-2 max-w-4xl">
              <button
                onClick={() => setActiveTab('penduduk')}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeTab === 'penduduk'
                    ? 'bg-white shadow-lg text-blue-600 transform scale-105'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Penduduk
                </div>
              </button>
              <button
                onClick={() => setActiveTab('pendidikan')}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeTab === 'pendidikan'
                    ? 'bg-white shadow-lg text-green-600 transform scale-105'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Pendidikan
                </div>
              </button>
              <button
                onClick={() => setActiveTab('usia')}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeTab === 'usia'
                    ? 'bg-white shadow-lg text-purple-600 transform scale-105'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Usia
                </div>
              </button>
              <button
                onClick={() => setActiveTab('difabel')}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeTab === 'difabel'
                    ? 'bg-white shadow-lg text-orange-600 transform scale-105'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Difabel
                </div>
              </button>
              <button
                onClick={() => setActiveTab('goldar')}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeTab === 'goldar'
                    ? 'bg-white shadow-lg text-red-600 transform scale-105'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Gol. Darah
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg py-8 px-4 max-w-full mx-auto border border-gray-100" style={{ overflow: 'visible' }}>
            {/* Chart Title */}
            <h5 className="text-xl font-bold text-center text-gray-700 mb-8">
              {activeTab === 'penduduk' && 'Distribusi Penduduk Berdasarkan Jenis Kelamin'}
              {activeTab === 'pendidikan' && 'Distribusi Penduduk Berdasarkan Tingkat Pendidikan'}
              {activeTab === 'usia' && 'Distribusi Penduduk Berdasarkan Rentang Usia'}
              {activeTab === 'difabel' && 'Distribusi Penduduk Berdasarkan Jenis Difabel'}
              {activeTab === 'goldar' && 'Distribusi Penduduk Berdasarkan Golongan Darah'}
            </h5>
            
            <div className="w-full overflow-x-auto overflow-y-visible scrollbar-hide" style={{ paddingTop: '80px', paddingBottom: '40px', marginTop: '20px', marginBottom: '20px' }}>
              <div className="flex items-end justify-center gap-6 min-w-max px-12" style={{ height: '360px' }}>
                {currentData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center relative" style={{ minWidth: '90px' }}>
                    <div className="relative" style={{ overflow: 'visible', position: 'relative' }}>
                      <div 
                        className={`${activeTab === 'penduduk' || activeTab === 'goldar' ? 'w-20' : 'w-16'} bg-gradient-to-t ${item.color} rounded-t-lg shadow-lg bar-chart-animate`}
                        style={{ '--bar-height': `${item.height}px` } as React.CSSProperties}
                      ></div>
                      <div 
                        className={`${item.bgColor} text-white px-3 py-2 rounded-lg text-xs font-bold shadow-lg whitespace-nowrap`}
                        style={{ 
                          position: 'absolute',
                          top: '-60px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          zIndex: 50,
                          minWidth: 'max-content'
                        } as React.CSSProperties}
                      >
                        {item.value}
                      </div>
                    </div>
                    <div className="mt-6 text-center" style={{ maxWidth: '90px' }}>
                      <div className={`${activeTab === 'penduduk' ? 'text-lg' : 'text-sm'} font-bold text-gray-800`}>{item.label}</div>
                      <div className="text-xs text-gray-600">{item.sublabel}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Chart Legend */}
            <div className={`flex justify-center ${activeTab !== 'penduduk' ? 'flex-wrap' : ''} gap-4 mt-8 pt-6 border-t border-gray-200`}>
              {currentData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`w-4 h-4 bg-gradient-to-r ${item.color} rounded`}></div>
                  <span className="text-sm text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Informasi Geografis */}
        <div className="-mx-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-2xl p-10 text-center">
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">Informasi Geografis</h4>
          <div className="grid md:grid-cols-3 gap-8 text-white max-w-7xl mx-auto px-6">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-blue-300 mb-2">4.65 km²</div>
              <p className="text-blue-100">Luas Wilayah</p>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-green-300 mb-2">3 km</div>
              <p className="text-green-100">Jarak ke Ibu Kota Kecamatan</p>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-yellow-300 mb-2">6</div>
              <p className="text-yellow-100">Dusun</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
