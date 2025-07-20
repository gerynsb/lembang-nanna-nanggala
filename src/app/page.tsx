import { Metadata } from "next";
import Hero from "@/components/Hero";
import Section2 from "@/components/Section2";
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
  title: "Lembang Nanna Nanggala - Wisata Budaya & Alam Toraja Utara",
  description: "Jelajahi keindahan alam dan kekayaan budaya di Lembang Nanna Nanggala, Toraja Utara. Nikmati wisata budaya tradisional, kuliner khas, dan pemandangan alam yang menakjubkan.",
  keywords: [
    "Toraja", "Toraja Utara", "Nanggala", "Lembang Nanna", "Desa Wisata", "Wisata Budaya Toraja", 
    "Objek Wisata Toraja", "Tradisi Toraja", "Upacara Rambu Solo", "Destinasi Wisata Sulawesi Selatan",
    "KKN Unhas", "Tongkonan", "Wisata Alam Toraja"
  ],
  authors: [{ name: "Mahasiswa KKN Unhas" }],
  metadataBase: new URL('https://lembang-nanna-nanggala.vercel.app'),
  openGraph: {
    title: "Lembang Nanna - Toraja Utara",
    description: "Portal informasi resmi Lembang Nanna Nanggala, Toraja Utara.",
    url: "https://lembang-nanna-nanggala.vercel.app",
    siteName: "Lembang Nanna",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Lembang Nanna",
      }
    ],
    locale: "id_ID",
    type: "website",
  },
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
      <SectionHubungi />
      <Sectionkknt114 />
      <Footer />
      <ScrollToTop />
      {/* Section lain menyusul */}
    </>
  );
}
