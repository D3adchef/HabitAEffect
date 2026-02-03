import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import D6 from "./pages/D6";
import MeetDrJen from "./pages/MeetDrJen";
import Store from "./pages/Store";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />

        {/* NEW D-6 page */}
        <Route path="/d6-method" element={<D6 />} />

        <Route path="/meet-dr-jen" element={<MeetDrJen />} />
        <Route path="/store" element={<Store />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}
