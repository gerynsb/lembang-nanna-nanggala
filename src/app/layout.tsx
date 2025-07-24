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
    icon: [
      { url: "/images/logo/Logo-resize.png?v=2025", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/Logo-resize.png?v=2025", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/images/logo/Logo-resize.png?v=2025",
    apple: [
      { url: "/images/logo/Logo-resize.png?v=2025", sizes: "180x180", type: "image/png" }
    ],
  },

  openGraph: {
    title: "Lembang Nanna - Toraja Utara",
    description: "Portal informasi resmi Lembang Nanna Nanggala, Toraja Utara.",
    
    url: "https://lembangnanna.online",
    siteName: "Lembang Nanna",
    
    images: [
      {
        url: "/images/logo/Logo-resize.png?v=2025",
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
        {/* Force favicon dengan cache busting timestamp */}
        <link rel="icon" href="/images/logo/Logo-resize.png?v=2025" sizes="any" />
        <link rel="icon" href="/images/logo/Logo-resize.png?v=2025" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/logo/Logo-resize.png?v=2025" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/images/logo/Logo-resize.png?v=2025" />
        <link rel="shortcut icon" href="/images/logo/Logo-resize.png?v=2025" />
        <link rel="mask-icon" href="/images/logo/Logo-resize.png?v=2025" color="#00052d" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json?v=2025" />
        
        {/* Theme colors */}
        <meta name="msapplication-TileColor" content="#00052d" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* SEO Meta */}
        <link rel="canonical" href="https://lembangnanna.online/" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
