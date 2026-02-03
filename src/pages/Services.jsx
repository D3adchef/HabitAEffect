import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Habit Æffect</title>
        <meta
          name="description"
          content="Habit Æffect services begin with an initial consultation and include individual, group, and VIP coaching options designed to support meaningful habit change."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-bold text-orange text-center mb-12">
          Services
        </h1>

        <div className="max-w-5xl mx-auto text-black font-medium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* INITIAL CONSULTATION */}
            <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8 md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-orange mb-2 text-center">
                Initial Consultation
              </h2>
              <p className="text-center text-xl font-bold text-blue mb-4">
                $75
              </p>
              <p className="text-lg leading-relaxed">
                The initial consultation is an opportunity to assess what types of habit
                change skills you would like to learn, complete an initial assessment of
                past and/or current attempts to change, and gauge expectations you have for
                that change (such as rate of change and amount of change).
              </p>
              <p className="text-lg leading-relaxed mt-4">
                We will also review expectations, including what services I provide versus
                what I do not, expectations for participation, and what typical rates of
                change and progress tend to look like.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                This session is my opportunity to make sure we are on the same page.
              </p>
            </div>

            {/* INDIVIDUAL CHANGE CONSULTATION */}
            <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-orange mb-2 text-center">
                Individual Change Consultation
              </h3>
              <p className="text-center text-xl font-bold text-blue mb-4">
                $100
              </p>
              <p className="text-lg leading-relaxed">
                Many of us know we need to make a change, but don’t know where to start.
                This individual session is designed to take broad, general ideas for change
                and turn them into identifiable, actionable habits and behaviors that fit
                your life and point you in the direction you want to go.
              </p>
            </div>

            {/* INDIVIDUAL COACHING */}
            <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-orange mb-2 text-center">
                Individual Coaching
              </h3>
              <p className="text-center text-xl font-bold text-blue mb-2">
                $200 per session
              </p>
              <p className="text-center text-base font-semibold text-gray-700 mb-4">
                Average 6 sessions (1 per week for 6 weeks) — total $1,200
              </p>
              <p className="text-lg leading-relaxed">
                Individual coaching provides 1-hour, one-on-one coaching sessions each week.
                I walk you through each stage step by step, help you brainstorm which tools
                will work best for you, and guide you through any roadblocks you encounter.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                This is also an opportunity for me to review your experiences so far, address
                any potential issues, and suggest any readjustments that might help.
              </p>
              <p className="text-lg leading-relaxed mt-4 font-semibold text-gray-700">
                Includes the action plan workbook and behavior journal.
              </p>
            </div>

            {/* GROUP COACHING */}
            <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-orange mb-2 text-center">
                Group Coaching
              </h3>
              <p className="text-center text-xl font-bold text-blue mb-2">
                $125 per session, per person
              </p>
              <p className="text-center text-base font-semibold text-gray-700 mb-4">
                Average 6 sessions (1 per week for 6 weeks) — $750 per person
              </p>
              <p className="text-lg leading-relaxed">
                Group coaching is very close to individual coaching, except in a group
                setting. Groups may be pre-formed (such as a friend group) or filled as
                a cohort once all slots are available.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Participants may be working on different habit changes. These sessions
                provide less individual attention but offer the support of a group while
                moving through the stages together.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Sessions range from 1 to 1½ hours, depending on group size.
              </p>
              <p className="text-lg leading-relaxed mt-4 font-semibold text-gray-700">
                Includes the action plan workbook and behavior journal.
              </p>
            </div>

            {/* DIGITAL PRODUCTS */}
            <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-orange mb-4 text-center">
                Digital Resources
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                The following resources are available for individual purchase:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>
                  <span className="font-semibold">Action Plan Workbook</span> — $200
                </li>
                <li>
                  <span className="font-semibold">Behavior Journal</span> — $100
                </li>
              </ul>
            </div>

            {/* VIP COACHING */}
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
              <p className="text-lg leading-relaxed">
                VIP coaching includes daily check-ins using your preferred mode of
                communication (call, text, or email), a live or recorded habit analysis
                experience, a six-month follow-up check-in and reset, and everything
                included in individual coaching.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8 md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-blue mb-4">
                Not sure where to begin?
              </h3>
              <p className="mb-6">
                The initial consultation is designed to help clarify that. We can take a
                closer look at what you’re trying to change and determine the most
                appropriate next step together.
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
    </>
  );
}
