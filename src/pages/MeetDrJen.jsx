import drjenn from "../assets/drjenn.jpeg";

export default function MeetDrJen() {
  return (
    <div className="min-h-screen bg-[#E8F6F7] flex flex-col items-center px-6 py-12">

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        Meet Dr. Jen
      </h1>

      {/* Centered Photo */}
      <img
        src={drjenn}
        alt="Dr. Jen"
        className="w-64 h-auto rounded-xl shadow-lg mb-8 border-4 border-[#F28C28]"
      />

      {/* BIO SECTION */}
      <div className="max-w-3xl text-gray-900 font-medium text-lg leading-relaxed space-y-6">

        <p>
          In my professional journey, I have honed the skills of a builder and a fixer,
          working to bring ideas to life and overcome challenges along the way. I possess
          a unique ability to transform concepts into tangible results, breathing life
          into the visions of others.
        </p>

        <p>
          What sets me apart is my unconventional mindset. As a logical yet non-linear
          thinker, I approach problem-solving from fresh and innovative angles. This
          perspective allows me to uncover creative solutions and offer unique insights
          into complex issues. By thinking outside the box, I bring a valuable perspective
          to the table, enabling me to tackle problems from new and exciting angles.
        </p>

        <p>
          For me, true success lies in the accomplishments of those I collaborate with.
          I am deeply invested in the growth and development of both programs and the
          individuals involved. By fostering an environment of support and empowerment,
          I help build both the foundations and the people, driving collective achievements
          and individual triumphs.
        </p>

        <p>
          Accountability and clarity are fundamental principles that guide my work. I
          strongly believe in the importance of transparent and effective communication.
          I value open dialogue and recognize that meaningful collaboration requires
          active listening, clear articulation, and mutual understanding. By promoting a
          culture of open communication, I foster trust, encourage collaboration, and
          ensure that goals and expectations are clear for everyone involved.
        </p>

        <p>
          While I am adaptable to various organizational settings, I have discovered a
          particular affinity for small organizations and start-ups. The dynamic and
          passionate energy that permeates these environments fuels my own enthusiasm.
          I thrive in the presence of dedicated and motivated teams, where the collective
          spirit ignites innovation and propels progress.
        </p>

        <p>
          In summary, as a builder and a fixer, I possess the ability to transform ideas
          into reality and tackle challenges head-on. With my unconventional thinking,
          commitment to growth, and emphasis on effective communication, I am poised to
          make a lasting impact. Whether within a small organization or a start-up, I
          find immense fulfillment in working with passionate teams and contributing to
          their success.
        </p>
      </div>

      {/* CALL TO ACTION SECTION */}
      <div className="max-w-3xl mt-12 bg-white p-8 rounded-xl shadow-md border-l-4 border-[#F28C28] text-gray-900 font-medium space-y-4">
        <h2 className="text-2xl font-bold">Ready to Begin Your Habit Journey?</h2>

        <p>
          Whether you’re building new habits or trying to break old ones, Dr. Jen is here
          to help you find clarity, confidence, and a plan that fits who you are — not
          who you’re “supposed” to be.
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
            Contact Dr. Jen
          </a>
        </div>
      </div>
    </div>
  );
}
