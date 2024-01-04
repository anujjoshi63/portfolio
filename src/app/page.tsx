"use client";
import Card from "@/components/elements/card";
import Footer from "@/components/sections/Footer";
import Intro from "@/components/sections/Intro";
import WorkExperience from "@/components/sections/WorkExperience";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen">
      <section key="1" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-6">
          <Intro />

          <motion.div
            className="mt-4 flex w-full items-center justify-center gap-4 text-lg font-light text-[hsl(240,11%,86%)] "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
            >
              <div className="flex items-center transition-all duration-300 hover:text-[hsl(240,0%,95%)]  hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)]">
                LinkedIn <ArrowUpRight width={16} color="gray" />
              </div>
            </Link>
            <Link href={"https://github.com/anujjoshi63"} target="_blank">
              <div className="flex items-center transition-all duration-300 hover:text-[hsl(240,0%,95%)]  hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)]">
                GitHub <ArrowUpRight width={16} color="gray" />
              </div>
            </Link>
            <Link href={"https://teensy.tech/anujresume"} target="_blank">
              <div className="flex items-center transition-all duration-300 hover:text-[hsl(240,0%,95%)]  hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)]">
                Resume <ArrowUpRight width={16} color="gray" />
              </div>
            </Link>
          </motion.div>
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 20,
              delay: 0.5,
            }}
            viewport={{ once: true }}
          >
            <div className="mt-20 py-8 text-4xl font-normal tracking-tight sm:text-3xl md:text-4xl md:font-semibold lg:text-5xl">
              highlights
            </div>
            <div className="flex w-full flex-col flex-wrap gap-8 md:flex-row">
              <Card
                title="Grad student, ASU"
                subtitle="MS in Computer Science"
                otherData="Aug 2023 - May 2025"
                imgPath="/favicon.ico"
              />
              <Card
                title="Zeno Stack"
                subtitle="Cross-Platform Monorepo"
                otherData="100+ stars on GitHub"
                imgPath="/favicon.ico"
              />
              <Card
                title="Freelance"
                subtitle="2 enterprise projects"
                otherData="and numerous other gigs"
                imgPath="/favicon.ico"
              />
            </div>
          </motion.div>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <section key="2" className="w-full py-12">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="text-4xl font-normal tracking-tight sm:text-4xl md:text-5xl md:font-semibold lg:text-6xl">
              skills
            </div>

            <div className="flex w-full flex-wrap gap-4">
              <div className="flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 p-6 shadow-xl">
                <div className="text-2xl font-semibold">languages</div>
                <div className="flex flex-col items-start text-lg">
                  <div>TypeScript</div>
                  <div>Python</div>
                  <div>JavaScript</div>
                  <div>SQL</div>
                  <div>HTML/CSS</div>
                </div>
              </div>
              <div className="flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 p-6 shadow-xl">
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
                    <HoverCardContent className="w-fit rounded-xl border-zinc-700 bg-zinc-900">
                      I know, I know. It&apos;s a runtime.
                    </HoverCardContent>
                  </HoverCard>

                  {/* <div>Node.js</div> */}
                  {/* <div>and more</div> */}
                </div>
              </div>
              <div className="flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 p-6 shadow-xl">
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
                    <HoverCardContent className="w-fit rounded-xl  border-zinc-700 bg-zinc-900">
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <section key="3" className="w-full py-12">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="text-4xl font-normal tracking-tight sm:text-4xl md:text-5xl md:font-semibold lg:text-6xl">
              projects
            </div>

            <div className="flex w-full flex-wrap gap-4">
              <div className="ease flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-800 p-6 shadow-xl transition-all duration-300 hover:border-zinc-500 hover:drop-shadow-[0_0_2px_hsl(240,0%,40%)] md:hover:-translate-y-1">
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
              <div className="ease flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-800 p-6 shadow-xl transition-all duration-300 hover:border-zinc-500 hover:drop-shadow-[0_0_2px_hsl(240,0%,40%)] md:hover:-translate-y-1">
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
              <div className="ease flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-800 p-6 shadow-xl transition-all duration-300 hover:border-zinc-500 hover:drop-shadow-[0_0_2px_hsl(240,0%,40%)] md:hover:-translate-y-1">
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
      <WorkExperience />
      {/* <section key="5" className="w-full py-12 ">
				<div className="container grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
					<div className="space-y-3">
						<div className="lg:text-5xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
							sold yet? ask GPT about me
						</div>
					</div>

					<div className="flex flex-col-reverse w-full gap-4 flex-wrap bg-zinc-800 rounded-lg min-h-fit h-[10ch]">
						<div className="bg-zinc-500 m-3 rounded-full py-2">
							asd
						</div>
					</div>
				</div>
			</section> */}
      <Footer />
    </div>
  );
}
