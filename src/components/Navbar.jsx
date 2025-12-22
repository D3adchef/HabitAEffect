import { useState } from "react";
import LargeLogo from "../assets/LargeLogo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F28C28] shadow-md relative">
      <div className="max-w-7xl mx-auto flex items-center justify-end px-8 h-24 relative">

        {/* Left Logo */}
        <img
          src={LargeLogo}
          alt="Habit AEffect Logo"
          className="h-48 w-auto absolute left-4 top-1/2 -translate-y-[45%] drop-shadow-md pointer-events-none"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-blue-900 font-semibold text-lg">
          <a href="/" className="nav-link hover:text-white transition-colors">Home</a>
          <a href="/services" className="nav-link hover:text-white transition-colors">Services</a>
          <a href="/about" className="nav-link hover:text-white transition-colors">About</a>
          <a href="/schedule" className="nav-link hover:text-white transition-colors">Schedule</a>
          <a href="/contact" className="nav-link hover:text-white transition-colors">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-blue-900 text-4xl font-bold z-20"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F28C28] text-blue-900 font-semibold text-lg flex flex-col items-end pr-8 py-4 gap-4 shadow-md">
          <a
            href="/"
            className="nav-link hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/services"
            className="nav-link hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="/about"
            className="nav-link hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/schedule"
            className="nav-link hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Schedule
          </a>
          <a
            href="/contact"
            className="nav-link hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
