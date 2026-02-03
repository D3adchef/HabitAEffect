import { Helmet } from "react-helmet-async";

export default function Accessibility() {
  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 lg:px-24">

      <Helmet>
        <title>Accessibility | Habit Æffect</title>
        <meta
          name="description"
          content="Read Habit Æffect’s accessibility statement outlining our commitment to inclusive, usable, and neurodivergent-friendly digital experiences."
        />
      </Helmet>

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-orange text-center mb-12">
        Accessibility Statement
      </h1>

      <div className="max-w-5xl mx-auto text-gray-900 font-medium text-lg leading-relaxed space-y-6">

        <p>
          Habit Æffect is committed to creating a digital experience that is
          accessible, inclusive, and user-friendly for all individuals. This
          Accessibility Statement outlines our current efforts and will continue
          to evolve as the website and program grow.
        </p>

        <h2 className="text-2xl font-bold text-blue mt-8">
          Our Commitment
        </h2>
        <p>
          We strive to ensure that our website and materials are usable for visitors
          with diverse abilities, needs, and preferences. This includes attention to
          readability, color contrast, navigation, screen-reader compatibility, and
          neurodivergent-friendly design principles.
        </p>

        <h2 className="text-2xl font-bold text-blue mt-8">
          Ongoing Improvements
        </h2>
        <p>
          Accessibility is an ongoing effort. As Habit Æffect grows, we will continue
          improving features such as keyboard navigation, alternative text for images,
          structured headings, descriptive links, and compatibility with assistive
          technologies.
        </p>

        <h2 className="text-2xl font-bold text-blue mt-8">
          Feedback & Support
        </h2>
        <p>
          If you encounter any accessibility barriers while using this website or
          participating in the Habit Æffect program, we encourage you to reach out.
          Your feedback helps us identify areas for improvement and better support
          the needs of all users.
        </p>

        <p>
          Email:{" "}
          <a
            href="mailto:info@habitaeffect.com"
            className="font-semibold text-blue hover:underline"
          >
            info@habitaeffect.com
          </a>
          <br />
          We aim to respond to accessibility-related inquiries in a timely and
          supportive manner.
        </p>

        <p className="mt-8">
          This page will be reviewed and updated regularly as we refine the Habit
          Æffect user experience and expand access features.
        </p>

      </div>
    </div>
  );
}
