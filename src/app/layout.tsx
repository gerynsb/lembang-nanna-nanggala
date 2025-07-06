import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lembang Nanna Nanggala - Toraja Utara",
    template: "%s | Lembang Nanna",
  },
  description:
    "Website resmi Lembang Nanna Nanggala, Kecamatan Nanggala, Kabupaten Toraja Utara. Dikelola oleh Mahasiswa KKN Unhas.",
  keywords: [
    "Toraja", "Toraja Utara", "Nanggala", "Lembang Nanna", "Desa Wisata", "Website Desa", "KKN Unhas"
  ],
  authors: [{ name: "Mahasiswa KKN Unhas" }],
  icons: {
    icon: "/images/logo/logo-resize.png", 
  },

  openGraph: {
    title: "Lembang Nanna - Toraja Utara",
    description: "Portal informasi resmi Lembang Nanna Nanggala, Toraja Utara.",
    
    url: "https://nama-domain-mu.vercel.app",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
