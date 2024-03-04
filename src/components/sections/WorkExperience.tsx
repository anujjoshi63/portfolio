"use client";
import { motion } from "framer-motion";
import { Ref, forwardRef } from "react";
import WorkExperienceCard from "../elements/WorkExperienceCard";

const WorkExperience = forwardRef((_, ref: Ref<HTMLDivElement>) => {
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
        <div className="h-[1px] w-1/3 bg-gradient-to-r from-[hsl(240,10%,100%)] via-[hsl(240,10%,70%)] to-[hsl(240,10%,100%)] dark:from-[hsl(240,10%,0%)] dark:via-[hsl(240,10%,20%)] dark:to-[hsl(240,10%,0%)]"></div>
      </div>
      <section key="experience" className="w-full py-12" ref={ref}>
        <div className="container grid items-center justify-center gap-4 px-4  md:px-6 lg:gap-10">
          <div className="space-y-2">
            <div className="text-center text-4xl font-normal tracking-tight sm:text-3xl md:text-4xl md:font-semibold lg:text-5xl">
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
          <div className="container mx-auto mt-4 flex flex-col flex-wrap gap-8 px-5 md:mt-0">
            <WorkExperienceCard
              title="Auto Shop Insights - Freelance"
              oneLineDescription="simplifies finances and decision making for car shop businesses"
              bullets={[
                "developed a modern web app using T3 Stack (Next.js, TypeScript, Tailwind, and tRPC), seamlessly managing deployment, database integration, and robust CI/CD pipelines.",
                "Impact: automated complex financial processes, reducing time spent by 80%",
              ]}
            />
            {/* <motion.div
              viewport={{ once: true }}
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "tween",
                duration: 1.5,
              }}
            >
              <div className="relative mx-auto flex bg-red-300 md:w-2/3">
                <div className="flex flex-col">
                  <div className="text-3xl font-medium tracking-tight dark:text-[hsl(240,11%,86%)]">
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
                    Impact: automated complex financial processes, reducing time
                    spent by 80%
                  </p>
                </div>
              </div>
            </motion.div> */}
            <WorkExperienceCard
              title="KyloApps - Internship"
              oneLineDescription="brought 4 projects (2 new, 2 existing) to completion"
              bullets={[
                "Developed frontends from Figma, ensuring client satisfaction. Integrated robust dev and communication, enhancing team & client relations.",
                "Enhanced code quality and increased Lighthouse score by 40% using advanced React techniques. Successfully mentored a non-React frontend developer to proficiency.",
              ]}
            />
            {/* <motion.div
              viewport={{ once: true }}
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "tween",
                duration: 1.5,
              }}
            >
              <div className="relative mx-auto flex bg-red-300 md:w-2/3">
                <div className="flex flex-col">
                  <div className="mb-1 text-3xl font-medium tracking-tight dark:text-[hsl(240,11%,86%)]">
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
                    Enhanced code quality and increased Lighthouse score by 40%
                    using advanced React techniques. Successfully mentored a
                    non-React frontend developer to proficiency.
                  </p>
                </div>
              </div>
            </motion.div> */}
            {/* <motion.div
              viewport={{ once: true }}
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "tween",
                duration: 1.5,
              }}
            >
              <div className="relative mx-auto flex bg-red-300 md:w-2/3">
                <div className="flex flex-col">
                  <div className="mb-1 text-3xl font-medium tracking-tight dark:text-[hsl(240,11%,86%)]">
                    TechFryDay - Internship
                  </div>
                  <p className="text-lg leading-relaxed">
                    Elevated Python skills of over 40 undergraduates, achieving
                    a 90% positive feedback rate in two intensive workshops
                    through innovative teaching methods.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed">
                    Addressed student challenges in a voice recognition workshop
                    through expert troubleshooting, cutting trainer
                    interventions by half
                  </p>
                </div>
              </div>
            </motion.div> */}
            {/* <motion.div
              viewport={{ once: true }}
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "tween",
                duration: 1.5,
              }}
            >
              <div className="relative mx-auto flex bg-red-300 md:w-2/3">
                <div className="flex flex-col">
                  <div className="mb-1 text-3xl font-medium tracking-tight dark:text-[hsl(240,11%,86%)]">
                    MIS Software - Freelance
                  </div>
                  <p className="mt-4 text-lg leading-relaxed">
                    Developed a sophisticated MIS software, revolutionizing a
                    chemical enterprise&apos;s operations through automation.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed">
                    The app manages over 500 inquiries and tracks 300+ sample
                    deliveries monthly, demonstrating strong automation and data
                    management capabilities.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed">
                    Impact: Enhanced process efficiency, reducing task times by
                    90% and halving report creation time, significantly boosting
                    operational excellence.
                  </p>
                </div>
              </div>
            </motion.div> */}
            <WorkExperienceCard
              title="MIS Software - Freelance"
              oneLineDescription="revolutionizing a chemical enterprise's operations through automation"
              bullets={[
                "Developed a sophisticated MIS software, revolutionizing a chemical enterprise's operations through automation.",
                "The app manages over 500 inquiries and tracks 300+ sample deliveries monthly, demonstrating strong automation and data management capabilities.",
                "Impact: Enhanced process efficiency, reducing task times by 90% and halving report creation time, significantly boosting operational excellence.",
              ]}
            />
            <WorkExperienceCard
              title="TechFryDay - Internship"
              oneLineDescription="Taught programming using Python"
              bullets={[
                "Elevated Python skills of over 40 undergraduates, achieving a 90% positive feedback rate in two intensive workshops through innovative teaching methods.",
                "Addressed student challenges in a voice recognition workshop through expert troubleshooting, cutting trainer interventions by half.",
              ]}
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
});
WorkExperience.displayName = "WorkExperience";
export default WorkExperience;
