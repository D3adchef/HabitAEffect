export default function Footer() { 
  return (
    <footer className="w-full bg-[#F28C28] text-blue-900 py-6 px-8 relative">

      <div className="max-w-7xl mx-auto flex justify-between items-start">

        {/* Left side links */}
        <div className="flex flex-col gap-2 font-semibold text-lg">
          <a className="hover:text-white transition-colors" href="/about">About</a>

          {/* FIXED ROUTE */}
          <a className="hover:text-white transition-colors" href="/meet-dr-jen">Meet Dr. Jen</a>

          <a className="hover:text-white transition-colors" href="/services">Services</a>
          <a className="hover:text-white transition-colors" href="/schedule">Schedule</a>
          <a className="hover:text-white transition-colors" href="/store">Store</a>
          <a className="hover:text-white transition-colors" href="/resources">Resources</a>
        </div>

        {/* Right side links */}
        <div className="flex flex-col gap-2 font-semibold text-lg">
          <a className="hover:text-white transition-colors" href="/terms">Terms & Conditions</a>
          <a className="hover:text-white transition-colors" href="/privacy">Privacy Policy</a>
          <a className="hover:text-white transition-colors" href="/accessibility">
            Accessibility Statement
          </a>
        </div>
      </div>

      {/* Bottom-right copyright */}
      <div className="absolute bottom-2 right-4 text-sm text-white opacity-90">
        © {new Date().getFullYear()} Habit AEffect. All rights reserved.
      </div>

    </footer>
  );
}
