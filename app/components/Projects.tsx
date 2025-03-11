"use client";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { images } from "./Image";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Next.js and Node.js",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    image: images("./home.png"),
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative task management system",
    tech: ["React", "Firebase", "Tailwind", "WebSockets"],
    image: images("./login.png"),
    github: "#",
    demo: "#",
  },
  {
    title: "AI Chat Interface",
    description: "LLM-powered chat application with custom fine-tuning",
    tech: ["Python", "FastAPI", "React", "AWS"],
    image: images("./supplier.png"),
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(6);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        ease: "anticipate",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 0.5,
      },
    },
  };

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <section
      id="projects"
      className="px-6 py-20 border-gray-800 border-b min-h-screen"
    >
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
          {projects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="group relative bg-gray-900 border border-gray-800 hover:border-secondary rounded-xl transition-all"
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px -15px rgba(0, 255, 136, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative rounded-t-xl h-48 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 font-semibold text-white text-xl">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-400">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: techIndex * 0.1 + 0.2 }}
                      className="bg-gray-800 hover:bg-secondary/10 px-3 py-1 border border-gray-700 rounded-full text-secondary text-sm transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FiGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FiExternalLink /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-16 text-center" variants={itemVariants}>
          {visibleCount < projects.length && (
            <motion.button
              className="hover:bg-secondary/10 px-8 py-3 border border-secondary rounded-lg text-secondary transition-colors"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 255, 136, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSeeMore}
            >
              View All Projects
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
