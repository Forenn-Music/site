import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have a question, want to book us for a show, or just want to say hello? 
          We'd love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <EnvelopeIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a 
                  href="mailto:hello@bandname.com" 
                  className="text-purple-600 hover:text-purple-700 transition-colors"
                >
                  hello@bandname.com
                </a>
                <p className="text-sm text-gray-600 mt-1">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <PhoneIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <a 
                  href="tel:+1234567890" 
                  className="text-purple-600 hover:text-purple-700 transition-colors"
                >
                  (123) 456-7890
                </a>
                <p className="text-sm text-gray-600 mt-1">
                  Available Mon-Fri, 9AM-6PM EST
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPinIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600">
                  Nashville, Tennessee<br />
                  United States
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Available for shows worldwide
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-gray-600 mb-6">
              Ready to get in touch? Click the button below to open your email client 
              and send us a message. We'll get back to you as soon as possible.
            </p>
            
            <a
              href="mailto:hello@bandname.com?subject=Hello from the website"
              className="inline-flex items-center justify-center w-full px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              Send Email
            </a>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Quick Questions?</h3>
            <p className="text-blue-800 text-sm">
              Check out our <a href="/news" className="underline hover:no-underline">news section</a> for updates, 
              or visit our <a href="/about" className="underline hover:no-underline">about page</a> to learn more about the band.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 lg:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Let's Make Music Together
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Whether you're a venue looking to book us, a fan with a question, 
          or someone who just wants to connect, we're here and ready to chat.
        </p>
        <a
          href="mailto:hello@bandname.com"
          className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          Get Started
        </a>
      </div>
    </main>
  );
}
