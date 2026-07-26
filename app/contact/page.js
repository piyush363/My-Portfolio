export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0F172A] text-white py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's Work Together
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg leading-8">
            I'm currently looking for internship opportunities, freelance
            projects, and exciting collaborations. If you have an opportunity
            or just want to connect, I'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <a
                  href="mailto:piyushbharti338@email.com"
                  className="text-lg hover:text-blue-400 transition"
                >
                  piyushbharti338@email.com
                </a>
              </div>

              <div>
                <p className="text-slate-400 text-sm">Location</p>
                <p className="text-lg">
                  Ghaziabad, Uttar Pradesh, India
                </p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">Availability</p>
                <p className="text-lg text-green-400">
                  Available for Internships
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6">
              Connect With Me
            </h3>

            <p className="text-slate-400 leading-7 mb-8">
              Feel free to reach out through email or connect with me on GitHub
              and LinkedIn. I'm always open to discussing new projects,
              internships, and opportunities.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:piyushbharti338@email.com"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
              >
                Email Me
              </a>

              <a
                href="https://github.com/piyush363"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-700 hover:border-blue-500 rounded-lg transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/piyush-bharti-2b923231a/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-700 hover:border-blue-500 rounded-lg transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}