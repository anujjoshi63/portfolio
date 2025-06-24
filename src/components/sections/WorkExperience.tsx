"use client"

import { forwardRef, type JSX } from "react"
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
      <span className="font-normal">
        Built an <b className="font-semibold">AI resume analyzer</b> using{" "}
        <b className="font-semibold">Next.js, TypeScript, and OpenAI</b> that{" "}
        <b className="font-semibold">reduced screening time by 93%</b>,
        implementing advanced{" "}
        <b className="font-semibold">prompt engineering</b> for intelligent
        matching.
      </span>,
      <span className="font-normal">
        Designed a{" "}
        <b className="font-semibold">scalable serverless architecture</b> using{" "}
        <b className="font-semibold">AWS Lambda, S3, and API Gateway</b>,
        handling <b className="font-semibold">1000+ daily resumes</b> with{" "}
        <b className="font-semibold">99.9% uptime</b>.
      </span>,
      <span className="font-normal">
        Established <b className="font-semibold">code quality guidelines</b> and{" "}
        <b className="font-semibold">automation workflows</b>, while
        collaborating with stakeholders to ensure features aligned with user
        needs.
      </span>,
    ],
  },
  {
    title: "BodaInsights - Software Developer Intern",
    url: "https://bodainsights.com/",
    oneLineDescription:
      "AI-powered business intelligence platform for data-driven decisions",
    bullets: [
      <span className="font-normal">
        Architected and developed an{" "}
        <b className="font-semibold">AI-powered Text to SQL system</b> with{" "}
        <b className="font-semibold">92% accuracy</b>, leveraging{" "}
        <b className="font-semibold">microservices architecture</b> to enable{" "}
        <b className="font-semibold">natural language queries</b> for{" "}
        <b className="font-semibold">10,000+ users</b>.
      </span>,
      <span className="font-normal">
        Built a{" "}
        <b className="font-semibold">high-performance web application</b> using{" "}
        <b className="font-semibold">Next.js and React</b>, achieving a{" "}
        <b className="font-semibold">97 Lighthouse score</b> through
        optimization and responsive design.
      </span>,
      <span className="font-normal">
        Implemented <b className="font-semibold">job scheduling</b> for large
        data imports, improving processing efficiency by{" "}
        <b className="font-semibold">60%</b> while ensuring seamless
        scalability.
      </span>,
    ],
  },
  {
    title: "AutoShopInsights - Freelance Software Engineer",
    url: "https://autoshopinsights.com/",
    oneLineDescription:
      "Financial tracking and analytics platform for automotive businesses",
    bullets: [
      <span className="font-normal">
        Engineered a{" "}
        <b className="font-semibold">scalable full-stack solution</b> using{" "}
        <b className="font-semibold">Next.js, TypeScript, and PostgreSQL</b>{" "}
        that <b className="font-semibold">increased client revenue by 15%</b>{" "}
        while maintaining <b className="font-semibold">99.9% uptime</b>.
      </span>,
      <span className="font-normal">
        Designed and implemented <b className="font-semibold">intuitive KPIs</b>{" "}
        and <b className="font-semibold">data visualizations</b>, transforming
        manual processes into automated workflows for automotive businesses.
      </span>,
      <span className="font-normal">
        Integrated <b className="font-semibold">secure payment processing</b>{" "}
        with <b className="font-semibold">Stripe</b> and built{" "}
        <b className="font-semibold">type-safe APIs</b> using{" "}
        <b className="font-semibold">tRPC</b>, ensuring reliable financial
        transactions.
      </span>,
    ],
  },
  {
    title: "Kylo Apps - Software Developer Intern",
    oneLineDescription:
      "Digital solutions provider specializing in web applications",
    bullets: [
      <span className="font-normal">
        Delivered <b className="font-semibold">customer-facing features</b>{" "}
        across multiple projects while implementing{" "}
        <b className="font-semibold">comprehensive test suites</b> and
        maintaining <b className="font-semibold">90%+ code coverage</b>.
      </span>,
      <span className="font-normal">
        Improved application performance by <b className="font-semibold">53%</b>{" "}
        through <b className="font-semibold">React optimization</b> techniques
        and efficient state management using{" "}
        <b className="font-semibold">Redux and Zustand</b>.
      </span>,
      <span className="font-normal">
        Delivered <b className="font-semibold">customer-facing features</b>{" "}
        across multiple projects while maintaining high code quality and
        consistent performance standards.
      </span>,
    ],
  },
  {
    title: "MIS Software - Freelance Full-stack Developer",
    oneLineDescription: "Enterprise-grade chemical inventory management system",
    bullets: [
      <span className="font-normal">
        Built a comprehensive MIS system using{" "}
        <b className="font-semibold">React, Express, MUI, and Electron</b> that
        processed 10,000+ monthly transactions with{" "}
        <b className="font-semibold">zero data loss</b>, achieving{" "}
        <b className="font-semibold">99% system reliability</b>.
      </span>,
      <span className="font-normal">
        Implemented <b className="font-semibold">automated workflows</b> using{" "}
        <b className="font-semibold">Node.js</b> and custom algorithms,
        achieving a <b className="font-semibold">90% reduction</b> in manual
        task processing time.
      </span>,
      <span className="font-normal">
        Designed an intuitive reporting system that{" "}
        <b className="font-semibold">cut report generation time by 50%</b> while
        improving data accuracy through{" "}
        <b className="font-semibold">automated validation</b>.
      </span>,
    ],
  },
  {
    title: "TechFryDay - Assistant Instructor",
    oneLineDescription:
      "Python programming instructor for undergraduate students",
    bullets: [
      <span className="font-normal">
        Designed and delivered{" "}
        <b className="font-semibold">Python programming workshops</b> to{" "}
        <b className="font-semibold">40+ students</b>, achieving{" "}
        <b className="font-semibold">90% positive feedback</b> through hands-on,
        project-based learning approaches.
      </span>,
      <span className="font-normal">
        Created <b className="font-semibold">interactive learning materials</b>{" "}
        for voice recognition projects, resulting in{" "}
        <b className="font-semibold">50% fewer support requests</b> and improved
        student independence.
      </span>,
      <span className="font-normal">
        Implemented a <b className="font-semibold">peer programming system</b>{" "}
        that enhanced student engagement and practical coding skills through
        real-world problem solving.
      </span>,
    ],
  },
]

const WorkExperience = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <motion.div
      id="work_section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.6,
      }}
      viewport={{ once: true, margin: "-100px" }}
      style={{ willChange: "transform, opacity" }}
    >
      <section key="experience" className="w-full py-12">
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10 ">
          <div className="bg-gradient-to-b from-slate-800 via-slate-800 to-slate-900 bg-clip-text text-center text-4xl font-normal tracking-tight text-transparent sm:text-3xl md:text-4xl md:font-semibold lg:text-5xl">
            experience
          </div>

          <div className="container mx-auto mt-4 hidden flex-col flex-wrap gap-8 px-5 md:mt-0 md:flex ">
            {workExperiences.map((experience, index) => (
              <motion.div
                key={`${index + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 120,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <WorkExperienceCard
                  url={experience.url}
                  title={experience.title}
                  oneLineDescription={experience.oneLineDescription}
                  bullets={experience.bullets}
                />
              </motion.div>
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
