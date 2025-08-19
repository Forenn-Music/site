import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0E0F12] text-[#FEFCF5] py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Tagline - Far Left */}
          <div className="text-sm text-[#FEFCF5] font-sans">
            Music for Memory Seekers 🔆
          </div>
          
          {/* Copyright - Center */}
          <div className="text-sm text-[#FEFCF5] font-sans">
            © 2025 Forenn
          </div>
          
          {/* Social Icons - Far Right */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://forenn.bandcamp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FEFCF5] hover:text-[#9B9581] transition-colors"
              aria-label="Bandcamp"
            >
              <Image src="/socials/Bandcamp.png" alt="Bandcamp" width={20} height={20} />
            </a>
            <a 
              href="https://music.apple.com/us/artist/forenn/1056490370" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FEFCF5] hover:text-[#9B9581] transition-colors"
              aria-label="Apple Music"
            >
              <Image src="/socials/Apple Music.svg" alt="Apple Music" width={20} height={20} />
            </a>
            <a 
              href="https://open.spotify.com/artist/73c3uoSWES19r8u3pNWd2K?si=YlxY_jIISWGmbr55hgpNBQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FEFCF5] hover:text-[#9B9581] transition-colors"
              aria-label="Spotify"
            >
              <Image src="/socials/Spotify.svg" alt="Spotify" width={20} height={20} />
            </a>
            <a 
              href="https://x.com/forennmusic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FEFCF5] hover:text-[#9B9581] transition-colors"
              aria-label="X (Twitter)"
            >
              <Image src="/socials/X.svg" alt="X (Twitter)" width={20} height={20} />
            </a>
            <a 
              href="https://www.youtube.com/@forennmusic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FEFCF5] hover:text-[#9B9581] transition-colors"
              aria-label="YouTube"
            >
              <Image src="/socials/YouTube.svg" alt="YouTube" width={20} height={20} />
            </a>
            <div className="relative group">
              <div className="text-[#FEFCF5] opacity-50 cursor-not-allowed">
                <Image src="/socials/discord.svg" alt="Discord" width={20} height={20} />
              </div>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-[#0E0F12] border border-[#9B9581] text-[#FEFCF5] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                Coming soon
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#0E0F12]"></div>
              </div>
            </div>
            <a 
              href="https://www.tiktok.com/@forennmusic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FEFCF5] hover:text-[#9B9581] transition-colors"
              aria-label="TikTok"
            >
              <Image src="/socials/TikTok.svg" alt="TikTok" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
