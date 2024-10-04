import React, { useState } from "react";
const Secoend = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // const gta =()=>{
  //   document.getElementById("#id").demo=
  // }
  const projects = [
    { title: "Fortnite", img: "fortnite.jpg" },
    { title: "Vikings", img: "vikings.jpg" },
    { title: "SpongeBob", img: "spongebob.jpg" },
    { title: "Rock Band", img: "rockband.jpg" },
    { title: "Finding Ohana", img: "finding_ohana.jpg" },
    { title: "Judas and the Black Messiah", img: "judas.jpg" },
    { title: "Zola", img: "zola.jpg" },
    { title: "Ramy", img: "ramy.jpg" },
  ];

  return (
    <div
      className={`font-sans transition-colors duration-1000 ease-in-out ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <nav
        className={`p-4 transition-colors duration-1000 ease-in-out sticky top-0 z-50 ${
          isDarkMode ? "bg-gray-800 text-gray-200" : "bg-black text-white"
        } shadow-lg`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            Agam
            <span
              className={`transition-colors duration-1000 ease-in-out ${
                isDarkMode ? "text-purple-400" : "text-gradient-purple"
              }`}
            >
              Music
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#sell"
              className="hover:text-gray-400 transition-colors duration-1000 ease-in-out"
            >
              Sell Your Music
            </a>
            <a
              href="#music-publishing"
              className="hover:text-gray-400 transition-colors duration-1000 ease-in-out"
            >
              Music Publishing
            </a>
            <a
              href="#artist-services"
              className="hover:text-gray-400 transition-colors duration-1000 ease-in-out"
            >
              Artist Services
            </a>
            <a
              href="#pricing"
              className="hover:text-gray-400 transition-colors duration-1000 ease-in-out"
            >
              Pricing
            </a>
            <a
              href="#artist-advice"
              className="hover:text-gray-400 transition-colors duration-1000 ease-in-out"
            >
              Artist Advice
            </a>
            <a
              href="#splits"
              className="hover:text-gray-400 transition-colors duration-1000 ease-in-out"
            >
              Splits
            </a>
            <a
              href="#login"
              className="hover:text-gray-400 transition-colors duration-1000 ease-in-out"
            >
              Login
            </a>
            <button className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-1000 ease-in-out">
              Sign Up
            </button>
          </div>
          <button onClick={toggleTheme} className="ml-4 px-4 py-2 rounded-full">
            {isDarkMode ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 3v3m6.364 1.636l-2.121 2.121M21 12h-3M17.636 17.636l-2.121-2.121M12 21v-3m-6.364-1.636l2.121-2.121M3 12h3M6.364 6.364l2.121 2.121" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 3v1m6.364 1.636l-.707.707M18 12h1M16.636 16.636l-.707-.707M12 18v1m-6.364-1.636l.707-.707M6 12H5M7.636 7.636l-.707-.707" />
              </svg>
            )}
          </button>
          <button
            onClick={toggleTheme}
            className="ml-4 bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors duration-1000 ease-in-out dark:bg-gray-400 dark:hover:bg-gray-300"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <a
              href="#sell"
              className="block hover:text-gray-400 transition-colors duration-1000 ease-in-out"
            >
              Sell Your Music
            </a>
            <a
              href="#music-publishing"
              className="block hover:text-gray-400 transition-colors duration-1000 ease-in-out"
            >
              Music Publishing
            </a>
            <a
              href="#artist-services"
              className="block hover:text-gray-400 transition-colors duration-1000 ease-in-out"
            >
              Artist Services
            </a>
            <a
              href="#pricing"
              className="block hover:text-gray-400 transition-colors duration-1000 ease-in-out"
            >
              Pricing
            </a>
            <a
              href="#artist-advice"
              className="block hover:text-gray-400 transition-colors duration-1000 ease-in-out"
            >
              Artist Advice
            </a>
            <a
              href="#splits"
              className="block hover:text-gray-400 transition-colors duration-1000 ease-in-out"
            >
              Splits
            </a>
            <a
              href="#login"
              className="block hover:text-gray-400 transition-colors duration-1000 ease-in-out"
            >
              Login
            </a>
            <button className="bg-purple-600 px-4 py-2 rounded-full w-full hover:bg-purple-700 transition-colors duration-1000 ease-in-out">
              Sign Up
            </button>
          </div>
        )}
      </nav>{" "}
      {/* Hero Section */}
      <section
        className={`py-20 text-center transition-colors duration-1000 ease-in-out ${
          isDarkMode
            ? "bg-gray-900 text-gray-100"
            : "bg-gradient-to-r from-blue-400 to-blue-100 text-white"
        }`}
      >
        <h1
          className={`text-4xl md:text-6xl font-bold ${
            isDarkMode ? "text-purple-400" : "text-gradient-purple"
          } transition-colors duration-1000 ease-in-out`}
        >
          Melos Sounds: <span className="text-white">Publishing</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl px-60">
          If you’ve written songs, they may have already earned you money. Don’t
          leave royalties on the table by not taking action. Collect what’s
          yours with Melos Sounds Publishing.
        </p>
        <button className="mt-8 bg-purple-600 hover:bg-purple-500 px-8 py-3 rounded-full text-lg md:text-xl font-semibold transition-colors duration-1000 ease-in-out">
          GET STARTED
        </button>
      </section>
      {/* Section 2 */}
      <section
        className={`py-20 text-center transition-colors duration-1000 ease-in-out ${
          isDarkMode
            ? "bg-gray-800 text-gray-100"
            : "bg-gradient-to-r from-white to-gray-100 text-gray-700"
        }`}
      >
        <h1
          className={`text-4xl md:text-6xl font-bold ${
            isDarkMode ? "text-purple-300" : "text-gradient-purple"
          } transition-colors duration-1000 ease-in-out`}
        >
          <span className={isDarkMode ? "text-gray-200" : "text-black"}>
            What Is
          </span>{" "}
          Music Publishing?
        </h1>
        <p
          className={`mt-4 text-lg md:text-xl ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Music publishing is all about managing the royalties earned from the
          music you write.
        </p>
        <p
          className={`mt-4 text-lg md:text-xl px-40 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          When you write a song, and it’s used commercially, you’re owed
          royalties. That means your original songs generate revenue with every
          stream on Spotify, video creation on TikTok, view on YouTube, radio
          spin, or live performance worldwide.
        </p>
        <p
          className={`mt-4 text-lg md:text-xl px-10 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          That’s a lot to keep track of — Melos Sounds Publishing can help you
          get the royalties you’re owed.
        </p>
      </section>
      <div className="bg-gray-900 text-white py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Get Covered
            </span>{" "}
            with Melos Sounds Publishing
          </h1>
          <p className="text-gray-400 mt-4">
            Melos Sounds Publishing has direct memberships with pay sources for
            musicians worldwide. That means we get you paid faster than ever
            before.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {/* 1st Item */}
          <div className="text-center">
            <div className="text-pink-500 text-6xl mb-4">🎵</div>
            <h3 className="text-xl font-semibold">
              Keep 100% of Your Copyrights
            </h3>
            <p className="text-gray-400 mt-2">
              Collect your royalties without sacrificing ownership.
            </p>
          </div>

          {/* 2nd Item */}
          <div className="text-center">
            <div className="text-purple-500 text-6xl mb-4">🎶</div>
            <h3 className="text-xl font-semibold">
              Register Unlimited Songs Worldwide
            </h3>
            <p className="text-gray-400 mt-2">
              Melos Sounds Publishing collects from every paying territory.
            </p>
          </div>

          {/* 3rd Item */}
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">🎧</div>
            <h3 className="text-xl font-semibold">
              Collect Royalties from Spotify, Apple Music, & more
            </h3>
            <p className="text-gray-400 mt-2">
              Earn mechanical and performance royalties with each stream.
            </p>
          </div>

          {/* 4th Item */}
          <div className="text-center">
            <div className="text-green-500 text-6xl mb-4">✔️</div>
            <h3 className="text-xl font-semibold">Expert Support</h3>
            <p className="text-gray-400 mt-2">
              Navigate the music industry with experts by your side.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white py-16">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">
            Collect All of Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
              Royalties
            </span>
          </h1>
          <p className="text-gray-400 mt-4">
            We work with thousands of pay sources worldwide to get you all the
            revenue you deserve. Spend more time making and releasing music, and
            let Melos Sounds collect your publishing royalties. Melos Sounds
            Publishing will collect:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {/* 1st Column */}
          <div className="text-center">
            <div className="text-pink-500 text-6xl mb-4">🎧</div>
            <h3 className="text-lg font-semibold">
              Streams on DSPs like Spotify and Apple Music
            </h3>
            <p className="text-gray-400 mt-2">
              Every stream on platforms like Spotify, Apple Music, Amazon Music,
              Tidal, and others generates mechanical royalties.
            </p>
          </div>

          {/* 2nd Column */}
          <div className="text-center">
            <div className="text-pink-500 text-6xl mb-4">📺</div>
            <h3 className="text-lg font-semibold">
              Broadcasts on TV, Radio, in Restaurants, Bars and More
            </h3>
            <p className="text-gray-400 mt-2">
              When your music is broadcast on radio, satellite radio, in bars,
              restaurants, concert venues, and more, it generates performance
              royalties – we help you collect them.
            </p>
          </div>

          {/* 3rd Column */}
          <div className="text-center">
            <div className="text-pink-500 text-6xl mb-4">📱</div>
            <h3 className="text-lg font-semibold">YouTube and Social Media</h3>
            <p className="text-gray-400 mt-2">
              TikTok videos and YouTube uploads generate both a performance and
              mechanical reproduction royalty.
            </p>
          </div>

          {/* 4th Column */}
          <div className="text-center">
            <div className="text-pink-500 text-6xl mb-4">🎶</div>
            <h3 className="text-lg font-semibold">Printed Music and Lyrics</h3>
            <p className="text-gray-400 mt-2">
              When your music or lyrics appear in sheet music or even appear
              online, your songs earn royalties – don't miss out on tons of
              global pay sources!
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-2 px-6 rounded-full text-lg font-bold">
            Collect Songwriter Royalties
          </button>
        </div>
      </div>
      <section
        className={`py-20 text-center transition-colors duration-1000 ease-in-out ${
          isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          The Publishing Dashboard
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          We’ve upgraded our publishing dashboard to make maximizing your
          publishing earnings easier than ever.
        </p>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-20">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Seamless Song Management</h3>
            <p>
              Connect your Spotify for Artists profile to register songs you’ve
              distributed. Seamlessly register all your distributed songs
              automatically.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Advanced Analytics</h3>
            <p>
              See how your songs are performing on various platforms and in each
              country.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Collect All Your Royalties
            </h3>
            <p>
              Access your publishing royalties and collect royalties for other
              songwriters you work with (See FAQ for further details).
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Quarterly Royalty Statements
            </h3>
            <p>
              The information you need in a timely fashion – right at your
              fingertips.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-black text-white min-h-screen">
        <header className="text-center p-10">
          <h1 className="text-4xl font-bold">Melos Sounds Sync</h1>
          <p className="text-lg mt-4">
            Get Your Music in TV, Movies, Games, & More
          </p>
          <p className="mt-2">
            We work with music supervisors every day &mdash; and Melos Sounds
            songwriters have been a part of every project you see below.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-10 py-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-md overflow-hidden shadow-md"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <p className="p-4 text-center font-medium">{project.title}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            SIGN UP NOW
          </button>
        </div>
      </div>
      <div className="dark">
        {/* Outer div with background and text color switching */}
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
          {/* Main Container */}
          <div className="container mx-auto px-4 py-10">
            {/* Header */}
            <header className="text-center mb-8">
              <h1 className="text-4xl font-bold">
                <span className="text-red-500">Our </span>
                <span className="text-red-500">Music </span>
                <span className="text-purple-500">Publishing </span>
                Pricing
              </h1>
            </header>

            {/* Pricing Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
              {/* Pricing Card 1 */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center transition-colors duration-500 h-40 flex flex-col justify-center">
                <h2 className="text-5xl font-bold text-red-500">$75</h2>
                <p className="mt-2 font-semibold">One-time Setup Fee</p>
                <p className="text-sm">Submit unlimited songs.</p>
              </div>

              {/* Pricing Card 2 */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center transition-colors duration-500 h-40 flex flex-col justify-center">
                <h2 className="text-5xl font-bold text-red-500">15%</h2>
                <p className="mt-2 font-semibold">Commission</p>
                <p className="text-sm">Keep 85% of the royalties collected.</p>
              </div>

              {/* Pricing Card 3 */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center transition-colors duration-500 h-40 flex flex-col justify-center">
                <h2 className="text-5xl font-bold text-red-500">50%</h2>
                <p className="mt-2 font-semibold">Sync Commission</p>
                <p className="text-sm">
                  (if opted-in) Keep 50% of the revenue collected.
                </p>
              </div>
            </div>

            {/* Call-to-action */}
            <div className="flex justify-center mt-10">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h5 class="text-lg font-semibold mb-4">About Melos Sounds</h5>
              <ul>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    About Melos Sounds
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Leadership
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 class="text-lg font-semibold mb-4">
                Make Money With Melos Sounds
              </h5>
              <ul>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Create Your Account
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Sell Your Music
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Artist Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 class="text-lg font-semibold mb-4">Melos Sounds Community</h5>
              <ul>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    X (Formerly Twitter)
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 class="text-lg font-semibold mb-4">Account Services</h5>
              <ul>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Login
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Create Your Account
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="text-center mt-8 border-t border-gray-700 pt-4">
            <p class="text-sm">
              &copy; 2024 Melos Sounds. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Secoend;
