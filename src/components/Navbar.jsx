import { useState } from "react";
import NavbarLogo from "../assets/NavbarLogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F28C28] shadow-md relative z-50">
      {/* MAIN BAR */}
      <div className="w-full h-28 flex items-center px-12">
        
        {/* LEFT: Logo */}
        <div className="hidden md:flex items-center">
          <a href="/" className="flex items-center">
            <img
              src={NavbarLogo}
              alt="Habit Æffect"
              className="h-56 w-auto"
            />
          </a>
        </div>

        {/* RIGHT: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-16 font-semibold text-xl text-blue-900 ml-auto">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="/services" className="hover:text-white transition-colors">Services</a>
          <a href="/d6-method" className="hover:text-white transition-colors">
            The D-6 Method
          </a>
          <a href="/meet-dr-jen" className="hover:text-white transition-colors">
            Meet Dr. Jen
          </a>

          {/* Store (label only) */}
          <span className="flex items-center gap-2 cursor-default">
            <span>Store</span>
            <span className="text-xs bg-white text-blue-900 px-2 py-0.5 rounded-full">
              Coming Soon
            </span>
          </span>

          {/* Resources (label only) */}
          <span className="flex items-center gap-2 cursor-default">
            <span>Resources</span>
            <span className="text-xs bg-white text-blue-900 px-2 py-0.5 rounded-full">
              Coming Soon
            </span>
          </span>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-blue-900 text-4xl font-bold ml-auto hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#F28C28] font-semibold text-lg text-blue-900 flex flex-col items-end pr-8 py-6 gap-5 shadow-md">
          <a href="/" onClick={() => setMenuOpen(false)} className="hover:text-white">
            Home
          </a>
          <a href="/services" onClick={() => setMenuOpen(false)} className="hover:text-white">
            Services
          </a>
          <a
            href="/d6-method"
            onClick={() => setMenuOpen(false)}
            className="hover:text-white"
          >
            The D-6 Method
          </a>
          <a
            href="/meet-dr-jen"
            onClick={() => setMenuOpen(false)}
            className="hover:text-white"
          >
            Meet Dr. Jen
          </a>

          {/* Store (label only) */}
          <span className="flex items-center gap-2 cursor-default">
            <span>Store</span>
            <span className="text-xs bg-white text-blue-900 px-2 py-0.5 rounded-full">
              Coming Soon
            </span>
          </span>

          {/* Resources (label only) */}
          <span className="flex items-center gap-2 cursor-default">
            <span>Resources</span>
            <span className="text-xs bg-white text-blue-900 px-2 py-0.5 rounded-full">
              Coming Soon
            </span>
          </span>
        </div>
      )}
    </nav>
  );
}
