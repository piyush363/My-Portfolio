export default function Projects() {
  const projects = [
    {
      title: "Get Me A Chai",
      description:
        "A crowdfunding platform built with Next.js where creators can receive support and donations from their audience.",
      tech: ["Next.js", "MongoDB", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
    {
      title: "Password Manager",
      description:
        "A secure password manager application for storing and managing credentials efficiently.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Gen-Ai + MERN Project",
      description:
        "A responsive Spotify-inspired music player UI built to strengthen frontend development skills.",
      tech: ["Gemini","Next.js", "Mongodb", "Tailwind Css"],
      github: "#",
      live: "#",
    },
     {
      title: "Spotify Clone",
      description:
        "A responsive Spotify-inspired music player UI built to strengthen frontend development skills.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },
     {
      title: "Spotify Clone",
      description:
        "A responsive Spotify-inspired music player UI built to strengthen frontend development skills.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0F172A] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-2">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A collection of projects that showcase my learning journey
            and full-stack development skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-slate-800 flex items-center justify-center">
                <span className="text-slate-500">
                  Project Screenshot
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 rounded-md text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    GitHub →
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}