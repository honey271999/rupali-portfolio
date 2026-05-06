export default function Portfolio() {
  const projects = [
    {
      title: "Buyoff",
      link: "https://buyoffssr.netlify.app",
      desc: "Responsive frontend application built using Next.js and Tailwind CSS.",
    },
    {
      title: "ThunderScript",
      link: "https://dev.thunderscript.com",
      desc: "Modern responsive UI implementation with reusable frontend components.",
    },
    {
      title: "Infra Corridors",
      link: "https://infracorridors.netlify.app",
      desc: "Responsive landing pages and clean UI sections using React.js.",
    },
    {
      title: "BrainIQ",
      link: "https://devbrainiq.netlify.app",
      desc: "Interactive gaming and quiz website with responsive frontend design.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 md:px-16 py-10">
      {/* Hero Section */}
      <section className="flex flex-col gap-6 items-start justify-center py-16 max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[4px] text-gray-500">
          Frontend Developer
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm Rupali Pandey.
          <br />
          I build modern and responsive web applications.
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl leading-8">
          Frontend Developer experienced in React.js, Next.js, JavaScript,
          Tailwind CSS, and responsive UI development. Passionate about
          creating clean, user-friendly interfaces and scalable frontend
          solutions.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="mailto:rupalipandey132@gmail.com"
            className="bg-black text-white px-6 py-3 rounded-2xl font-medium hover:scale-105 transition"
          >
            Contact Me
          </a>

          <a
            href="#projects"
            className="border border-gray-300 px-6 py-3 rounded-2xl font-medium hover:bg-gray-100 transition"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {[
            "React.js",
            "Next.js",
            "JavaScript",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
            "Redux Toolkit",
            "REST APIs",
            "Git",
            "Responsive Design",
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 rounded-full bg-gray-100 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto py-14">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>

        <div className="space-y-8">
          <div className="border border-gray-200 rounded-3xl p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">
              Frontend Developer
            </h3>
            <p className="text-gray-500 mt-1">
              Ibyte Infomatic Pvt Ltd • Mar 2025 – Present
            </p>

            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
              <li>
                Developed responsive applications using React.js and Next.js.
              </li>
              <li>
                Built reusable UI components and integrated REST APIs.
              </li>
              <li>
                Worked on responsive layouts, bug fixing, and UI optimization.
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-3xl p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">Frontend Developer</h3>
            <p className="text-gray-500 mt-1">
              TIS India Digitech • Apr 2024 – Sep 2024
            </p>

            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
              <li>
                Developed responsive web pages using HTML, CSS, and JavaScript.
              </li>
              <li>
                Converted Figma designs into production-ready UI.
              </li>
              <li>
                Improved UI responsiveness and browser compatibility.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto py-14">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-7 mb-5">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-black font-medium"
              >
                Visit Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>

        <p className="text-gray-600 text-lg mb-8">
          Open to frontend developer opportunities and freelance projects.
        </p>

        <a
          href="mailto:rupalipandey132@gmail.com"
          className="bg-black text-white px-8 py-4 rounded-2xl font-medium inline-block hover:scale-105 transition"
        >
          Get In Touch
        </a>
      </section>
    </div>
  );
}
