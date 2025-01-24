"use client"

import { forwardRef } from "react"
import type { Ref } from "react"
import { motion } from "framer-motion"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import WorkExperienceCard from "../elements/WorkExperienceCard"

const workExperiences: {
  title: string
  url?: string
  oneLineDescription: string
  bullets: JSX.Element[] | string[]
}[] = [
  {
    title: "HireBuddy - Software Engineer Intern",
    url: "https://hirebuddy.ai/",
    oneLineDescription:
      "AI based Resume improving and assessing platform for job seekers and recruiters",
    bullets: [
      <span>
        Built an <b>AI resume analyzer</b> using{" "}
        <b>Next.js, TypeScript, and OpenAI</b> that{" "}
        <b>reduced screening time by 93%</b>, implementing advanced{" "}
        <b>prompt engineering</b> for intelligent matching.
      </span>,
      <span>
        Designed a <b>scalable serverless architecture</b> using{" "}
        <b>AWS Lambda, S3, and API Gateway</b>, handling{" "}
        <b>1000+ daily resumes</b> with <b>99.9% uptime</b>.
      </span>,
      <span>
        Established <b>code quality guidelines</b> and{" "}
        <b>automation workflows</b>, while collaborating with stakeholders to
        ensure features aligned with user needs.
      </span>,
    ],
  },
  {
    title: "BodaInsights - Software Developer Intern",
    url: "https://bodainsights.com/",
    oneLineDescription:
      "AI-powered business intelligence platform for data-driven decisions",
    bullets: [
      <span>
        Architected and developed an <b>AI-powered Text to SQL system</b> with{" "}
        <b>92% accuracy</b>, leveraging <b>microservices architecture</b> to
        enable <b>natural language queries</b> for <b>10,000+ users</b>.
      </span>,
      <span>
        Built a <b>high-performance web application</b> using{" "}
        <b>Next.js and React</b>, achieving a <b>97 Lighthouse score</b> through
        optimization and responsive design.
      </span>,
      <span>
        Implemented <b>job scheduling</b> for large data imports, improving
        processing efficiency by <b>60%</b> while ensuring seamless scalability.
      </span>,
    ],
  },
  {
    title: "AutoShopInsights - Freelance Software Engineer",
    url: "https://autoshopinsights.com/",
    oneLineDescription:
      "Financial tracking and analytics platform for automotive businesses",
    bullets: [
      <span>
        Engineered a <b>scalable full-stack solution</b> using{" "}
        <b>Next.js, TypeScript, and PostgreSQL</b> that{" "}
        <b>increased client revenue by 15%</b> while maintaining{" "}
        <b>99.9% uptime</b>.
      </span>,
      <span>
        Designed and implemented <b>intuitive KPIs</b> and{" "}
        <b>data visualizations</b>, transforming manual processes into automated
        workflows for automotive businesses.
      </span>,
      <span>
        Integrated <b>secure payment processing</b> with <b>Stripe</b> and built{" "}
        <b>type-safe APIs</b> using <b>tRPC</b>, ensuring reliable financial
        transactions.
      </span>,
    ],
  },
  {
    title: "Kylo Apps - Software Developer Intern",
    oneLineDescription:
      "Digital solutions provider specializing in web applications",
    bullets: [
      <span>
        Delivered <b>customer-facing features</b> across multiple projects while
        implementing <b>comprehensive test suites</b> and maintaining{" "}
        <b>90%+ code coverage</b>.
      </span>,
      <span>
        Improved application performance by <b>53%</b> through{" "}
        <b>React optimization</b> techniques and efficient state management
        using <b>Redux and Zustand</b>.
      </span>,
      <span>
        Delivered <b>customer-facing features</b> across multiple projects while
        maintaining high code quality and consistent performance standards.
      </span>,
    ],
  },
  {
    title: "MIS Software - Freelance Full-stack Developer",
    oneLineDescription: "Enterprise-grade chemical inventory management system",
    bullets: [
      <span>
        Built a comprehensive MIS system using{" "}
        <b>React, Express, MUI, and Electron</b> that processed 10,000+ monthly
        transactions with <b>zero data loss</b>, achieving{" "}
        <b>99% system reliability</b>.
      </span>,
      <span>
        Implemented <b>automated workflows</b> using <b>Node.js</b> and custom
        algorithms, achieving a <b>90% reduction</b> in manual task processing
        time.
      </span>,
      <span>
        Designed an intuitive reporting system that{" "}
        <b>cut report generation time by 50%</b> while improving data accuracy
        through <b>automated validation</b>.
      </span>,
    ],
  },
  {
    title: "TechFryDay - Assistant Instructor",
    oneLineDescription:
      "Python programming instructor for undergraduate students",
    bullets: [
      <span>
        Designed and delivered <b>Python programming workshops</b> to{" "}
        <b>40+ students</b>, achieving <b>90% positive feedback</b> through
        hands-on, project-based learning approaches.
      </span>,
      <span>
        Created <b>interactive learning materials</b> for voice recognition
        projects, resulting in <b>50% fewer support requests</b> and improved
        student independence.
      </span>,
      <span>
        Implemented a <b>peer programming system</b> that enhanced student
        engagement and practical coding skills through real-world problem
        solving.
      </span>,
    ],
  },
]

const WorkExperience = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <motion.div
      id="work_section"
      initial={{ opacity: 0, y: 100, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        type: "tween",
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <section key="experience" className="w-full py-12">
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10 ">
          <div className="bg-gradient-to-b from-slate-800 via-slate-800 to-slate-900 bg-clip-text text-center text-4xl font-normal tracking-tight text-transparent sm:text-3xl md:text-4xl md:font-semibold lg:text-5xl">
            experience
          </div>

          <div className="container mx-auto mt-4 hidden flex-col flex-wrap gap-8 px-5 md:mt-0 md:flex ">
            {workExperiences.map((experience, index) => (
              <WorkExperienceCard
                url={experience.url}
                key={`${index + 1}`}
                title={experience.title}
                oneLineDescription={experience.oneLineDescription}
                bullets={experience.bullets}
              />
            ))}
          </div>
          <div className="container mx-auto mt-4 flex flex-col flex-wrap gap-8 px-5 md:mt-0 md:hidden">
            {workExperiences.map((experience, index) => (
              <Accordion
                type="multiple"
                className="w-full"
                key={`${experience.title}-${index + 1}`}
              >
                <AccordionItem value={`item-${index}`} className="w-full">
                  <AccordionTrigger className="w-full flex-1 text-left text-base px-1">
                    {experience.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <WorkExperienceCard
                      url={experience.url}
                      key={`${index + 1}`}
                      title={experience.title}
                      oneLineDescription={experience.oneLineDescription}
                      bullets={experience.bullets}
                      mobile
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
})
WorkExperience.displayName = "WorkExperience"
export default WorkExperience
