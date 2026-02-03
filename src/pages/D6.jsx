import { Helmet } from "react-helmet-async";

export default function D6() {
  return (
    <>
      <Helmet>
        <title>D-6 Method | Habit Æffect</title>
        <meta
          name="description"
          content="The D-6 Method is a structured, research-backed framework for understanding, designing, and sustaining meaningful habit change."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 lg:px-24">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-orange text-center mb-12">
          D-6 Method
        </h1>

        <div className="max-w-5xl mx-auto text-black font-medium space-y-16">

          {/* Step 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-4">
              Step 1 — Discover
            </h2>
            <p className="text-lg leading-relaxed">
              Discover what you are actually doing. This step is about understanding the
              habit. Here, we define the habit you want to change—whether you are building
              a new habit or removing an old one that is no longer helping you or is actively
              hindering you.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              If you want to start a new habit, you will have to replace something else.
              What are you going to replace? What is happening at the time you want to do
              the new behavior? You cannot add a new behavior without it replacing something.
              We are constantly engaging in behaviors—even sitting and zoning out in front
              of the TV or your phone is a behavior.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              During this step, we set up a behavior journal so you can track your behavior
              over a 7-day period. The format of the journal will depend on the habit you are
              trying to change and whether you are adding or removing it. Generally, you will
              track what happens immediately before, during, and after the behavior or what
              it is replacing.
            </p>
            <p className="text-lg leading-relaxed mt-4 font-semibold">
              Average time: 1 week
            </p>
          </section>

          {/* Step 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-4">
              Step 2 — Decode
            </h2>
            <p className="text-lg leading-relaxed">
              Decode what you have recorded. Nothing will change if you don’t understand
              what you are currently doing. If you need to get rid of a habit, you have to
              know when you do it, what cues you to do it, and what reinforcement is attached
              to it.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              We do not do anything without being reinforced for it. The most important
              aspect of this step is identifying patterns—both in the behavior itself and
              the context surrounding it.
            </p>
            <p className="text-lg leading-relaxed mt-4 font-semibold">
              Average time: 1 week
            </p>
          </section>

          {/* Step 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-4">
              Step 3 — Design & Disrupt
            </h2>
            <p className="text-lg leading-relaxed">
              Now it is time to make a plan. We set a series of small, practical goals to get
              you started. How will we get your attention? How will we ensure reminders work?
              How will we remove or disrupt cues that support a habit you don’t want?
            </p>
            <p className="text-lg leading-relaxed mt-4">
              This is where my extensive toolkit comes in. We implement strategies that fit
              the habit you are choosing. Some strategies will work better than others, and
              we won’t know which are most effective until we put them in place.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              We also build in a safety net by planning for mistakes. Mistakes are a natural
              part of the process. You will know exactly what to do when they happen, without
              needing to make decisions on the fly.
            </p>
            <p className="text-lg leading-relaxed mt-4 font-semibold">
              Average time: 1 week
            </p>
          </section>

          {/* Step 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-4">
              Step 4 — Do
            </h2>
            <p className="text-lg leading-relaxed">
              Now that we have a plan, it’s time to implement it. During this step, you ensure
              your environment is set up exactly as the plan has structured it. Once everything
              is in place, it’s time to execute.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              You will spend a week using the pre-established plan before the next check-in.
            </p>
            <p className="text-lg leading-relaxed mt-4 font-semibold">
              Average time: 4–8 weeks
            </p>
          </section>

          {/* Step 5 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-4">
              Step 5 — Double-Check
            </h2>
            <p className="text-lg leading-relaxed">
              This step happens at the end of the first week after starting Step 4 and then
              weekly while that step continues. This is where we make sure the plan is working.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              We review which strategies are effective and which aren’t doing anything. The
              plan is refined, simplified, and adjusted as needed before being implemented
              again for another week.
            </p>
            <p className="text-lg leading-relaxed mt-4 font-semibold">
              Average time: paired with Step 4
            </p>
          </section>

          {/* Step 6 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-4">
              Step 6 — Develop
            </h2>
            <p className="text-lg leading-relaxed">
              Congratulations on reaching your final goal. Even so, it will still take time
              for that habit to become reliable. At this stage, we adjust the plan again and
              create a maintenance plan.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              The goal is to ensure the new behavior stays with you—or that the old behavior
              stays gone. From here, you can either continue independently or continue receiving
              support.
            </p>
          </section>

          {/* CTA */}
          <section className="mt-16 bg-white p-10 rounded-xl shadow-md border-l-4 border-orange space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue">
              Ready to see how this works for you?
            </h2>
            <p className="text-lg leading-relaxed">
              We can walk through what you’re trying to change and apply the D-6 Method in a
              way that fits how you actually work.
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#e07f1f] transition-colors"
            >
              Contact Dr. Jenn
            </a>
          </section>

        </div>
      </div>
    </>
  );
}
