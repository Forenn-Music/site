import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Forenn - Memories Persist In Echoes",
  description: "Music for Memory Seekers. Join the waitlist for Forenn's new album 'Memories Persist In Echoes'.",
  keywords: ["forenn", "music", "album", "memories persist in echoes", "indie music", "alternative"],
  authors: [{ name: "Forenn" }],
  openGraph: {
    title: "Forenn - Memories Persist In Echoes",
    description: "Music for Memory Seekers. Join the waitlist for Forenn's new album 'Memories Persist In Echoes'.",
    type: "website",
    images: [
      {
        url: "/forenn-social-share.jpg",
        width: 1200,
        height: 630,
        alt: "Forenn - Memories Persist In Echoes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forenn - Memories Persist In Echoes",
    description: "Music for Memory Seekers. Join the waitlist for Forenn's new album 'Memories Persist In Echoes'.",
    images: ["/forenn-social-share.jpg"],
  },
  icons: {
    icon: "/favico.jpg",
    shortcut: "/favico.jpg",
    apple: "/favico.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
