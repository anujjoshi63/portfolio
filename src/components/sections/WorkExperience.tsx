import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
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
      <div className="flex w-full justify-center">
        <div className="h-[1px] w-1/3 bg-gradient-to-r from-[hsl(240,10%,0%)] via-[hsl(240,10%,20%)] to-[hsl(240,10%,0%)]"></div>
      </div>
      <section key="experience" className="w-full py-12">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-2">
            <div className="text-4xl font-normal tracking-tight sm:text-4xl md:text-5xl md:font-semibold lg:text-6xl">
              work experience
            </div>
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
                duration: 1.5,
              }}
            >
              <div className="relative mx-auto flex pb-20 pt-10 sm:items-center md:w-2/3">
                <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-zinc-400"></div>
                </div>
                <div className="relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-500 text-sm text-white sm:mt-0">
                  1
                </div>
                <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
                  <div className="hidden h-24 w-24 flex-shrink-0 items-center justify-center rounded-full text-indigo-100 md:inline-flex">
                    {/* Role: Dev */}
                  </div>
                  <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                    <div className="text-3xl font-medium tracking-tight text-[hsl(240,11%,86%)]">
                      Auto Shop Insights - Freelance
                    </div>
                    <p className="text-lg leading-relaxed">
                      simplifies finances and decision making for car shop
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
                duration: 1.5,
              }}
            >
              <div className="relative mx-auto flex pb-20 sm:items-center md:w-2/3">
                <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-zinc-400"></div>
                </div>
                <div className="relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-500 text-sm text-white sm:mt-0">
                  2
                </div>
                <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
                  <div className="hidden h-24 w-24 flex-shrink-0 items-center justify-center rounded-full text-indigo-100 md:inline-flex">
                    {/* Role: Dev */}
                  </div>
                  <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                    <div className="mb-1 text-3xl font-medium tracking-tight text-[hsl(240,11%,86%)]">
                      KyloApps - Internship
                    </div>
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
                      40% using advanced React techniques. Successfully mentored
                      a non-React frontend developer to proficiency.
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
                duration: 1.5,
              }}
            >
              <div className="relative mx-auto flex pb-20 sm:items-center md:w-2/3">
                <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-zinc-400"></div>
                </div>
                <div className="relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-500 text-sm text-white sm:mt-0 ">
                  3
                </div>
                <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
                  <div className="hidden h-24 w-24 flex-shrink-0 items-center justify-center rounded-full text-indigo-100 md:inline-flex">
                    {/* Role: Trainer */}
                  </div>
                  <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                    <div className="mb-1 text-3xl font-medium tracking-tight text-[hsl(240,11%,86%)]">
                      TechFryDay - Internship
                    </div>
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
                duration: 1.5,
              }}
            >
              <div className="relative mx-auto flex pb-10 sm:items-center md:w-2/3">
                <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-zinc-400"></div>
                </div>
                <div className="relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-500 text-sm text-white sm:mt-0 ">
                  4
                </div>
                <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
                  <div className="hidden h-24 w-24 flex-shrink-0 items-center justify-center rounded-full text-indigo-100 md:inline-flex">
                    {/* Role: Dev */}
                  </div>
                  <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                    <div className="mb-1 text-3xl font-medium tracking-tight text-[hsl(240,11%,86%)]">
                      MIS Software - Freelance
                    </div>
                    <p className="mt-4 text-lg leading-relaxed">
                      Developed a sophisticated MIS software, revolutionizing a
                      chemical enterprise&apos;s operations through automation.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">
                      The app manages over 500 inquiries and tracks 300+ sample
                      deliveries monthly, demonstrating strong automation and
                      data management capabilities.
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
  );
};

export default WorkExperience;
