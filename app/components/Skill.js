const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Next.js"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "Mongoose"],
    },
    {
      title: "Language",
      skills: ["Java", "C"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      title: "AI Tools",
      skills: ["ChatGPT", "Claude", "GitHub Copilot"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#0F172A] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-2">
            My Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & Technologies
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build modern web
            applications and continuously improve my development skills.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#111827] border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-500">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 hover:bg-blue-500 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;