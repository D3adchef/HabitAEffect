export default function Services() {
  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 lg:px-24">

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-12">
        Our Services
      </h1>

      <div className="max-w-5xl mx-auto text-gray-900 font-medium">

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-10 text-center">
          Habit Æffect offers structured, supportive, and research-backed services
          designed to help individuals understand their behavioral patterns and
          create lasting, sustainable change. Below is an overview of core services
          available to clients.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange">
            <h2 className="text-2xl font-bold mb-3 text-blue-900">1:1 Habit Coaching</h2>
            <p className="text-lg leading-relaxed">
              Personalized sessions that help you identify behavioral patterns,
              break cycles that hold you back, and build healthy habits using the
              D6 Method.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange">
            <h2 className="text-2xl font-bold mb-3 text-blue-900">D6 Behavior Mapping</h2>
            <p className="text-lg leading-relaxed">
              A structured approach to understanding triggers, barriers, and the
              psychology behind your habits, leading to more effective change.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange">
            <h2 className="text-2xl font-bold mb-3 text-blue-900">Weekly Accountability</h2>
            <p className="text-lg leading-relaxed">
              Ongoing check-ins that help you stay motivated, track progress, and
              adapt your goals as needed with supportive guidance.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange">
            <h2 className="text-2xl font-bold mb-3 text-blue-900">Digital Resources</h2>
            <p className="text-lg leading-relaxed">
              Worksheets, habit trackers, and behavior tools created to support
              your growth between sessions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
