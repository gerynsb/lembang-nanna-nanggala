"use client";

import { useEffect } from "react";

export default function JsonLd() {
  useEffect(() => {
    // Create script element for JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Place",
          "@id": "https://lembangnanna.online/#place",
          "name": "Desa Nanna",
          "alternateName": ["Lembang Nanna Nanggala", "Nanna Nanggala", "Desa Nanna Toraja", "Nanggala"],
          "description": "Desa Nanna terletak di Lembang Nanna Nanggala, Kecamatan Nanggala, Toraja Utara. Destinasi wisata budaya dengan tradisi Toraja yang autentik.",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-3.0",
            "longitude": "119.8"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nanggala",
            "addressRegion": "Toraja Utara",
            "addressCountry": "ID"
          },
          "url": "https://lembangnanna.online",
          "image": "https://lembangnanna.online/images/logo/Logo-resize.png"
        },
        {
          "@type": "TouristDestination",
          "@id": "https://lembangnanna.online/#destination",
          "name": "Desa Wisata Nanna",
          "alternateName": ["Lembang Nanna Nanggala", "Wisata Nanna Toraja", "Destinasi Wisata Nanggala"],
          "description": "Destinasi wisata budaya di Desa Nanna, Toraja Utara dengan tradisi Rambu Solo, Tongkonan, dan keindahan alam khas Nanggala.",
          "touristType": "Wisata Budaya",
          "isAccessibleForFree": true,
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-3.0",
            "longitude": "119.8"
          },
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Toraja Utara"
          },
          "url": "https://lembangnanna.online",
          "image": "https://lembangnanna.online/images/logo/Logo-resize.png"
        },
        {
          "@type": "WebSite",
          "@id": "https://lembangnanna.online/#website",
          "url": "https://lembangnanna.online",
          "name": "Desa Nanna - Portal Resmi",
          "alternateName": ["Portal Desa Nanna", "Website Nanna Nanggala", "Lembang Nanna Online"],
          "description": "Website resmi Desa Nanna di Lembang Nanna Nanggala, Toraja Utara",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://lembangnanna.online/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "Organization",
          "name": "Pemerintah Desa Nanna",
          "alternateName": ["Desa Nanna Nanggala", "Pemerintahan Desa Nanna", "Desa Nanna Toraja Utara"],
          "url": "https://lembangnanna.online",
          "logo": "https://lembangnanna.online/images/logo/Logo-resize.png",
          "description": "Pemerintah Desa Nanna di Lembang Nanna Nanggala, Kecamatan Nanggala, Toraja Utara",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nanggala",
            "addressRegion": "Toraja Utara",
            "addressCountry": "Indonesia"
          },
          "sameAs": [
            "https://www.instagram.com/kknt114unhas_nanna",
            "https://www.tiktok.com/@kknt114.lembangnanna"
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": "Desa Nanna",
          "description": "Desa wisata budaya di Lembang Nanna Nanggala, Kecamatan Nanggala, Toraja Utara",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nanggala",
            "addressRegion": "Toraja Utara", 
            "addressCountry": "Indonesia"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-3.0",
            "longitude": "119.8"
          },
          "url": "https://lembangnanna.online",
          "telephone": "+62-xxx-xxxx-xxxx",
          "openingHours": "Mo-Su 00:00-23:59",
          "priceRange": "Gratis"
        }
      ]
    });
    
    // Add script to document head
    document.head.appendChild(script);
    
    // Clean up
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  
  return null;
}
