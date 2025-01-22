"use client"

import { motion } from "framer-motion"

import ProjectCard from "../elements/ProjectCard"

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 50,
      }}
      viewport={{ once: true }}
    >
      <section key="projects" className="w-full py-12">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="bg-gradient-to-b from-slate-800 via-slate-800 to-slate-900 bg-clip-text py-2 text-4xl font-normal tracking-tight text-transparent sm:text-3xl md:text-4xl md:font-semibold lg:text-5xl">
            featured projects
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ProjectCard
              title="Dope Control"
              description="Dopamine management for peak productivity 🧠"
              link="https://dc.anujjoshi.me"
            />
            <ProjectCard
              title="Teensy"
              description="URL Shortener with Analytics ✨"
              link="https://teensy.tech"
            />
            <ProjectCard
              title="AutoShopInsights"
              description="One-stop solution for car shop finances. 🚀"
              link="https://autoshopinsights.com/"
            />
            <ProjectCard
              title="Zeno Stack"
              description="Cross-platform Typesafe React Boilerplate 💯"
              link="https://github.com/zeno-oss/zeno"
            />
            <ProjectCard
              github
              title="More"
              description="Majority of my projects are open-sourced on GitHub!"
              link="https://github.com/anujjoshi63"
            />
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Projects
