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
  metadataBase: new URL('https://lembangnanna.online'),
  icons: {
    icon: "/images/logo/Logo-resize.png",
    shortcut: "/images/logo/Logo-resize.png",
    apple: "/images/logo/Logo-resize.png",
  },

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="canonical" href="https://lembangnanna.online/" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/logo/Logo-resize.png" />
        <link rel="apple-touch-icon" href="/images/logo/Logo-resize.png" />
        <link rel="shortcut icon" href="/images/logo/Logo-resize.png" />
        <link rel="mask-icon" href="/images/logo/Logo-resize.png" color="#00052d" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#00052d" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
