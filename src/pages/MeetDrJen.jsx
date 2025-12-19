import drjenn from "../assets/drjenn.jpeg";

export default function MeetDrJen() {
  return (
    <div className="min-h-screen bg-[#E8F6F7] flex flex-col items-center px-6 py-12">

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        Meet Dr. Jenn
      </h1>

      {/* Centered Photo */}
      <img
        src={drjenn}
        alt="Dr. Jenn Christopher"
        className="w-64 h-auto rounded-xl shadow-lg mb-8 border-4 border-[#F28C28]"
      />

      {/* BIO SECTION */}
      <div className="max-w-3xl text-blue-900 text-lg leading-relaxed space-y-6">

        <p>
          Dr. Jenn Christopher is a passionate educator, leader, and behavior expert who loves 
          helping people understand themselves and build habits that truly fit their lives.
        </p>

        <p>
          With more than a decade of experience in psychology, program design, and coaching, 
          Dr. Jenn blends science, compassion, and creativity to make change feel possible — 
          not overwhelming. Her approach is warm, practical, and centered on empowering people 
          to grow in ways that honor their strengths and real-world challenges.
        </p>

        <p>
          She believes deeply in the power of thoughtful communication, supportive environments, 
          and small steps that build meaningful momentum. At Habit AEffect, she brings her 
          builder-and-fixer mindset to help clients create routines that feel natural, 
          sustainable, and uniquely their own.
        </p>

        {/* LinkedIn Link */}
        <p>
          🌐 Connect with Jenn on LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/jennie-christopher-877451101/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F28C28] font-semibold hover:underline"
          >
            Dr. Jenn Christopher
          </a>
        </p>
      </div>

      {/* CALL TO ACTION SECTION */}
      <div className="max-w-3xl mt-12 bg-white p-8 rounded-xl shadow-md border-l-4 border-[#F28C28] text-blue-900 space-y-4">

        <h2 className="text-2xl font-bold">Ready to Begin Your Habit Journey?</h2>

        <p>
          Whether you’re building new habits or trying to break old ones, Jenn is here to help you 
          find clarity, confidence, and a plan that fits who you are — not who you’re "supposed" to be.
        </p>

        <ul className="list-disc ml-6 space-y-2">
          <li>Learn a simple, science-backed approach to behavior change</li>
          <li>Discover habits that match your real life and your real needs</li>
          <li>Build systems that support growth without judgment or pressure</li>
        </ul>

        <p className="font-semibold">
          Have questions or want to get started? Reach out anytime.
        </p>

        {/* CONTACT BUTTON */}
        <div className="mt-6">
          <a
            href="mailto:Dr.Jen@habitaeffect.com"
            className="bg-[#F28C28] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#d9791f] transition-colors"
          >
            Contact Dr. Jenn
          </a>
        </div>
      </div>
    </div>
  );
}
