"use client";
import { motion } from "framer-motion";
import type { Ref } from "react";
import { forwardRef } from "react";

const Skills = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  const skillsMap = {
    Languages: ["JavaScript", "TypeScript", "Python", "SQL", "Java"],
    "Front-End": [
      "React",
      "Next.js",
      "React Native",
      "Redux",
      // "Electron",
      "TailwindCSS",
      "Material-UI",
    ],
    "Back-End": [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "LangChain",
      // "MySQL",
      // "Firebase",
      // "OpenAI APIs",
      // "RESTful API",
      // "GraphQL",
    ],
    "DevOps & Tools": ["Git & Github", "AWS", "Docker", "Linux", "CI/CD"],
  };

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
        <div className="flex w-full flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="bg-gradient-to-b from-slate-800 via-slate-800 to-slate-900 bg-clip-text py-2 text-4xl font-normal  tracking-tight text-transparent sm:text-3xl md:text-4xl md:font-semibold lg:text-5xl">
            skills
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skillsMap).map(([key, value]) => (
              <div
                key={key}
                className="flex w-fit min-w-[14rem]  flex-col items-center gap-2 rounded-xl border border-zinc-400 bg-themeWhite p-6 shadow-xl dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="w-full text-left text-2xl font-semibold tracking-tighter">
                  {key}
                </div>
                <div className="flex w-full flex-col items-start text-lg">
                  {value.map((skill: string) => (
                    <div key={skill} className="w-full text-left">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
});
Skills.displayName = "Skills";

export default Skills;
