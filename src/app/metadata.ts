import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lembang Nanna Nanggala - Toraja Utara",
  description: "Website resmi Lembang Nanna Nanggala, Kecamatan Nanggala, Kabupaten Toraja Utara. Dikelola oleh Mahasiswa KKN Unhas.",
  keywords: [
    "Toraja", "Toraja Utara", "Nanggala", "Lembang Nanna", "Desa Wisata", "Website Desa", "KKN Unhas"
  ],
  authors: [{ name: "Mahasiswa KKN Unhas" }],
  openGraph: {
    title: "Lembang Nanna - Toraja Utara",
    description: "Portal informasi resmi Lembang Nanna Nanggala, Toraja Utara.",
    url: "https://nama-domain-mu.vercel.app",
    siteName: "Lembang Nanna",
    images: [
      {
        url: "/images/logo/logo-torut.png",
        width: 800,
        height: 600,
        alt: "Logo Lembang Nanna",
      }
    ],
    locale: "id_ID",
    type: "website",
  },
};
