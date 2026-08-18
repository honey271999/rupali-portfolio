export default function Portfolio() {
  const projects = [
    {
      title: "Buyoff",
      desc: "Responsive frontend built from scratch with reusable, prop-driven UI components using Next.js and Tailwind CSS.",
      link: "https://buyoffssr.netlify.app",
    },
    {
      title: "ThunderScript",
      desc: "Figma designs translated into responsive frontend sections with a consistent, reusable component structure.",
      link: "https://dev.thunderscript.com",
    },
    {
      title: "Infra Corridors",
      desc: "Responsive landing pages and reusable frontend sections built from design specs using React.js and Bootstrap.",
      link: "https://infracorridors.netlify.app",
    },
    {
      title: "BrainIQ",
      desc: "Interactive quiz/gaming UI with dynamic, state-driven components and real-time updates.",
      link: "https://devbrainiq.netlify.app",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 py-6">
        <h1 className="text-2xl font-bold tracking-wide">
          Rupali<span className="text-purple-400">.</span>
        </h1>

        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
          <a
            href="https://github.com/honey271999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rupali-pandey-3b56691b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="/Rupali_Pandey_Resume-frontend1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-6 md:px-16 pt-20 pb-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[5px] text-purple-400 text-sm mb-5">
              Frontend Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building Modern
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Web Experiences
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-8 mt-8 max-w-xl">
              Frontend Developer specializing in React.js, TypeScript, Next.js,
              JavaScript, Tailwind CSS, and responsive UI development.
              Passionate about building modern, scalable, and visually
              engaging web applications.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">
              <a
                href="#projects"
                className="px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="mailto:rupalipandey132@gmail.com"
                className="px-7 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
              >
                Contact Me
              </a>

              <a
                href="/Rupali_Pandey_Resume-frontend1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-2xl font-bold">
                  R
                </div>

                <div>
                  <h2 className="text-2xl font-semibold">
                    Rupali Pandey
                  </h2>
                  <p className="text-gray-400">
                    React & Next.js Developer
                  </p>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-5">
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <h3 className="text-3xl font-bold text-purple-400">
                    3+
                  </h3>
                  <p className="text-gray-400 mt-2">Years Experience</p>
                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <h3 className="text-3xl font-bold text-blue-400">
                    10+
                  </h3>
                  <p className="text-gray-400 mt-2">Projects</p>
                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <h3 className="text-3xl font-bold text-pink-400">
                    React
                  </h3>
                  <p className="text-gray-400 mt-2">Frontend Expert</p>
                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <h3 className="text-3xl font-bold text-cyan-400">
                    UI
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Responsive Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="relative z-10 px-6 md:px-16 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-14">
            Skills & Technologies
          </h2>

          <div className="flex flex-wrap gap-5">
            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "HTML5",
              "CSS3",
              "Redux Toolkit",
              "REST APIs",
              "Git",
              "Responsive Design",
              "Bootstrap",
              "Figma",
            ].map((skill) => (
              <div
                key={skill}
                className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative z-10 px-6 md:px-16 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-14">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 hover:-translate-y-2 transition duration-300"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-semibold">
                    {project.title}
                  </h3>

                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    ↗
                  </div>
                </div>

                <p className="text-gray-400 leading-8 mt-6">
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 text-purple-400 font-medium hover:text-white transition"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 px-6 md:px-16 py-28"
      >
        <div className="max-w-5xl mx-auto text-center bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 backdrop-blur-xl">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Let’s Build Something Amazing Together
          </h2>

          <p className="text-gray-400 text-lg leading-8 mt-8 max-w-2xl mx-auto">
            Open to frontend developer opportunities, freelance work,
            and exciting web projects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
            <a
              href="mailto:rupalipandey132@gmail.com"
              className="inline-block px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:scale-105 transition"
            >
              Get In Touch
            </a>

            <a
              href="https://github.com/honey271999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rupali-pandey-3b56691b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
