export default function Resources() {
  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 lg:px-24">

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-orange text-center mb-12">
        Resources
      </h1>

      <div className="max-w-5xl mx-auto text-gray-900 font-medium">

        {/* Intro */}
        <p className="text-lg leading-relaxed text-center mb-10">
          Explore worksheets, guides, tools, and educational materials designed to
          support your journey with Habit Æffect. Additional resources will be
          added regularly as the program continues to grow.
        </p>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {/* Resource 1 */}
          <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue mb-3">
              Habit Tracker
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              A structured tracking sheet to help you monitor your progress and
              stay accountable as you implement new habits.
            </p>
            <button className="bg-orange text-white font-semibold py-2 px-4 rounded-md hover:bg-[#d97706] transition">
              Download PDF
            </button>
          </div>

          {/* Resource 2 */}
          <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue mb-3">
              Behavioral Mapping Guide
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              A step-by-step guide to identifying triggers, patterns, behaviors,
              and outcomes using the D6 Method.
            </p>
            <button className="bg-orange text-white font-semibold py-2 px-4 rounded-md hover:bg-[#d97706] transition">
              Download PDF
            </button>
          </div>

          {/* Resource 3 */}
          <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue mb-3">
              Goal Setting Template
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              A simple goal-setting system to help you plan, prioritize, and track
              your intentions week by week.
            </p>
            <button className="bg-orange text-white font-semibold py-2 px-4 rounded-md hover:bg-[#d97706] transition">
              Download PDF
            </button>
          </div>

          {/* Resource 4 */}
          <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue mb-3">
              Wellness Worksheets
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              A growing collection of worksheets focused on mindfulness, motivation,
              routine building, and personal reflection.
            </p>
            <button className="bg-orange text-white font-semibold py-2 px-4 rounded-md hover:bg-[#d97706] transition">
              Download PDF
            </button>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-md border-l-4 border-orange text-gray font-medium space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue">
            Looking for the Right Place to Start?
          </h2>

          <p>
            If you’re not sure which resource will be most helpful, or you’d like
            guidance on how to use these tools effectively, we’re happy to help.
          </p>

          <p className="pt-2">
            Reach out anytime to talk through what support might fit your goals best.
          </p>

          <div className="pt-4">
            <a
              href="/contact"
              className="inline-block bg-orange text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#e07f1f] transition-colors"
            >
              Contact Form
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
