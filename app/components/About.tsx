"use client";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiCheck,
  FiCode,
  FiLayout,
  FiServer,
  FiZap,
} from "react-icons/fi";
import Image from "next/image";
import profilePic from "../image/pic.png";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <section
      id="about"
      className="px-6 py-20 border-gray-800 border-b min-h-screen"
    >
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          className="mb-12 font-bold text-white text-4xl"
          variants={itemVariants}
        >
          <span className="text-secondary">#</span> About Me
        </motion.h2>

        <div className="items-center gap-12 grid md:grid-cols-2">
          {/* Text Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <p className="text-gray-400 text-lg leading-relaxed">
                Hi, I'm <span className="text-secondary">Dagmawi Yoseph</span>,
                a passionate Full-Stack Developer specializing in React,
                TypeScript, Tailwind, and Node.js. I graduated from HilCoE
                School of Science and Technology in 2023 with a degree in
                Computer Science.
              </p>

              <div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
                <h3 className="flex items-center gap-2 mb-4 font-semibold text-white text-lg">
                  <FiZap className="text-secondary" /> What I Do
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      icon: <FiCode />,
                      text: "Build responsive web apps with React, Next.js, and Node.js",
                    },
                    {
                      icon: <FiLayout />,
                      text: "Craft clean UI/UX with Tailwind and optimize performance",
                    },
                    {
                      icon: <FiServer />,
                      text: "Develop secure APIs using Express, Sequelize, and MySQL",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-gray-400"
                      variants={itemVariants}
                    >
                      <span className="mt-1 text-secondary">{item.icon}</span>
                      {item.text}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
              <h3 className="flex items-center gap-2 mb-4 font-semibold text-white text-lg">
                <FiCheck className="text-secondary" /> Why Work With Me?
              </h3>
              <div className="gap-4 grid sm:grid-cols-2">
                {[
                  "Problem Solver: Tackle challenges with efficient solutions",
                  "Detail-Oriented: Clean, maintainable code focus",
                  "Fast Learner: Quick tech adaptation",
                  "Full-Stack Expertise: End-to-end development",
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-2 text-gray-400"
                    variants={itemVariants}
                  >
                    <FiCheck className="flex-shrink-0 mt-1 text-secondary" />
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-secondary hover:bg-accent px-6 py-3 rounded-lg font-semibold text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload /> Download Resume
            </motion.a>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="group relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative border-2 border-gray-700 group-hover:border-secondary rounded-2xl w-full h-[35rem] overflow-hidden transition-all">
              <Image
                src={profilePic}
                alt="Dagmawi Yoseph"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
            </div>
            <div className="-z-10 absolute inset-0 opacity-0 group-hover:opacity-100 border-2 border-secondary rounded-2xl transition-opacity translate-x-4 translate-y-4" />
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div className="mt-16" variants={itemVariants}>
          <h3 className="mb-8 font-bold text-white text-2xl">
            <span className="text-secondary">#</span> Experience
          </h3>

          <div className="before:left-8 before:absolute relative space-y-8 before:bg-gray-800 before:w-0.5 before:h-full">
            {[
              {
                year: "Feb 2024 - Present",
                role: "Full-Stack Web Developer",
                company: "Echnoserve",
                achievements: [
                  "Developing and maintaining web applications with modern frameworks",
                  "Enhancing system performance and user experience",
                  "Collaborating with teams to deliver scalable solutions",
                ],
              },
              {
                year: "Oct 30, 2023 - Jan 1, 2024",
                role: "Sales Development Representative (SDR)",
                company: "MODEETH Outsource PLC",
                achievements: [
                  "Managed outbound sales and lead generation",
                  "Built relationships with potential clients",
                  "Contributed to increasing company revenue",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                className="relative pl-16"
                variants={itemVariants}
              >
                <div className="top-2 left-8 z-10 absolute bg-secondary rounded-full w-4 h-4" />
                <div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
                  <p className="mb-2 text-secondary text-sm">{item.year}</p>
                  <h4 className="font-semibold text-white text-lg">
                    {item.role}
                  </h4>
                  <p className="mb-3 text-gray-400">{item.company}</p>
                  <ul className="space-y-2">
                    {item.achievements?.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-400 text-sm"
                      >
                        <FiCheck className="flex-shrink-0 mt-1 text-secondary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
