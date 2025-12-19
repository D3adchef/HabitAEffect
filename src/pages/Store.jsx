export default function Store() {
  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 lg:px-24">

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-12">
        Habit AEffect Store
      </h1>

      <div className="max-w-4xl mx-auto text-blue-900">

        {/* Intro */}
        <p className="text-lg leading-relaxed text-center mb-10">
          The Habit AEffect Store will soon provide access to downloadable tools,
          worksheets, habit trackers, and guided resources. Clients will also be
          able to purchase program materials directly through embedded Google Forms.
        </p>

        {/* Store Placeholder */}
        <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Google Forms Store</h2>
          <p className="text-lg leading-relaxed mb-4">
            All store items, including digital resources and program materials,
            will be available for purchase through a simple embedded Google Form.
          </p>

          <div className="w-full h-72 bg-gray-200 rounded-md flex items-center justify-center text-gray-700">
            Google Form Embed Placeholder
          </div>
        </div>

        {/* Optional Section for Future Expansion */}
        <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Featured Tools & Resources</h2>
          <p className="text-lg leading-relaxed">
            As the store expands, preview images and descriptions of digital
            resources will appear here. Clients will be able to browse available
            items before purchasing.
          </p>
        </div>

      </div>
    </div>
  );
}
