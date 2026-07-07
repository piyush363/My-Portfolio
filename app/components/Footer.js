import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-bold">
              Piyush<span className="text-blue-500">.</span>
            </h3>

            <p className="text-slate-400 mt-2 max-w-md">
              MERN Stack Developer passionate about building modern,
              responsive, and scalable web applications.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-6 text-slate-400">
            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>

            <a href="#skills" className="hover:text-blue-500 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Piyush Bharti. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="https://github.com/piyush363"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/piyush-bharti-2b923231a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:piyushbharti338@gmail.com"
              className="text-slate-400 hover:text-blue-500 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;