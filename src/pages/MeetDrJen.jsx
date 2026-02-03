import { Helmet } from "react-helmet-async";
import DrJenPhoto from "../assets/drjenn.webp";

export default function MeetDrJen() {
  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <Helmet>
        <title>Meet Dr. Jen | Habit Æffect</title>
        <meta
          name="description"
          content="Meet Dr. Jen, founder of Habit Æffect. Learn about her neurodivergent-affirming, compassionate approach to habit change and sustainable systems."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto text-black font-medium">

        {/* Photo */}
        <div className="flex justify-center mb-6">
          <img
            src={DrJenPhoto}
            alt="Dr. Jen"
            width={240}
            height={240}
            loading="lazy"
            decoding="async"
            className="rounded-xl shadow-md object-contain w-48 md:w-56"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-orange text-center mb-8">
          Meet Dr. Jen
        </h1>

        {/* Main text (CENTERED, NOT IN CTA) */}
        <div className="space-y-6 text-lg leading-relaxed text-center">
          <p>
            Hi! I’m Dr. Jen, and I’ve been fascinated by behavior since I was very young—honestly, it’s the thing I’ve always understood better than anything else. While I am a professor with a PhD who has spent over a decade studying and teaching these concepts, I want to be clear that I am not a therapist. Instead, I’m one of the few academics still focused on the practical basics of behaviorism. For nearly ten years, I’ve been helping college students take these "academic" ideas and turn them into real-life skills by teaching them how to analyze and change their own habits.
          </p>

          <p>
            I know from experience that changing behavior is hard, especially if you are "neuro-spicy" or feel like your brain just doesn't process things the "typical" way. I’m here to tell you that if you’ve struggled to change in the past, it isn’t a moral failing or a lack of willpower; it’s simply because you haven't been given the right tools and systems yet. My goal isn't to pressure you to be more productive or to meet society's expectations. I simply want to give you the skills to reach your own goals so you can become exactly who you want to be.
          </p>
        </div>

        {/* CTA — SEPARATE, SAME STYLE AS HOME/SERVICES */}
        <div className="mt-16 bg-white p-10 rounded-xl shadow-md border-l-4 border-orange text-gray font-medium space-y-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue">
            Ready to Start Building Habits That Fit Your Life?
          </h2>

          <p>
            If you’re not sure where to begin, we can explore that together and
            find an approach that aligns with how you actually work.
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
