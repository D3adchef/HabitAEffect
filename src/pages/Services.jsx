export default function Services() {
  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 lg:px-24">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-orange text-center mb-8">
        Services
      </h1>

      {/* IMPORTANT: forced black text */}
      <div className="max-w-5xl mx-auto text-gray-900 font-medium">
        {/* Intro */}
        <p className="text-lg leading-relaxed mb-12 text-center text-gray-900">
          Habit Æffect offers structured, supportive, research-backed services designed
          for neurodivergent, high-performing professionals who want clarity, sustainable
          systems, and realistic change — without shame or one-size-fits-all solutions.
        </p>

        {/* Services */}
        <div className="space-y-12">
          {/* Service 1 */}
          <section className="pb-10 border-b border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-3">
              1:1 Habit Coaching
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-gray-900">
              Individual coaching sessions focused on understanding how your habits
              interact with your work, energy, and environment, and building systems
              that support long-term success.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-900">
              <li>Identify patterns that support or disrupt your goals</li>
              <li>Create routines that respect cognitive and sensory load</li>
              <li>Adapt systems as demands and priorities shift</li>
            </ul>
          </section>

          {/* Service 2 */}
          <section className="pb-10 border-b border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-3">
              D6 Behavior Mapping
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-gray-900">
              A structured framework for understanding triggers, barriers, and behavioral
              drivers so change feels clearer, more predictable, and easier to maintain.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-900">
              <li>Map friction points such as time, stress, and environmental factors</li>
              <li>Understand why certain strategies haven’t worked in the past</li>
              <li>Build plans grounded in how you actually function</li>
            </ul>
          </section>

          {/* Service 3 */}
          <section className="pb-10 border-b border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-3">
              Weekly Accountability
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-gray-900">
              Ongoing support designed to help you stay oriented, notice progress,
              and adjust systems before burnout or overwhelm take hold.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-900">
              <li>Consistent check-ins with clear expectations</li>
              <li>Progress tracking without pressure or shame</li>
              <li>Small, strategic adjustments as circumstances change</li>
            </ul>
          </section>

          {/* Service 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-3">
              Digital Resources
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-gray-900">
              Practical tools and templates that support consistency between sessions
              and reduce decision fatigue when you need structure to fall back on.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-900">
              <li>Habit trackers and worksheets designed for reuse</li>
              <li>Clear frameworks that simplify next steps</li>
              <li>Resources that reinforce learning outside sessions</li>
            </ul>
          </section>
        </div>

        {/* Closing CTA */}
        <div className="max-w-4xl mx-auto mt-16 bg-white p-10 rounded-xl shadow-md border-l-4 border-orange text-gray-900 font-medium space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue">
            Support That Fits How You Actually Work
          </h2>

          <p className="text-gray-900">
            Habit Æffect services are designed for neurodivergent, high-performing
            professionals who want clarity, structure, and sustainable systems —
            without pressure to conform to rigid productivity models.
          </p>

          <p className="pt-2 text-gray-900">
            Not sure which service is the right place to begin? We can map that out together.
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
