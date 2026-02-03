import { Helmet } from "react-helmet-async";

export default function Store() {
  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 lg:px-24">

      <Helmet>
        <title>Store | Habit Æffect</title>
        <meta
          name="description"
          content="The Habit Æffect Store offers downloadable habit-building tools, worksheets, trackers, and guided resources designed to support sustainable change."
        />
      </Helmet>

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-orange text-center mb-12">
        Habit Æffect Store
      </h1>

      <div className="max-w-4xl mx-auto text-gray-900 font-medium">

        {/* Intro */}
        <p className="text-lg leading-relaxed text-center mb-10">
          The Habit Æffect Store will soon provide access to downloadable tools,
          worksheets, habit trackers, and guided resources. Clients will also be
          able to purchase program materials directly through embedded Google Forms.
        </p>

        {/* Google Forms Store (UNCHANGED) */}
        <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-blue mb-4">
            Google Forms Store
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            All store items, including digital resources and program materials,
            will be available for purchase through a simple embedded Google Form.
          </p>

          <div className="w-full h-72 bg-gray-200 rounded-md flex items-center justify-center text-gray-700">
            Google Form Embed Placeholder
          </div>
        </div>

        {/* Featured Tools & Resources */}
        <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-blue mb-4">
            Featured Tools & Resources
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            As the store expands, preview images and descriptions of digital
            resources will appear here. Clients will be able to browse available
            tools and learn how each resource supports sustainable habit-building.
          </p>

          <a
            href="/resources"
            className="inline-block bg-orange text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#e07f1f] transition-colors"
          >
            Explore Resources
          </a>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-md border-l-4 border-orange text-gray font-medium space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue">
            Something Catch Your Interest?
          </h2>

          <p>
            If a tool or resource in the store sparks your curiosity, or if you
            have questions about how a resource might support your goals, we’d
            love to hear from you.
          </p>

          <p className="pt-2">
            Reach out anytime to learn more or to talk through what might be the
            best fit.
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
