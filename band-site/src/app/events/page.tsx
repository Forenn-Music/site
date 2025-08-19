import { CalendarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Upcoming Events
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Catch us live on stage! Check back regularly for new tour dates and events.
        </p>
      </div>

      {/* No Events Message */}
      <div className="text-center py-20">
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <CalendarIcon className="h-12 w-12 text-gray-400" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          No Upcoming Events
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We're currently planning our next tour and will announce dates soon. 
          Stay tuned for updates!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/newsletter"
            className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Join Our Newsletter
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Past Events Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Recent Shows
        </h2>
        
        <div className="space-y-6">
          {[
            {
              date: "December 15, 2024",
              venue: "The Basement",
              city: "Nashville, TN",
              time: "8:00 PM",
              status: "Completed"
            },
            {
              date: "November 28, 2024",
              venue: "The Roxy",
              city: "Los Angeles, CA",
              time: "9:00 PM",
              status: "Completed"
            },
            {
              date: "November 15, 2024",
              venue: "Bowery Ballroom",
              city: "New York, NY",
              time: "8:30 PM",
              status: "Completed"
            }
          ].map((event, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CalendarIcon className="h-5 w-5 text-gray-400" />
                    <span className="font-medium text-gray-900">{event.date}</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {event.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {event.venue}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4" />
                      <span>{event.city}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 lg:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Want to Book Us?
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          We're available for private events, festivals, and venue bookings. 
          Let's discuss how we can make your event unforgettable.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          Get in Touch
        </a>
      </div>
    </main>
  );
}
