export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0F172A] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="mb-16">
          <p className="text-blue-500 font-medium mb-2">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div>
            <div className="w-full h-[400px] rounded-2xl bg-[#111827] border border-slate-800 flex items-center justify-center">
              <span className="text-slate-500 text-lg">
                Your Photo Here
              </span>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Aspiring Full Stack Developer
            </h3>

            <p className="text-slate-400 leading-relaxed mb-6">
              I'm Piyush Bharti, a BCA student passionate about web
              development and technology. I enjoy building modern web
              applications using the MERN stack and continuously learning
              new tools and technologies.
            </p>

            <p className="text-slate-400 leading-relaxed mb-6">
              My focus is on creating responsive, user-friendly, and
              scalable applications while strengthening my frontend,
              backend, and problem-solving skills.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Currently, I'm working on personal projects, improving my
              development workflow, and preparing for internship
              opportunities in software development.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h4 className="text-blue-500 font-semibold">
                  Education
                </h4>
                <p className="text-slate-400 mt-2">
                  BCA Student
                </p>
              </div>

              <div>
                <h4 className="text-blue-500 font-semibold">
                  Focus
                </h4>
                <p className="text-slate-400 mt-2">
                  MERN Stack
                </p>
              </div>

              <div>
                <h4 className="text-blue-500 font-semibold">
                  Location
                </h4>
                <p className="text-slate-400 mt-2">
                  India
                </p>
              </div>

              <div>
                <h4 className="text-blue-500 font-semibold">
                  Goal
                </h4>
                <p className="text-slate-400 mt-2">
                  Software Internship
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}