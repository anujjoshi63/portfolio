"use client";
import { motion } from "framer-motion";
import { FileIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
const Intro = () => {
  return (
    <div className="mt-8 w-full space-y-6 md:mt-0" id="intro_section">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 40,
        }}
        viewport={{ once: true }}
        className="flex w-full flex-wrap items-center justify-center gap-6 text-left text-2xl"
      >
        {/* clip text gradient */}
        <h1 className="bg-gradient-to-b from-slate-600 via-slate-700 to-slate-900 bg-clip-text py-2 text-4xl font-black tracking-tight text-transparent sm:text-5xl">
          Anuj Joshi
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 20,
            delay: 1,
          }}
          viewport={{ once: true }}
          className="hidden flex-1 text-left text-lg text-gray-600 md:block"
        >
          <span className="text-2xl font-medium tracking-tight text-gray-600">
            — 2x SDE Intern at AI startups
          </span>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 40,
          delay: 0.1,
        }}
        viewport={{ once: true }}
        className="flex w-full flex-col justify-center space-y-4 "
      >
        <p className="w-full text-left text-2xl text-themeBlack dark:text-themeWhite">
          <span className="tracking-tight">Full-stack engineer</span>{" "}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 20,
              delay: 1,
            }}
            viewport={{ once: true }}
          >
            specializing in
          </motion.span>
          <span className="italic"> AI-driven</span>{" "}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 20,
              delay: 1,
            }}
            viewport={{ once: true }}
          >
            web applications and
          </motion.span>
          <span className="tracking-tight"> scalable solutions</span>
        </p>
        <div className="inline-block">
          <div className="w-fit rounded-full bg-emerald-500 px-4 py-2 text-base font-semibold text-white">
            Open to SDE roles starting May 2025
          </div>
        </div>
      </motion.div>
      <motion.div
        className="mt-4 flex w-full items-center justify-center gap-8 bg-themeWhite py-8 text-base font-light text-themeBlack dark:bg-themeBlack dark:text-themeWhite"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 50,
          delay: 0.3,
        }}
        viewport={{ once: true }}
      >
        <Link
          href={"https://www.linkedin.com/in/thejoshi/"}
          target="_blank"
          title="Anuj's LinkedIn Profile"
        >
          <div className="flex items-center justify-center gap-1 opacity-75 transition-all duration-300 hover:opacity-95 hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)] dark:hover:text-[hsl(240,0%,95%)]">
            <LinkedinIcon width={16} className="text-black dark:text-white" />
            <span className="leading-3">LinkedIn</span>
            {/* <ArrowUpRight width={16} color="gray" className="-ml-2" /> */}
          </div>
        </Link>
        <Link
          href={"https://github.com/anujjoshi63"}
          target="_blank"
          title="Anuj's GitHub Profile"
        >
          <div className="flex items-center justify-center gap-1 opacity-75 transition-all duration-300 hover:opacity-95 hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)] dark:hover:text-[hsl(240,0%,95%)]">
            <GithubIcon width={16} className="text-black dark:text-white" />
            <span className="leading-3">GitHub</span>
            {/* <ArrowUpRight width={16} color="gray" /> */}
          </div>
        </Link>
        <Link
          href={"https://teensy.tech/anujresume"}
          target="_blank"
          title="Anuj's Resume"
        >
          <div className="flex items-center justify-center gap-1 opacity-75 transition-all duration-300 hover:opacity-95 hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)] dark:hover:text-[hsl(240,0%,95%)]">
            <FileIcon width={16} className="text-black dark:text-white" />
            <span className="leading-3">Resume</span>
            {/* <ArrowUpRight width={16} color="gray" /> */}
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Intro;
