import facebook from "../assets/facebook.png";
import indeed from "../assets/indeed.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F28C28] text-blue-900 py-8 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Left links */}
        <div className="flex flex-col gap-2 font-semibold text-lg text-center md:text-left">
          <a className="hover:text-white transition-colors" href="/services">Services</a>
          <a className="hover:text-white transition-colors" href="/d6-method">
            The D-6 Method
          </a>
          <a className="hover:text-white transition-colors" href="/meet-dr-jen">
            Meet Dr. Jen
          </a>
          <a className="hover:text-white transition-colors" href="/store">Store</a>
          <a className="hover:text-white transition-colors" href="/resources">Resources</a>
          <a className="hover:text-white transition-colors" href="/contact">Contact</a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-8">
          <a href="https://www.facebook.com/profile.php?id=61586005975347" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="h-32 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/company/110440136/admin/dashboard/" target="_blank" rel="noopener noreferrer">
            <img src={indeed} alt="LinkedIn" className="h-32 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.instagram.com/thehabitaeffect/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="h-32 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.youtube.com/@TheHabitAEffect" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" className="h-32 hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-2 font-semibold text-lg text-center md:text-right">
          <a className="hover:text-white transition-colors" href="/terms">Terms & Conditions</a>
          <a className="hover:text-white transition-colors" href="/privacy">Privacy Policy</a>
          <a className="hover:text-white transition-colors" href="/accessibility">
            Accessibility Statement
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-white opacity-90">
        © {new Date().getFullYear()} Habit Æffect. All rights reserved.
      </div>
    </footer>
  );
}
