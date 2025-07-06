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


// ✅ Metadata SEO
export const metadata: Metadata = {
  title: "Lembang Nanna Nanggala - Toraja Utara",
  description: "Website resmi Lembang Nanna Nanggala, Kecamatan Nanggala, Kabupaten Toraja Utara. Dikelola oleh Mahasiswa KKN Unhas.",
  keywords: [
    "Toraja", "Toraja Utara", "Nanggala", "Lembang Nanna", "Desa Wisata", "Website Desa", "KKN Unhas"
  ],
  authors: [{ name: "Mahasiswa KKN Unhas" }],
  metadataBase: new URL('https://lembang-nanna.vercel.app'),
  openGraph: {
    title: "Lembang Nanna - Toraja Utara",
    description: "Portal informasi resmi Lembang Nanna Nanggala, Toraja Utara.",
    url: "https://lembang-nanna.vercel.app",
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
