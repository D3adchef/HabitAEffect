import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Habit Æffect</title>
        <meta
          name="description"
          content="Explore Habit Æffect services, including 1:1 habit coaching, D6 behavior mapping, weekly accountability, and digital resources designed for neurodivergent, high-performing professionals."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 lg:px-24">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-orange text-center mb-8">
          Services
        </h1>

        <div className="max-w-5xl mx-auto text-black font-medium">
          {/* Intro */}
          <p className="text-lg leading-relaxed mb-12 text-center">
            Habit Æffect offers structured, supportive, research-backed services designed
            for neurodivergent, high-performing professionals who want clarity, sustainable
            systems, and realistic change — without shame or one-size-fits-all solutions.
          </p>

          {/* Services */}
          <div className="space-y-12">
            <section className="pb-10 border-b border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-orange mb-3 text-center">
                1:1 Habit Coaching
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Individual coaching sessions focused on understanding how your habits
                interact with your work, energy, and environment, and building systems
                that support long-term success.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identify patterns that support or disrupt your goals</li>
                <li>Create routines that respect cognitive and sensory load</li>
                <li>Adapt systems as demands and priorities shift</li>
              </ul>
            </section>

            <section className="pb-10 border-b border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-orange mb-3 text-center">
                D6 Behavior Mapping
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                A structured framework for understanding triggers, barriers, and behavioral
                drivers so change feels clearer, more predictable, and easier to maintain.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Map friction points such as time, stress, and environmental factors</li>
                <li>Understand why certain strategies haven’t worked in the past</li>
                <li>Build plans grounded in how you actually function</li>
              </ul>
            </section>

            <section className="pb-10 border-b border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-orange mb-3 text-center">
                Weekly Accountability
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Ongoing support designed to help you stay oriented, notice progress,
                and adjust systems before burnout or overwhelm take hold.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consistent check-ins with clear expectations</li>
                <li>Progress tracking without pressure or shame</li>
                <li>Small, strategic adjustments as circumstances change</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-orange mb-3 text-center">
                Digital Resources
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Practical tools and templates that support consistency between sessions
                and reduce decision fatigue when you need structure to fall back on.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Habit trackers and worksheets designed for reuse</li>
                <li>Clear frameworks that simplify next steps</li>
                <li>Resources that reinforce learning outside sessions</li>
              </ul>

              <p className="text-lg leading-relaxed">
                <span className="font-semibold">Available for individual purchase:</span>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Action Plan Workbook</span> — $200
                </li>
                <li>
                  <span className="font-semibold">Behavior Journal</span> — $100
                </li>
              </ul>
            </section>
          </div>

          {/* PRICING */}
          <div className="max-w-5xl mx-auto mt-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-orange mb-4">
                Pricing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* VIP Coaching — FULL WIDTH */}
              <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8 md:col-span-2">
                <h3 className="text-2xl font-bold text-orange mb-2 text-center">
                  VIP Coaching
                </h3>
                <p className="text-center text-xl font-bold text-blue mb-2">
                  $350 per session
                </p>
                <p className="text-center text-base font-semibold text-gray-700 mb-4">
                  Average 6 sessions
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  VIP coaching experience includes daily check-ins using your preferred
                  mode of communication (call, text, or email), a live or recorded habit
                  analysis experience, a six-month follow-up check-in and reset, and
                  everything included in the individual coaching sessions.
                </p>
              </div>

              {/* Initial Consultation */}
              <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-orange mb-2 text-center">
                  Initial Consultation
                </h3>
                <p className="text-center text-xl font-bold text-blue mb-4">$75</p>
                <p className="text-lg leading-relaxed">
                  An opportunity to assess goals, past attempts, expectations, and determine fit.
                </p>
              </div>

              {/* Individual Change Consultation */}
              <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-orange mb-2 text-center">
                  Individual Change Consultation
                </h3>
                <p className="text-center text-xl font-bold text-blue mb-4">$100</p>
                <p className="text-lg leading-relaxed">
                  A focused session designed to translate broad change goals into actionable habits.
                </p>
              </div>

              {/* Individual Coaching */}
              <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-orange mb-2 text-center">
                  Individual Coaching
                </h3>
                <p className="text-center text-xl font-bold text-blue mb-2">
                  $200 per session
                </p>
                <p className="text-center text-base font-semibold text-gray-700 mb-4">
                  Average 6 sessions — total $1,200
                </p>
                <p className="text-lg leading-relaxed font-semibold text-gray-700">
                  Includes the action plan workbook and behavior journal.
                </p>
              </div>

              {/* Group Coaching */}
              <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-orange mb-2 text-center">
                  Group Coaching
                </h3>
                <p className="text-center text-xl font-bold text-blue mb-2">
                  $125 per session, per person
                </p>
                <p className="text-center text-base font-semibold text-gray-700 mb-4">
                  Average 6 sessions — $750 per person
                </p>
                <p className="text-lg leading-relaxed">
                  Shared coaching experience with group support and guided progression.
                </p>
              </div>

              {/* CTA — FULL WIDTH */}
              <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8 md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold text-blue mb-4">
                  Support That Fits How You Actually Work
                </h3>

                <p className="mb-4">
                  Habit Æffect services are designed for neurodivergent, high-performing
                  professionals who want clarity and sustainable systems without pressure.
                </p>

                <p className="mb-6">
                  Not sure where to begin? We can map that out together.
                </p>

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
      </div>
    </>
  );
}
