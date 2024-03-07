"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        type: "tween",
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <section key="projects" className="w-full py-12">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="text-4xl font-normal tracking-tight sm:text-3xl md:text-4xl md:font-semibold lg:text-5xl">
            projects
          </div>

          <div className="flex w-full flex-wrap gap-4">
            <div className="ease flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-3 rounded-xl border border-zinc-400 p-6 shadow-xl transition-all duration-300 hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:drop-shadow-[0_0_2px_hsl(240,0%,40%)] md:hover:-translate-y-1">
              <div className="text-2xl font-semibold">Teensy</div>
              <div className="flex flex-col items-center text-lg">
                <div className="max-w-[18ch] flex-1">
                  URL Shortener with Analytics ✨
                </div>
              </div>
              <Link href={"https://teensy.tech"} target="_blank">
                <div className="flex items-center justify-center">
                  Website Link <ArrowUpRight size={16} color="gray" />
                </div>
              </Link>
            </div>
            <div className="ease flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-3 rounded-xl border border-zinc-400 p-6 shadow-xl transition-all duration-300 hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:drop-shadow-[0_0_2px_hsl(240,0%,40%)] md:hover:-translate-y-1">
              <div className="text-2xl font-semibold">Zeno Stack</div>
              <div className="flex flex-col items-center text-lg">
                <div className="max-w-[18ch]">
                  Cross-platform Typesafe React Boilerplate 💯
                </div>
              </div>
              <Link
                className="w-full items-center text-center"
                href={"https://github.com/zeno-oss/zeno"}
                target="_blank"
              >
                <div className="flex items-center justify-center">
                  Repository Link <ArrowUpRight size={16} color="gray" />
                </div>
              </Link>
            </div>
            <div className="ease flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-3 rounded-xl border border-zinc-400 p-6 shadow-xl transition-all duration-300 hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:drop-shadow-[0_0_2px_hsl(240,0%,40%)] md:hover:-translate-y-1">
              <div className="text-2xl font-semibold">AutoShopInsights</div>
              <div className="flex flex-col items-center text-lg">
                <div className="max-w-[18ch]">
                  One-stop solution for car shop finances. 🚀
                </div>
              </div>
              <Link
                className="w-full items-center text-center"
                href={"https://autoshopinsights.com/"}
                target="_blank"
              >
                <div className="flex items-center justify-center">
                  Website Link <ArrowUpRight size={16} color="gray" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
