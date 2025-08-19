import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FEFCF5] flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {/* 404 Headline */}
          <h1 className="text-8xl lg:text-9xl font-display leading-none text-[#0E0F12]">
            404
          </h1>
          
          {/* Error Message */}
          <div className="space-y-4">
            <p className="text-xl lg:text-2xl font-sans text-[#0E0F12]">
              The page you're looking for may not exist
            </p>
            <p className="text-lg font-sans text-[#9B9581] max-w-2xl mx-auto">
              It seems like this page has wandered off into the echoes. 
              Maybe it's waiting for you in a different part of the site.
            </p>
          </div>
          
          {/* Back to Home Button */}
          <div className="pt-8">
            <Link 
              href="/" 
              className="inline-block px-8 py-4 bg-[#0E0F12] text-[#FEFCF5] font-sans text-lg hover:bg-[#9B9581] transition-colors duration-200 rounded-sm"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
