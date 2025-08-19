'use client';

import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-[#FEFCF5] flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-6">
            <div className="space-y-8">
              {/* 500 Headline */}
              <h1 className="text-8xl lg:text-9xl font-display leading-none text-[#0E0F12]">
                500
              </h1>
              
              {/* Error Message */}
              <div className="space-y-4">
                <p className="text-xl lg:text-2xl font-sans text-[#0E0F12]">
                  Something went wrong on our end
                </p>
                <p className="text-lg font-sans text-[#9B9581] max-w-2xl mx-auto">
                  The echoes are a bit distorted right now. 
                  We're working to clear the signal and get you back on track.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="pt-8 space-x-4">
                <button
                  onClick={reset}
                  className="inline-block px-8 py-4 bg-[#0E0F12] text-[#FEFCF5] font-sans text-lg hover:bg-[#9B9581] transition-colors duration-200 rounded-sm"
                >
                  Try Again
                </button>
                <Link 
                  href="/" 
                  className="inline-block px-8 py-4 border border-[#0E0F12] text-[#0E0F12] font-sans text-lg hover:bg-[#0E0F12] hover:text-[#FEFCF5] transition-colors duration-200 rounded-sm"
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
