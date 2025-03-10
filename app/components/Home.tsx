"use client";
import { motion } from "framer-motion";
import {
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

// Animation configurations
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
  visible: { opacity: 1, y: 0 },
};

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: <FaGithub className="w-6 h-6" />,
    aria: "Visit my GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: <FaLinkedin className="w-6 h-6" />,
    aria: "Connect with me on LinkedIn",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourhandle",
    icon: <FaTwitter className="w-6 h-6" />,
    aria: "Follow me on Twitter",
  },
  {
    name: "Medium",
    url: "https://medium.com/@yourusername",
    icon: <FaMedium className="w-6 h-6" />,
    aria: "Read my articles on Medium",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/yourprofile",
    icon: <SiLeetcode className="w-6 h-6" />,
    aria: "View my LeetCode solutions",
  },
  {
    name: "Resume",
    url: "/resume.pdf",
    icon: <FaFilePdf className="w-6 h-6" />,
    aria: "Download my resume",
  },
];

export default function First() {
  return (
    <motion.div
      id="home"
      className="flex flex-col justify-center mx-auto p-6 max-w-4xl min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Welcome Message with Typing Effect */}
      <motion.div variants={itemVariants}>
        <p className="mb-4 font-mono text-accent text-sm">
          <TypeAnimation
            sequence={["// Welcome to my digital space", 1000]}
            cursor={false}
            speed={40}
          />
        </p>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="mb-4 font-bold text-gray-100 text-5xl md:text-7xl"
        variants={itemVariants}
      >
        Dagmawi Yoseph
      </motion.h1>

      {/* Dynamic Role Display */}
      <motion.div
        className="mb-6 font-mono text-secondary text-3xl md:text-5xl"
        variants={itemVariants}
      >
        <TypeAnimation
          sequence={[
            "FullStack Developer",
            2000,
            "Problem Solver",
            2000,
            "Tech Enthusiast",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      {/* Introduction Paragraph */}
      <motion.p
        className="mb-8 max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        I specialize in crafting robust web applications and digital
        experiences. Currently focusing on modern solutions with{" "}
        <span className="text-accent">Next.js</span>,
        <span className="text-accent"> Node.js</span>, and cloud technologies.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        className="flex sm:flex-row flex-col gap-4"
        variants={itemVariants}
      >
        <motion.a
          href="/projects"
          className="flex justify-center items-center gap-2 bg-accent px-8 py-4 rounded-lg font-semibold text-gray-900 transition-colors hover:bg-accent-dark"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View Projects</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </motion.a>

        <motion.a
          href="/contact"
          className="flex justify-center items-center gap-2 hover:bg-accent/10 px-8 py-4 border border-accent rounded-lg font-semibold text-accent transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Get in Touch</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </motion.a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex flex-wrap gap-6 mt-16 text-gray-500"
        variants={itemVariants}
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative hover:text-accent transition-colors"
            aria-label={link.aria}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {link.icon}
            <span className="-bottom-8 left-1/2 absolute bg-gray-800 opacity-0 group-hover:opacity-100 px-2 py-1 rounded-md text-white text-xs transition-opacity -translate-x-1/2 duration-200 transform">
              {link.name}
            </span>
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll Indicator (optional) */}
      {/* <motion.div
        className="flex flex-col items-center mt-16 text-gray-500"
        variants={itemVariants}
      >
        <span className="mb-2 text-sm">Explore more</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div> */}
    </motion.div>
  );
}
