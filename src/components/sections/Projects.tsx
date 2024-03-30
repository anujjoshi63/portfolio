"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  linkText: string;
};

const ProjectCard = ({
  title,
  description,
  link,
  linkText,
}: ProjectCardProps) => (
  <div className="ease flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-3 rounded-xl border border-zinc-400 p-6 shadow-xl transition-all duration-300 hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:drop-shadow-[0_0_2px_hsl(240,0%,40%)] md:hover:-translate-y-1">
    <div className="text-2xl font-semibold">{title}</div>
    <div className="flex flex-col items-center text-lg">
      <div className="max-w-[18ch] flex-1">{description}</div>
    </div>
    <Link href={link} target="_blank">
      <div className="flex items-center justify-center">
        {linkText} <ArrowUpRight size={16} color="gray" />
      </div>
    </Link>
  </div>
);

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
          <div className="text-4xl font-normal tracking-tight sm:text-3xl md:text-4xl md:font-semibold lg:text-5xl">
            projects
          </div>

          <div className="flex w-full flex-wrap gap-4">
            <ProjectCard
              title="Teensy"
              description="URL Shortener with Analytics ✨"
              link="https://teensy.tech"
              linkText="Website Link"
            />
            <ProjectCard
              title="Zeno Stack"
              description="Cross-platform Typesafe React Boilerplate 💯"
              link="https://github.com/zeno-oss/zeno"
              linkText="Repository Link"
            />
            <ProjectCard
              title="AutoShopInsights"
              description="One-stop solution for car shop finances. 🚀"
              link="https://autoshopinsights.com/"
              linkText="Website Link"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
