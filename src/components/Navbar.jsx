import { useState } from "react";
import LargeLogo from "../assets/LargeLogo_nav.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F28C28] shadow-md relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-end px-8 h-24 relative">

        {/* Logo (absolute so it never affects navbar height) */}
        <img
          src={LargeLogo}
          alt="Habit Æffect Logo"
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            h-[76px]
            w-auto
            drop-shadow-md
            pointer-events-none
          "
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 font-semibold text-lg text-blue-900">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="/services" className="hover:text-white transition-colors">Services</a>
          <a href="/about" className="hover:text-white transition-colors">About</a>
          <a href="/schedule" className="hover:text-white transition-colors">Schedule</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-blue-900 text-4xl font-bold z-20 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F28C28] font-semibold text-lg text-blue-900 flex flex-col items-end pr-8 py-4 gap-4 shadow-md">
          <a href="/" className="hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/services" className="hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="/about" className="hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/schedule" className="hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Schedule</a>
          <a href="/contact" className="hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
