'use client';
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Next.js and Node.js",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    image: "/project1.jpg",
    github: "#",
    demo: "#"
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative task management system",
    tech: ["React", "Firebase", "Tailwind", "WebSockets"],
    image: "/project2.jpg",
    github: "#",
    demo: "#"
  },
  {
    title: "AI Chat Interface",
    description: "LLM-powered chat application with custom fine-tuning",
    tech: ["Python", "FastAPI", "React", "AWS"],
    image: "/project3.jpg",
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 120 }
    }
  };

  return (
    <section id="projects" className="px-6 py-20 border-gray-800 border-b min-h-screen">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="mb-16 font-bold text-white text-4xl md:text-5xl"
          variants={itemVariants}
        >
          <span className="text-secondary">#</span> Projects
        </motion.h2>

        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative bg-gray-900 border border-gray-800 hover:border-secondary rounded-xl transition-all"
              whileHover={{ y: -10 }}
            >
              <div className="relative rounded-t-xl h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="mb-2 font-semibold text-white text-xl">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-400">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-800 px-3 py-1 border border-gray-700 rounded-full text-secondary text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors"
                  >
                    <FiExternalLink /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <button className="hover:bg-secondary/10 px-8 py-3 border border-secondary rounded-lg text-secondary transition-colors">
            View All Projects
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}