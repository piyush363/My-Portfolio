import React from "react";

const Project = () => {
  const projects = [
    {
  title: "ShopNest",
  description:
    "A full-stack MERN e-commerce platform featuring product browsing, search functionality, user authentication, and responsive shopping cart management.",
  tech: ["React", "Node.js", "Express.js", "MongoDB"],
  github: "https://github.com/piyush363/Ecom-Website",
  live: "https://shopnest-ecom-kkry.onrender.com/",
  image: "/shopnest-ss.jpg", 
},
    {
      title: "Get Me A Chai",
      description:
        "A crowdfunding platform built with Next.js where creators can receive support and donations from their audience.",
      tech: ["Next.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/piyush363/Get-Me-A-Chai",
      live: "https://get-me-a-chai-5o4x.onrender.com",
      image: "/get-me-a-chai-ss.jpg", 
    },
    {
      title: "Spotify Clone",
      description:
        "A responsive Spotify-inspired music player UI built to strengthen frontend development skills.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/piyush363/Spotify_Clone",
      live: "https://spotify-clone-y485.onrender.com",
      image: "/spotify-ss.jpg", 
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
          <p className="text-blue-500 font-medium mb-2">My Work</p>
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
              className="bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition duration-300 flex flex-col justify-between"
            >
              {/* Project Image */}
              <div className="h-48 bg-slate-800 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    className="w-full h-full object-cover object-top hover:scale-105 transition duration-300"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <span className="text-slate-500">Project Image</span>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
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
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 font-medium"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 font-medium"
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
};

export default Project;