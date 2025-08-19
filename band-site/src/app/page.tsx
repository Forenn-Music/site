'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const heroImages = [
    '/Hero-1.png',
    '/Hero-2.png', 
    '/Hero-3.png',
    '/Hero-4.png'
  ];

  useEffect(() => {
    // Start rotation after a short delay to ensure images are loaded
    const startRotation = setTimeout(() => {
      setImagesLoaded(true);
    }, 1000);

    const interval = setInterval(() => {
      if (imagesLoaded) {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        console.log('Rotating to image:', (currentImageIndex + 1) % heroImages.length);
      }
    }, 5000); // Change image every 5 seconds

    return () => {
      clearTimeout(startRotation);
      clearInterval(interval);
    };
  }, [heroImages.length, imagesLoaded, currentImageIndex]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Rotating Images */}
      <section className="relative h-screen">
        {/* Background Images with Fade Transition */}
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              zIndex: index === currentImageIndex ? 1 : 0
            }}
          >
            <Image
              src={image}
              alt={`Hero image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              onLoad={() => console.log(`Image ${index + 1} loaded:`, image)}
              onError={(e) => console.error(`Error loading image ${index + 1}:`, e)}
            />
            <div className="absolute inset-0 bg-off-black/30"></div>
          </div>
        ))}
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="text-left">
              {/* Album Title - Left Justified */}
              <div className="text-[#FEFCF5] space-y-6">
                <h1 className="text-5xl lg:text-7xl font-display leading-none">
                  Memories Persist
                  <br />
                  In Echoes
                </h1>
                <div className="text-xl lg:text-2xl">
                  <p className="font-sans">a new album by</p>
                  <p className="text-3xl lg:text-4xl mt-2 font-display">Forenn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
