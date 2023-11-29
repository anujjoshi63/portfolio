"use client";
import Card from "@/components/elements/card";
import Link from "next/link";
import { ArrowRight, LinkIcon } from "lucide-react";
import Intro from "@/components/sections/Intro";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section key="1" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-6">
          <Intro />

          <motion.div
            className="mt-4 flex w-full items-center justify-center gap-4 text-lg font-light text-zinc-300 "
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
              <div className="underline underline-offset-4">LinkedIn</div>
            </Link>
            <Link href={"https://github.com/anujjoshi63"} target="_blank">
              <div className="underline underline-offset-4">GitHub</div>
            </Link>
            <Link
              href={"https://www.instagram.com/anuj._.joshi/"}
              target="_blank"
            >
              <div className="underline underline-offset-4">Resume</div>
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
            <div className="space-y-3">
              <h2 className="mt-20 text-4xl font-normal tracking-tight sm:text-3xl md:text-4xl md:font-semibold lg:text-5xl">
                highlights
              </h2>
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
                subtitle="2 enterprise level projects"
                otherData="numerous small gigs"
                imgPath="/favicon.ico"
              />
            </div>
          </motion.div>
        </div>
      </section>
      <motion.div
        className="space-y-3"
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
            <div className="space-y-2">
              <h2 className="text-4xl font-normal tracking-tight sm:text-4xl md:text-5xl md:font-semibold lg:text-6xl">
                skills
              </h2>
            </div>

            <div className="flex w-full flex-wrap gap-4">
              <div className="flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-2 rounded-xl bg-zinc-800 p-6 shadow-xl">
                <h1 className="text-2xl font-semibold">languages</h1>
                <div className="flex flex-col items-start text-lg">
                  <div>TypeScript</div>
                  <div>Python</div>
                  <div>JavaScript</div>
                  <div>SQL</div>
                  <div>HTML/CSS</div>
                </div>
              </div>
              <div className="flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-2 rounded-xl bg-zinc-800 p-6 shadow-xl">
                <h1 className="text-2xl font-semibold">frameworks</h1>
                <div className="flex flex-col items-start text-lg">
                  <div>React</div>
                  <div>Next.js</div>
                  <div>Express</div>
                  <div>Electron</div>
                  {/* <div>React Native</div> */}
                  <div>Node.js</div>
                  {/* <div>and more</div> */}
                </div>
              </div>
              <div className="flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-2 rounded-xl bg-zinc-800 p-6 shadow-xl">
                <h1 className="text-2xl font-semibold">others</h1>
                <div className="flex flex-col items-start text-lg">
                  <div>Git</div>
                  <div>GitHub</div>
                  <div>Figma</div>
                  <div>AWS</div>
                  <div>Linux</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      <motion.div
        className="space-y-3"
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
            <div className="space-y-2">
              <h2 className="text-4xl font-normal tracking-tight sm:text-4xl md:text-5xl md:font-semibold lg:text-6xl">
                projects
              </h2>
            </div>

            <div className="flex w-full flex-wrap gap-4">
              <div className="flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-2 rounded-xl bg-zinc-800 p-6 shadow-xl">
                <h1 className="text-2xl font-semibold">Teensy</h1>
                <div className="flex flex-col items-center text-lg">
                  <div className="max-w-[18ch] flex-1">
                    next level URL shortner with Analytics ✨
                  </div>
                </div>
                <Link
                  className="flex flex-1 items-center underline"
                  href={"https://github.com/shiroyasha9/teensy"}
                >
                  Repository Link
                </Link>
              </div>
              <div className="flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-2 rounded-xl bg-zinc-800 p-6 shadow-xl">
                <h1 className="text-2xl font-semibold">Zeno Stack</h1>
                <div className="flex flex-col items-center text-lg">
                  <div className="max-w-[18ch]">
                    Cross-platform typesafe react boilerplate 💯
                  </div>
                </div>
                <Link
                  className="w-full items-center text-center underline"
                  href={"https://github.com/zeno-oss/zeno"}
                >
                  Repository Link
                </Link>
              </div>
              <div className="flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-2 rounded-xl bg-zinc-800 p-6 shadow-xl">
                <h1 className="text-2xl font-semibold">AutoShopInsights</h1>
                <div className="flex flex-col items-center text-lg">
                  <div className="max-w-[18ch]">
                    One-stop solution for car shop finances 🚀
                  </div>
                </div>
                <Link
                  className="w-full items-center text-center underline"
                  href={"https://autoshopinsights.com/"}
                >
                  Deployment URL
                </Link>
              </div>
            </div>
            <div className="flex w-full  justify-end">
              <div className="flex gap-2 rounded-xl bg-zinc-800 px-3 py-1 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                My work <ArrowRight fontSize={"1rem"} />
              </div>
            </div>
          </div>
        </section>{" "}
      </motion.div>{" "}
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <section key="4" className="w-full py-12">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-4xl font-normal tracking-tight sm:text-4xl md:text-5xl md:font-semibold lg:text-6xl">
                work experience
              </h2>
            </div>
            {/* <div className="flex flex-col w-full gap-4 flex-wrap">
						<div className="flex flex-col items-center shadow-xl rounded-xl p-6 gap-2 flex-1 bg-zinc-800 min-w-[15rem] w-full">
							<h1 className="text-2xl font-semibold">KyloApps</h1>
							<div className="flex flex-col items-start text-lg mt-2">
								<div>TypeScript</div>
								<div>Python</div>
								<div>JavaScript</div>
								<div>SQL</div>
								<div>HTML/CSS</div>
							</div>
						</div>
						<div className="flex flex-col items-center shadow-xl rounded-xl p-6 gap-2 flex-1 bg-zinc-800 min-w-[15rem] w-full">
							<h1 className="text-2xl font-semibold">
								TechFryDay
							</h1>
							<div className="flex flex-col items-start text-lg mt-2">
								<div>React</div>
								<div>Next.js</div>
								<div>Express</div>
								<div>Electron</div>
								<div>React Native</div>
								<div>Node.js</div>
								<div>and more</div>
							</div>
						</div>
						<div className="flex flex-col items-center shadow-xl rounded-xl p-6 gap-2 flex-1 bg-zinc-800 min-w-[15rem] w-full">
							<h1 className="text-2xl font-semibold">
								Freelance
							</h1>
							<div className="flex flex-col items-start text-lg mt-2">
								<div>Git</div>
								<div>GitHub</div>
								<div>Figma</div>
								<div>AWS</div>
								<div>Linux</div>
							</div>
						</div>
					</div> */}
            <div className="container mx-auto mt-4 flex flex-wrap px-5 md:mt-0">
              <motion.div
                viewport={{ once: true }}
                className="space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 1,
                }}
              >
                {" "}
                <div className="relative mx-auto flex pb-20 pt-10 sm:items-center md:w-2/3">
                  <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-gray-300"></div>
                  </div>
                  <div className="relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-500 text-sm text-white sm:mt-0 ">
                    1
                  </div>
                  <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
                    <div className="hidden h-24 w-24 flex-shrink-0 items-center justify-center rounded-full text-indigo-100 md:inline-flex">
                      {/* Role: Dev */}
                    </div>
                    <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                      <h2 className="text-3xl font-medium tracking-tight text-zinc-300">
                        Auto Shop Insights - Freelance
                      </h2>
                      <p className="text-lg leading-relaxed">
                        simplifies all finances and decision making for car shop
                        businesses
                      </p>
                      <p className="mt-4 text-lg leading-relaxed">
                        developed a modern web app using T3 Stack (Next.js,
                        TypeScript, Tailwind, and tRPC), seamlessly managing
                        deployment, database integration, and robust CI/CD
                        pipelines.
                      </p>
                      <p className="mt-4 text-lg leading-relaxed">
                        Impact: automated complex financial processes, reducing
                        time spent by 80%
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                className="space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 1,
                }}
              >
                {" "}
                <div className="relative mx-auto flex pb-20 sm:items-center md:w-2/3">
                  <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-gray-300"></div>
                  </div>
                  <div className="relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-500 text-sm text-white sm:mt-0 ">
                    2
                  </div>
                  <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
                    <div className="hidden h-24 w-24 flex-shrink-0 items-center justify-center rounded-full text-indigo-100 md:inline-flex">
                      {/* Role: Dev */}
                    </div>
                    <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                      <h2 className="mb-1 text-3xl font-medium tracking-tight text-zinc-300">
                        KyloApps - Internship
                      </h2>
                      <p className="text-lg leading-relaxed">
                        Brought 4 projects (2 new, 2 existing) to completion.
                        Quickly got up to speed by learning new technologies,
                        showing off my versatility
                      </p>
                      <p className="mt-4 text-lg leading-relaxed">
                        Developed frontends from Figma, ensuring client
                        satisfaction. Integrated robust dev and communication,
                        enhancing team & client relations.
                      </p>
                      <p className="mt-4 text-lg leading-relaxed">
                        Enhanced code quality and increased Lighthouse score by
                        40% using advanced React techniques. Successfully
                        mentored a non-React frontend developer to proficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                className="space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 1,
                }}
              >
                {" "}
                <div className="relative mx-auto flex pb-20 sm:items-center md:w-2/3">
                  <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-gray-300"></div>
                  </div>
                  <div className="relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-500 text-sm text-white sm:mt-0 ">
                    3
                  </div>
                  <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
                    <div className="hidden h-24 w-24 flex-shrink-0 items-center justify-center rounded-full text-indigo-100 md:inline-flex">
                      {/* Role: Trainer */}
                    </div>
                    <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                      <h2 className="mb-1 text-3xl font-medium tracking-tight text-zinc-300">
                        TechFryDay - Internship
                      </h2>
                      <p className="text-lg leading-relaxed">
                        Elevated Python skills of over 40 undergraduates,
                        achieving a 90% positive feedback rate in two intensive
                        workshops through innovative teaching methods.
                      </p>
                      <p className="mt-4 text-lg leading-relaxed">
                        Addressed student challenges in a voice recognition
                        workshop through expert troubleshooting, cutting trainer
                        interventions by half
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                className="space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 1,
                }}
              >
                {" "}
                <div className="relative mx-auto flex pb-10 sm:items-center md:w-2/3">
                  <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-gray-300"></div>
                  </div>
                  <div className="relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-500 text-sm text-white sm:mt-0 ">
                    4
                  </div>
                  <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
                    <div className="hidden h-24 w-24 flex-shrink-0 items-center justify-center rounded-full text-indigo-100 md:inline-flex">
                      {/* Role: Dev */}
                    </div>
                    <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                      <h2 className="mb-1 text-3xl font-medium tracking-tight text-zinc-300">
                        MIS Software - Freelance
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed">
                        Developed a sophisticated MIS software, revolutionizing
                        a chemical enterprise&apos;s operations through
                        automation.
                      </p>
                      <p className="mt-4 text-lg leading-relaxed">
                        The app manages over 500 inquiries and tracks 300+
                        sample deliveries monthly, demonstrating strong
                        automation and data management capabilities.
                      </p>
                      <p className="mt-4 text-lg leading-relaxed">
                        Impact: Enhanced process efficiency, reducing task times
                        by 90% and halving report creation time, significantly
                        boosting operational excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
      {/* <section key="5" className="w-full py-12 ">
				<div className="container grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
					<div className="space-y-3">
						<h2 className="lg:text-5xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
							sold yet? ask GPT about me
						</h2>
					</div>

					<div className="flex flex-col-reverse w-full gap-4 flex-wrap bg-zinc-800 rounded-lg min-h-fit h-[10ch]">
						<div className="bg-zinc-500 m-3 rounded-full py-2">
							asd
						</div>
					</div>
				</div>
			</section> */}
      <motion.section key="6" className="w-full py-20">
        <div className="container grid w-full items-center justify-center gap-4 border-t border-zinc-800 text-center md:px-6 lg:gap-10">
          <div className="mt-10 space-y-2">
            <h2 className=" text-4xl font-medium tracking-tight md:text-5xl md:font-semibold lg:text-5xl">
              let&apos;s get in <span className="cursor-pointer"> touch</span>
            </h2>
          </div>
          <div className="flex w-full flex-1 flex-col justify-evenly text-xl md:flex-row">
            <Link
              className="underline underline-offset-2"
              href={"https://www.linkedin.com/in/thejoshi/"}
              target="_blank"
            >
              <div className="mx-2 flex flex-1 items-center gap-1 align-middle">
                LinkedIn
                <LinkIcon width={14} color="gray" className="md:hidden" />
              </div>
            </Link>
            <Link
              className="underline underline-offset-2"
              href={"mailto:ajosh104@asu.edu"}
              target="_blank"
            >
              <div className="mx-2 flex flex-1 items-center gap-1 align-middle">
                Email
                <LinkIcon width={14} color="gray" className="md:hidden" />
              </div>
            </Link>
            <Link
              className="underline underline-offset-2"
              href={"https://github.com/anujjoshi63"}
              target="_blank"
            >
              <div className="mx-2 flex flex-1 items-center gap-1 align-middle">
                GitHub
                <LinkIcon width={14} color="gray" className="md:hidden" />
              </div>
            </Link>
            <Link
              className="underline underline-offset-2"
              href={"https://twitter.com/anujjosh"}
              target="_blank"
            >
              <div className="mx-2 flex flex-1 items-center gap-1 align-middle">
                Twitter
                <LinkIcon width={14} color="gray" className="md:hidden" />
              </div>
            </Link>
            <Link
              className="underline underline-offset-2"
              href={"https://instagram.com/anuj._.joshi/"}
              target="_blank"
            >
              <div className="mx-2 flex flex-1 items-center gap-1 align-middle">
                Instagram
                <LinkIcon width={14} color="gray" className="md:hidden" />
              </div>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
