"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToElement, scrollToTop } from "@/lib/scrollUtils";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between mr-3">
        {/* Logo + Teks */}
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => scrollToTop()}
        >
          <Image
            src="/images/logo/Logo-resize.png"
            alt="Logo Desa"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-white text-sm font-semibold leading-tight max-w-[220px]">
            LEMBANG NANNA, KEC.
            <br />
            NANGGALA, KAB. TORAJA UTARA
          </span>
        </div>

        {/* Toggle button for mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 text-white font-medium">
          <NavLinks closeMenu={() => setOpen(false)} />
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 pt-2 text-white space-y-2 bg-black/30 border-t border-white/20">
          <NavLinks closeMenu={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}

// Komponen navigasi biar DRY
function NavLinks({ closeMenu }: { closeMenu: () => void }) {
  const handleNavClick = (id: string) => {
    scrollToElement(id);
    closeMenu();
  };

  return (
    <>
      <button onClick={() => handleNavClick('hero')} className="block hover:text-blue-300 transition-colors text-left cursor-pointer">Home</button>
      <button onClick={() => handleNavClick('section2')} className="block hover:text-blue-300 transition-colors text-left cursor-pointer">Tentang</button>
      <button onClick={() => handleNavClick('section4')} className="block hover:text-blue-300 transition-colors text-left cursor-pointer">Daya Tarik Wisata</button>
      <button onClick={() => handleNavClick('sectionLokasi')} className="block hover:text-blue-300 transition-colors text-left cursor-pointer">Lokasi</button>
      <button onClick={() => handleNavClick('sectionSarana')} className="block hover:text-blue-300 transition-colors text-left cursor-pointer">Sarana</button>
      <button onClick={() => handleNavClick('sectionInfografis')} className="block hover:text-blue-300 transition-colors text-left cursor-pointer">Infografis</button>
      <button onClick={() => handleNavClick('sectionHubungi')} className="block hover:text-blue-300 transition-colors text-left cursor-pointer">Kontak</button>
      <button onClick={() => handleNavClick('sectionkknt114')} className="block hover:text-blue-300 transition-colors text-left cursor-pointer">KKNT114</button>
    </>
  );
}
