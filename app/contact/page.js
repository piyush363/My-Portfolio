export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0F172A] text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        <p className="text-blue-500 font-medium mb-2">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Work Together
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-10">
          I'm currently looking for internship opportunities and
          exciting projects. Feel free to reach out if you'd like
          to collaborate or just say hello.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          
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
    </section>
  );
}