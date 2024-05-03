"use client";
import { motion } from "framer-motion";
import { Ref, forwardRef } from "react";
import WorkExperienceCard from "../elements/WorkExperienceCard";

const WorkExperience = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  const workExperiences: {
    title: string;
    url?: string;
    oneLineDescription: string;
    bullets: JSX.Element[] | string[];
  }[] = [
    {
      title: "AutoShopInsights - Freelance Project",
      url: "https://autoshopinsights.com/",
      oneLineDescription:
        "Simplifying financial management and decision-making for auto repair businesses",
      bullets: [
        <span>
          Engineered a <b>high performance</b> web app using{" "}
          <b title="t3 stack by theo">
            Next.js, TypeScript, Tailwind,{" "}
            <span className="font-normal">and</span> tRPC
          </b>
          , simplifying financial processes and providing valuable insights to
          shop owners.
        </span>,
        <span>
          Implemented <b>secure payment</b> processing with <b>Stripe</b>,
          designed an intuitive UI, and <b>optimized performance</b> by
          leveraging <b>Planetscale</b> for the database and <b>Vercel</b> for
          hosting and CI/CD.
        </span>,
        <span>
          Automated complex financial tasks, <b>reducing manual work by 80%</b>{" "}
          and empowering shop owners to make <b>data-driven decisions</b>.
        </span>,
      ],
    },
    {
      title: "KyloApps - Software Development Internship",
      oneLineDescription:
        "Transforming user experiences through effective collaboration and technical fluency",
      bullets: [
        <span>
          Spearheaded development and deployment of{" "}
          <b>4 enterprise web apps </b>
          using <b>React, TypeScript</b>, and <b>Material-UI</b>, enhancing user
          experience and improving performance.
        </span>,
        <span>
          Optimized code quality and <b>boosted Lighthouse score by 40% 🚀</b>{" "}
          by implementing advanced React patterns. <b>Successfully mentored</b>{" "}
          a non-React frontend developer to proficiency, promoting knowledge
          sharing and team growth.
        </span>,
      ],
    },
    {
      title: "MIS Software - Freelance Project",
      oneLineDescription:
        "Revolutionalized a chemical enterprise's operations through automation",
      bullets: [
        <span>
          Engineered a robust MIS software using <b>React, Express</b>, and{" "}
          <b>Electron</b>, efficiently managing over <b>500 inquiries</b> and
          tracking <b>300+ sample deliveries</b> monthly, demonstrating strong{" "}
          automation and data management capabilities.
        </span>,
        <span>
          Streamlined operations by <b>reducing task times by 90%</b> and{" "}
          <b>cutting reports creation time in half</b>, significantly enhancing
          efficiency and productivity.
        </span>,
      ],
    },
    {
      title: "TechFryDay - Assistant Instructor",
      oneLineDescription: "Taught programming concepts using Python",
      bullets: [
        <span>
          <b>Taught Python</b> programming <b>to 40+ undergraduates</b> in two
          intensive workshops, employing engaging, hands-on teaching methods
          that garnered <b>90% positive feedback</b>.
        </span>,
        <span>
          Taught troubleshooting techniques and debugged students' code in a
          voice recognition workshop,{" "}
          <b>reducing trainer interventions by 50%</b> and fostering a more
          independent learning environment.
        </span>,
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
      <section key="experience" className="w-full py-12" ref={ref}>
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
          <div className="space-y-2">
            <div className="text-center text-4xl font-normal tracking-tight sm:text-3xl md:text-4xl md:font-semibold lg:text-5xl">
              work
            </div>
          </div>

          <div className="container mx-auto mt-4 flex flex-col flex-wrap gap-8 px-5 md:mt-0">
            {workExperiences.map((experience, index) => (
              <WorkExperienceCard
                url={experience.url}
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
