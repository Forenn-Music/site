export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          About the Band
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're a group of musicians passionate about creating authentic, 
          meaningful music that resonates with listeners around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            It all started in a small garage in the suburbs, where four friends 
            with a shared love for rock music decided to form a band. What began 
            as weekend jam sessions quickly evolved into something much bigger.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our sound blends classic rock influences with modern production, 
            creating something timeless yet contemporary. We draw inspiration 
            from the greats while pushing boundaries and exploring new sonic territories.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-6xl text-gray-500">🎸</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
            <span className="text-6xl text-purple-500">🎵</span>
          </div>
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <h2 className="text-3xl font-bold text-gray-900">Our Music</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every song we write comes from a place of authenticity. We believe 
            in the power of music to connect people, tell stories, and evoke 
            emotions that words alone cannot express.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From intimate ballads that tug at your heartstrings to high-energy 
            anthems that make you want to jump and dance, our music spans the 
            full spectrum of human experience.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Meet the Band
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Alex", role: "Lead Vocals & Guitar", emoji: "🎤" },
            { name: "Jordan", role: "Lead Guitar", emoji: "🎸" },
            { name: "Casey", role: "Bass", emoji: "🎸" },
            { name: "Riley", role: "Drums", emoji: "🥁" },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl">
                {member.emoji}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Join Us on This Journey
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you're a longtime fan or just discovering our music, 
          we're grateful to have you along for the ride. The best is yet to come.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Listen to Our Music
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}
