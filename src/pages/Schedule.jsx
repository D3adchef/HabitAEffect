export default function Schedule() {
  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 lg:px-24">

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-12">
        Schedule a Session
      </h1>

      <div className="max-w-4xl mx-auto text-gray-900 font-medium">

        {/* Intro */}
        <p className="text-lg leading-relaxed text-center mb-10">
          Habit Æffect uses a streamlined scheduling system to make booking your
          sessions simple and accessible. Below, you will soon find the integrated
          Calendly calendar and secure Stripe payment options.
        </p>

        {/* Scheduling Placeholder Box */}
        <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Calendly Booking</h2>
          <p className="text-lg leading-relaxed mb-4">
            The interactive scheduling calendar will appear here. Clients will be
            able to select a date and time for their session directly through the
            embedded Calendly widget.
          </p>
          <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-700">
            Calendly Embed Placeholder
          </div>
        </div>

        {/* Payment Placeholder Box */}
        <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Secure Payment</h2>
          <p className="text-lg leading-relaxed mb-4">
            Stripe’s secure checkout will be integrated here, allowing clients to
            complete their session payment quickly and safely before or after booking.
          </p>
          <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center text-gray-700">
            Stripe Payment Placeholder
          </div>
        </div>

      </div>
    </div>
  );
}
