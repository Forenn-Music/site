import { EnvelopeIcon, BellIcon, MegaphoneIcon } from '@heroicons/react/24/outline';

export default function NewsletterPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Stay in the Loop
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Never miss an update! Join our newsletter for exclusive content, 
          early access to new music, and behind-the-scenes insights.
        </p>
      </div>

      {/* Newsletter Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
            <BellIcon className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            First to Know
          </h3>
          <p className="text-gray-600">
            Be the first to hear about new releases, tour dates, and exclusive announcements.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
            <MegaphoneIcon className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Exclusive Content
          </h3>
          <p className="text-gray-600">
            Get access to behind-the-scenes photos, studio updates, and personal stories from the band.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
            <EnvelopeIcon className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Weekly Updates
          </h3>
          <p className="text-gray-600">
            Receive a curated weekly digest of everything happening in our world.
          </p>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 lg:p-12 text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We use a professional email service to manage our newsletter. 
          Click below to sign up through our provider.
        </p>
        
        <div className="space-y-4">
          <a
            href="https://example.com/newsletter-signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            <EnvelopeIcon className="h-5 w-5 mr-2" />
            Sign Up Now
          </a>
          
          <p className="text-sm text-gray-500">
            You'll be redirected to our secure newsletter provider
          </p>
        </div>
      </div>

      {/* What You'll Get */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          What You'll Receive
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Music Updates</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• New song and album announcements</li>
              <li>• Studio session insights</li>
              <li>• Exclusive previews</li>
              <li>• Release date reminders</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Tour & Events</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Tour date announcements</li>
              <li>• Ticket presale codes</li>
              <li>• Meet & greet opportunities</li>
              <li>• Venue and time updates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Privacy & Unsubscribe */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Privacy & Control
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We respect your privacy. You can unsubscribe at any time, and we'll never 
          share your email with third parties. Our newsletter is sent approximately 
          once per week.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors duration-200"
          >
            Questions?
          </a>
          <a
            href="https://example.com/unsubscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
          >
            Unsubscribe
          </a>
        </div>
      </div>
    </main>
  );
}
