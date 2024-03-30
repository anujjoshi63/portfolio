"use client";
import { motion } from "framer-motion";
import { Ref, forwardRef } from "react";
import WorkExperienceCard from "../elements/WorkExperienceCard";

const WorkExperience = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  const workExperiences = [
    {
      title: "Auto Shop Insights - Freelance",
      oneLineDescription:
        "Simplifies finances and decision making for car shop businesses",
      bullets: [
        "Developed a modern web app using T3 Stack (Next.js, TypeScript, Tailwind, and tRPC), seamlessly managing deployment, database integration, and robust CI/CD pipelines.",
        "Automated complex financial processes, reducing time spent by 80%",
      ],
    },
    {
      title: "KyloApps - Internship",
      oneLineDescription:
        "Brought 4 projects (2 new, 2 existing) to completion",
      bullets: [
        "Developed frontends from Figma designs ensuring client satisfaction. Communicated directly with clients to understand requirements and provide updates.",
        "Enhanced code quality and increased Lighthouse score by 40% using advanced React patterns. Successfully mentored a non-React frontend developer to proficiency.",
      ],
    },
    {
      title: "MIS Software - Freelance",
      oneLineDescription:
        "Revolutionalized a chemical enterprise's operations through automation",
      bullets: [
        "Developed a robust MIS software that manages over 500 inquiries and tracks 300+ sample deliveries monthly, demonstrating strong automation and data management capabilities.",
        "Enhanced operations efficiency, reducing task times by 90% and halving reports creation time.",
      ],
    },
    {
      title: "TechFryDay - Internship",
      oneLineDescription: "Taught programming concepts using Python",
      bullets: [
        "Elevated Python skills of over 40 undergraduates in two intensive workshops through innovative and hands-on teaching methods.",
        "Taught troubleshooting techniques and debugged students' code, cutting trainer interventions by half in a voice recognition workshop.",
      ],
    },
  ];

  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, y: 100, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
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

          <div className="container mx-auto mt-4 flex flex-col flex-wrap gap-8 px-5 md:mt-0">
            {workExperiences.map((experience, index) => (
              <WorkExperienceCard
                key={index}
                title={experience.title}
                oneLineDescription={experience.oneLineDescription}
                bullets={experience.bullets}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
});
WorkExperience.displayName = "WorkExperience";
export default WorkExperience;
