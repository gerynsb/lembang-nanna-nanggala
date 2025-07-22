import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lembang Nanna Nanggala - Wisata Budaya & Alam Toraja Utara",
  description: "Jelajahi keindahan alam dan kekayaan budaya di Lembang Nanna Nanggala, Toraja Utara. Nikmati wisata budaya tradisional, kuliner khas, dan pemandangan alam yang menakjubkan.",
  keywords: [
    "Toraja", "Toraja Utara", "Nanggala", "Lembang Nanna", "Desa Wisata", "Wisata Budaya Toraja", 
    "Objek Wisata Toraja", "Tradisi Toraja", "Upacara Rambu Solo", "Destinasi Wisata Sulawesi Selatan",
    "KKN Unhas", "Tongkonan", "Wisata Alam Toraja"
  ],
  authors: [{ name: "Mahasiswa KKN Unhas" }],
  metadataBase: new URL('https://lembangnanna.online'),
  openGraph: {
    title: "Lembang Nanna - Toraja Utara",
    description: "Portal informasi resmi Lembang Nanna Nanggala, Toraja Utara.",
    url: "https://lembangnanna.online",
    siteName: "Lembang Nanna",
    images: [
      {
        url: "/images/logo/Logo-resize.png",
        width: 800,
        height: 600,
        alt: "Logo Lembang Nanna",
      }
    ],
    locale: "id_ID",
    type: "website",
  },
};
