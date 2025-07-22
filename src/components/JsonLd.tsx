"use client";

import { useEffect } from "react";

export default function JsonLd() {
  useEffect(() => {
    // Create script element for JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "name": "Lembang Nanna Nanggala",
      "description": "Desa wisata dengan kekayaan alam dan budaya tradisional Toraja",
      "url": "https://lembangnanna.online",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kecamatan Nanggala",
        "addressRegion": "Toraja Utara",
        "addressCountry": "Indonesia"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "3.0286",
        "longitude": "119.9177"
      },
      "image": "https://lembangnanna.online/images/logo/Logo-resize.png",
      "potentialAction": {
        "@type": "Action",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://lembangnanna.online/#sectionHubungi"
        },
        "name": "Hubungi Kami"
      }
    });
    
    // Add script to document head
    document.head.appendChild(script);
    
    // Clean up
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return null;
}
