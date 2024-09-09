"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Ref } from "react";
import { forwardRef } from "react";

const Skills = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <motion.div
      id="skills_section"
      initial={{ opacity: 0, y: 100, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 50,
      }}
      viewport={{ once: true }}
    >
      <section key="skills" className="w-full py-12">
        <div className="container flex w-full flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="text-4xl font-normal tracking-tight sm:text-3xl md:text-4xl md:font-semibold lg:text-5xl">
            skills
          </div>

          <div className="flex w-full flex-wrap justify-center gap-8">
            <div className="flex w-fit min-w-[14rem]  flex-col items-center gap-2 rounded-xl border border-zinc-400 bg-themeWhite p-6 shadow-xl dark:border-zinc-700 dark:bg-zinc-800">
              <div className="w-full text-left text-2xl font-semibold">
                languages
              </div>
              <div className="flex w-full flex-col items-start text-lg">
                <div className="w-full text-left">TypeScript</div>
                <div className="w-full text-left">Python</div>
                <div className="w-full text-left">JavaScript</div>
                <div className="w-full text-left">SQL</div>
                <div className="w-full text-left">HTML/CSS</div>
              </div>
            </div>
            <div className="flex w-fit min-w-[14rem]  flex-col items-center gap-2 rounded-xl border border-zinc-400 bg-themeWhite p-6 shadow-xl dark:border-zinc-700 dark:bg-zinc-800">
              <div className="w-full text-left text-2xl font-semibold">
                frameworks
              </div>
              <div className="flex w-full flex-col items-start text-lg">
                <div className="w-full text-left">React</div>
                <div className="w-full text-left">Next.js</div>
                <div className="w-full text-left">Express</div>
                <div className="w-full text-left">Electron</div>
                {/* <div className="w-full text-left">React Native</div> */}
                <HoverCard openDelay={0} closeDelay={250}>
                  <HoverCardTrigger className="cursor-default">
                    Node.js
                  </HoverCardTrigger>
                  <HoverCardContent className="w-fit rounded-xl border-zinc-400 bg-themeWhite px-4 py-2 dark:border-zinc-700 dark:bg-zinc-900">
                    I know, I know. It&apos;s a runtime.
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
            <div className="flex w-fit min-w-[14rem]  flex-col items-center gap-2 rounded-xl border border-zinc-400 bg-themeWhite p-6 shadow-xl dark:border-zinc-700 dark:bg-zinc-800">
              <div className="w-full text-left text-2xl font-semibold">
                others
              </div>
              <div className="flex w-full flex-col items-start text-lg">
                <div className="w-full text-left">Figma</div>
                <div className="w-full text-left">AWS</div>
                <div className="w-full text-left">Linux</div>
                <div className="flex w-full text-left">
                  Git &
                  <div>
                    <HoverCard openDelay={0} closeDelay={250}>
                      <HoverCardTrigger>
                        <div className="cursor-default">&nbsp;GitHub</div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-fit rounded-xl border-zinc-400 bg-themeWhite px-4 py-2 dark:border-zinc-700 dark:bg-zinc-900">
                        <Link
                          href={"https://github.com/anujjoshi63"}
                          className="underline"
                          target="_blank"
                        >
                          Checkout my github here
                        </Link>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
});
Skills.displayName = "Skills";

export default Skills;
