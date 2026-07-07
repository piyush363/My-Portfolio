const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#0F172A] text-white px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          
          {/* Small Intro */}
          <p className="text-blue-500 font-medium mb-4">
            👋 Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Piyush
            <br />
            Bharti
          </h1>

          {/* Role */}
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            MERN Stack Developer
          </h2>

          {/* Description */}
          <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-2xl">
            I'm a BCA student passionate about building modern web applications
            with MongoDB, Express.js, React, and Node.js. Currently focused on
            improving my full-stack development skills through real-world
            projects and continuous learning.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3 border border-slate-600 hover:border-blue-500 rounded-lg font-medium transition"
            >
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14">
            <div>
              <h3 className="text-3xl font-bold text-blue-500">5+</h3>
              <p className="text-slate-400">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-500">1+</h3>
              <p className="text-slate-400">Years Learning</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-500">MERN</h3>
              <p className="text-slate-400">Stack Focus</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-slate-800"></div>
      </div>
    </section>
  );
};

export default Hero;