export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 lg:px-24">

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-12">
        Contact Us
      </h1>

      <div className="max-w-3xl mx-auto text-gray-900 font-medium">

        {/* Intro */}
        <p className="text-lg leading-relaxed text-center mb-10">
          Have questions about the Habit Æffect program? Want to learn more about
          coaching or upcoming offerings? Fill out the form below and we’ll be in touch.
        </p>

        {/* Contact Form Placeholder */}
        <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-orange">

          <form className="grid grid-cols-1 gap-6">

            {/* Name */}
            <div>
              <label className="block text-lg font-semibold mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-semibold mb-2">Email Address</label>
              <input
                type="email"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange"
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="button"
              className="bg-orange text-white text-lg font-semibold py-3 rounded-md hover:bg-[#d97706] transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
