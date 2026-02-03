import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 lg:px-24">

      <Helmet>
        <title>Terms & Conditions | Habit Æffect</title>
        <meta
          name="description"
          content="Review the Terms & Conditions governing the use of Habit Æffect’s website, coaching services, and digital resources."
        />
      </Helmet>

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-orange text-center mb-12">
        Terms & Conditions
      </h1>

      <div className="max-w-5xl mx-auto text-gray-900 font-medium text-lg leading-relaxed space-y-6">

        <p>
          These Terms & Conditions outline the rules, expectations, and limitations
          associated with using Habit Æffect’s website, coaching services, and
          digital materials. The content below serves as a placeholder and will be
          updated with full legal language prior to launch.
        </p>

        <h2 className="text-2xl font-bold text-blue mt-8">
          Use of Services
        </h2>
        <p>
          Habit Æffect provides educational and coaching services intended for
          personal development. Clients are responsible for ensuring that the
          information they provide is accurate. Coaching does not replace medical,
          psychological, or clinical treatment.
        </p>

        <h2 className="text-2xl font-bold text-blue mt-8">
          Intellectual Property
        </h2>
        <p>
          All materials, including worksheets, digital products, and program
          content, are the intellectual property of Habit Æffect and may not be
          reproduced or distributed without permission.
        </p>

        <h2 className="text-2xl font-bold text-blue mt-8">
          Payments & Scheduling
        </h2>
        <p>
          Any payments collected through integrated platforms such as Stripe are
          subject to their respective terms of service. Scheduled sessions must be
          canceled or rescheduled within the guidelines that will be provided to
          clients.
        </p>

        <h2 className="text-2xl font-bold text-blue mt-8">
          Limitations of Liability
        </h2>
        <p>
          Habit Æffect is not responsible for decisions made by clients based on
          coaching discussions or digital resources. Individuals are encouraged to
          seek licensed medical or mental health support when appropriate.
        </p>

        <p className="mt-8">
          A complete legal version of this page will be provided prior to official
          publication of the Habit Æffect platform.
        </p>

      </div>
    </div>
  );
}
