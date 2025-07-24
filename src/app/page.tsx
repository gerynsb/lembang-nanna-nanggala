import { Metadata } from "next";
import Hero from "@/components/Hero";
import Section2 from "@/components/Section2";
import SectionAboutNanna from "@/components/SectionAboutNanna";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import SectionLokasi from "@/components/SectionLokasi";
import SectionKeunggulan from "@/components/SectionKeunggulan";
import SectionProduk from "@/components/SectionProduk";
import SectionSarana from "@/components/SectionSarana";
import SectionInfografis from "@/components/SectionInfografis";
import SectionHubungi from "@/components/SectionHubungi";
import Sectionkknt114 from "@/components/Sectionkknt114";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/JsonLd";


// ✅ Metadata SEO
export const metadata: Metadata = {
  title: "Desa Nanna | Lembang Nanna Nanggala - Toraja Utara",
  description: "Desa Nanna di Lembang Nanna Nanggala, Kecamatan Nanggala, Toraja Utara. Portal resmi informasi wisata budaya, tradisi Toraja, dan destinasi unggulan di Nanggala, Sulawesi Selatan.",
  keywords: [
    // Target utama
    "desa nanna", "nanna", "toraja utara", "nanggala", "toraja", "nanna nanggala", "lembang nanna",
    // Long-tail keywords
    "desa nanna toraja", "nanggala toraja utara", "lembang nanna nanggala", "wisata nanna toraja",
    "desa wisata nanggala", "tradisi nanna toraja", "budaya nanna", "tongkonan nanna",
    // Local SEO
    "kecamatan nanggala", "toraja utara nanggala", "sulawesi selatan nanggala", 
    "destinasi wisata nanna", "objek wisata nanggala", "rambu solo nanna", "KKN Unhas"
  ],
  authors: [{ name: "Pemerintah Desa Nanna & Mahasiswa KKN Unhas" }],
  metadataBase: new URL('https://lembangnanna.online'),
  openGraph: {
    title: "Desa Nanna - Lembang Nanna Nanggala, Toraja Utara",
    description: "Portal resmi Desa Nanna di Lembang Nanna Nanggala, Kecamatan Nanggala, Toraja Utara. Jelajahi wisata budaya dan tradisi Toraja yang autentik.",
    url: "https://lembangnanna.online",
    siteName: "Desa Nanna",
    images: [
      {
        url: "/images/logo/Logo-resize.png",
        width: 1200,
        height: 630,
        alt: "Logo Desa Nanna - Lembang Nanna Nanggala",
      }
    ],
    locale: "id_ID",
    type: "website",
  },
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Desa Nanna - Toraja Utara",
    description: "Portal resmi Desa Nanna di Lembang Nanna Nanggala, Toraja Utara",
    images: ["/images/logo/Logo-resize.png"],
  },
  // Geo location
  other: {
    "geo.region": "ID-SN",
    "geo.placename": "Nanggala, Toraja Utara",
    "geo.position": "-3.0;119.8",
  }
};

// Make metadata properly typeable with 'use client'
// export { metadata } from './metadata';

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <SectionLokasi />
      <SectionKeunggulan />
      <SectionProduk />
      <SectionSarana />
      <SectionInfografis />
      <SectionAboutNanna />
      <SectionHubungi />
      <Sectionkknt114 />
      <Footer />
      <ScrollToTop />
      {/* Section lain menyusul */}
    </>
  );
}
