"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FileIcon, GithubIcon, LinkedinIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

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
        className="flex flex-col w-full flex-wrap items-center justify-center text-left text-2xl"
      >
        <Badge
          variant="outline"
          className="text-base rounded-none smooth-corners-sm font-medium mb-4 bg-gradient-to-r from-slate-200/75 via-slate-200/75 to-slate-300/50"
        >
          🚀 Available for SDE Roles - May 2025
        </Badge>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 40,
        }}
        viewport={{ once: true }}
        className="flex flex-col w-full flex-wrap items-center justify-center text-left text-2xl"
      >
        <h1 className="bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800 bg-clip-text py-2 text-6xl font-black tracking-tighter px-1 text-transparent sm:text-5xl">
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
          className="hidden flex-1 text-left text-lg md:block"
        >
          <span className="text-xl font-medium tracking-tight text-slate-500">
            2x SDE Intern at AI startups
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
        className="flex w-full flex-col justify-center gap-4"
      >
        <p className="text-balance w-full text-2xl text-slate-800 dark:text-themeWhite md:text-left">
          <span className="tracking-tight">Full-stack developer</span>{" "}
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
            specialized in
          </motion.span>{" "}
          <span className="italic">React & Next.js</span>{" "}
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
            | Building
          </motion.span>{" "}
          <span className="tracking-tight">modern web solutions</span>
        </p>
      </motion.div>
      <motion.div
        className="mt-4 flex w-full items-center justify-center gap-8 bg-themeWhite py-8 pb-0 text-base font-light text-themeBlack dark:bg-themeBlack dark:text-themeWhite"
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
  )
}

export default Intro
