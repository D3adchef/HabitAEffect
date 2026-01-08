export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background px-6 md:px-12 lg:px-24 py-12">

      {/* Intro Section */}
      <div className="max-w-4xl mx-auto text-gray-900 font-medium space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-orange text-center mb-8">
          Welcome to Habit Æffect
        </h1>

        <p>
          Changing habits is hard — and we won’t pretend otherwise. Most of us have tried
          willpower, motivation, or “just trying harder,” only to end up frustrated and
          discouraged.
        </p>

        <p>
          At Habit Æffect, we believe habit change isn’t a personality trait or a moral
          failing. It’s a skill - and skills can be learned, practiced, and supported.
        </p>

        <p>
          Our approach focuses on understanding how your brain works, what systems support
          you, and how to build habits that fit your real life — not someone else’s idea
          of discipline or success.
        </p>
      </div>

      {/* Neuro-Spicy Æffect Section */}
      <div className="max-w-4xl mx-auto mt-12 border-t border-blue-900 pt-6 text-gray-900 font-medium space-y-4">
        <h2 className="text-2xl font-bold text-orange underline text-center">
          The Neuro-Spicy Æffect
        </h2>

        <p>
          For many people, habit challenges are deeply connected to how their brain
          processes information, motivation, and overwhelm. Neurodivergent individuals
          often receive advice that simply doesn’t work for them.
        </p>

        <p>
          The Neuro-Spicy Æffect recognizes that differences in attention, energy,
          sensory processing, and executive function are not flaws — they are part of
          being human.
        </p>

        <p>
          Instead of forcing rigid systems, we focus on building flexible strategies
          that respect how your brain actually works, allowing habits to grow with
          compassion rather than pressure.
        </p>
      </div>

      {/* Transition Æffect Section */}
      <div className="max-w-4xl mx-auto mt-12 border-t border-blue-900 pt-6 text-gray-900 font-medium space-y-4">
        <h2 className="text-2xl font-bold text-orange underline text-center">
          The Transition Æffect
        </h2>

        <p>
          Life transitions — whether planned or unexpected — disrupt routines, energy,
          and identity. During these periods, habits that once worked often fall apart.
        </p>

        <p>
          The Transition Æffect centers on supporting people through change without
          judgment. Rather than “getting back on track,” we help you create a new track
          that reflects where you are now.
        </p>

        <p>
          By acknowledging grief, growth, uncertainty, and adjustment, we help habits
          evolve alongside your life — instead of becoming another source of stress.
        </p>
      </div>

      {/* Closing CTA */}
      <div className="max-w-4xl mx-auto mt-16 bg-white p-10 rounded-xl shadow-md border-l-4 border-orange text-gray font-medium space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue">
          A Different Way to Build Habits
        </h2>

        <p>
          Habit Æffect is about clarity, accountability, and realistic change. Whether
          you’re navigating neurodivergence, life transitions, or simply looking for a
          better approach, you don’t have to do it alone.
        </p>

        <p className="pt-2">
          Not sure where to start? Let’s figure it out together.
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
