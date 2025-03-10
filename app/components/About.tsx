'use client';
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import profilePic from '../image/pic.png';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="px-6 py-20 border-gray-800 border-b min-h-screen">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 className="mb-12 font-bold text-white text-4xl" variants={itemVariants}>
          <span className="text-secondary">#</span> About Me
        </motion.h2>

        <div className="items-center gap-12 grid md:grid-cols-2">
          {/* Text Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a full-stack developer specializing in modern web application development. 
              With {new Date().getFullYear() - 2020}+ years of experience, I bridge the gap between 
              design and technical implementation, creating seamless user experiences.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              My current focus is building scalable solutions with <span className="text-secondary">
              Next.js</span> and <span className="text-secondary">Node.js</span>, while exploring 
              cloud architectures and DevOps practices. When I'm not coding, I contribute to open-source 
              projects and mentor aspiring developers.
            </p>

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
                src={profilePic} // Replace with your image path
                alt="Dagmawi Yoseph"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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
                year: "2023-Present",
                role: "Senior Full-Stack Developer",
                company: "Tech Innovators Inc."
              },
              { 
                year: "2021-2023",
                role: "Frontend Lead",
                company: "Digital Solutions Co."
              },
              { 
                year: "2020-2021",
                role: "Junior Developer",
                company: "Web Starters Agency"
              }
            ].map((item, index) => (
              <motion.div
                key={item.year}
                className="relative pl-16"
                variants={itemVariants}
              >
                <div className="top-2 left-8 z-10 absolute bg-secondary rounded-full w-4 h-4" />
                <div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
                  <p className="mb-2 text-secondary text-sm">{item.year}</p>
                  <h4 className="font-semibold text-white text-lg">{item.role}</h4>
                  <p className="text-gray-400">{item.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}