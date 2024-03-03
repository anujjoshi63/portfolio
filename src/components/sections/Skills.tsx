"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import Link from "next/link";
import { Ref, forwardRef } from "react";

const Skills = forwardRef((_, ref: Ref<HTMLDivElement>) => {
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
      <section key="skills" className="w-full py-12" ref={ref}>
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="text-4xl font-normal tracking-tight sm:text-4xl md:text-5xl md:font-semibold lg:text-6xl">
            skills
          </div>

          <div className="flex w-full flex-wrap gap-4">
            <div className="flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-2 rounded-xl border border-zinc-700 bg-themeWhite p-6 shadow-xl dark:bg-zinc-800">
              <div className="text-2xl font-semibold">languages</div>
              <div className="flex flex-col items-start text-lg">
                <div>TypeScript</div>
                <div>Python</div>
                <div>JavaScript</div>
                <div>SQL</div>
                <div>HTML/CSS</div>
              </div>
            </div>
            <div className="flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-2 rounded-xl border border-zinc-700 bg-themeWhite p-6 shadow-xl dark:bg-zinc-800">
              <div className="text-2xl font-semibold">frameworks</div>
              <div className="flex flex-col items-start text-lg">
                <div>React</div>
                <div>Next.js</div>
                <div>Express</div>
                <div>Electron</div>
                {/* <div>React Native</div> */}
                <HoverCard openDelay={0} closeDelay={250}>
                  <HoverCardTrigger className="cursor-default">
                    Node.js
                  </HoverCardTrigger>
                  <HoverCardContent className="w-fit rounded-xl border-zinc-700 bg-themeWhite dark:bg-zinc-900">
                    I know, I know. It&apos;s a runtime.
                  </HoverCardContent>
                </HoverCard>

                {/* <div>Node.js</div> */}
                {/* <div>and more</div> */}
              </div>
            </div>
            <div className="flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-2 rounded-xl border border-zinc-700 bg-themeWhite p-6 shadow-xl dark:bg-zinc-800">
              <div className="text-2xl font-semibold">others</div>
              <div className="flex flex-col items-start text-lg">
                <div>Figma</div>
                <div>AWS</div>
                <div>Linux</div>
                <div>Git</div>
                <HoverCard openDelay={0} closeDelay={250}>
                  <HoverCardTrigger>
                    <div className="cursor-default">GitHub</div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-fit rounded-xl border-zinc-700 bg-themeWhite dark:bg-zinc-900">
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
      </section>
    </motion.div>
  );
});
Skills.displayName = "Skills";

export default Skills;
