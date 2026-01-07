export default function About() {
  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 lg:px-24">

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-orange text-center mb-10">
        About Habit Æffect
      </h1>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto text-gray-900 font-medium text-lg leading-relaxed space-y-6">

        <p>
          Habit Æffect was created to challenge the idea that change requires
          pressure, perfection, or constant self-discipline. Instead, it focuses
          on understanding how habits actually form, why they repeat, and how
          small, intentional shifts can create meaningful and lasting progress.
        </p>

        <p>
          At the core of Habit Æffect is the D6 Method — a structured,
          research-informed framework designed to help individuals identify
          patterns, reduce friction, and build systems that align with how they
          think, work, and live. This approach prioritizes clarity over complexity
          and progress over performance.
        </p>

        <p>
          Habit Æffect is not about fixing people. It is about partnering with
          individuals to design habits that fit real lives, real workloads, and
          real energy levels. By grounding change in understanding, compassion,
          and accountability, Habit Æffect helps make growth feel attainable,
          sustainable, and motivating.
        </p>

        <p>
          Be sure to follow Habit Æffect on social media to stay up to date on
          new resources, insights, and announcements as the practice continues
          to grow.
        </p>

      </div>

      {/* Closing CTA (IDENTICAL STYLE TO OTHER PAGES) */}
      <div className="max-w-4xl mx-auto mt-16 bg-white p-10 rounded-xl shadow-md border-l-4 border-orange text-gray font-medium space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue">
          Ready to Take the First Step?
        </h2>

        <p>
          Whether you are exploring habit coaching for the first time or looking
          for a more supportive and realistic approach, Habit Æffect meets you
          where you are — and helps you move forward with clarity and confidence.
        </p>

        <p className="pt-2">
          Let’s talk about what change could look like for you.
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
  );
}
