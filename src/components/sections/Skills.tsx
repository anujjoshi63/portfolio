"use client";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server } from "lucide-react";
import type { Ref } from "react";
import { forwardRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code2 className="h-5 w-5" strokeWidth={1.5} />,
      skills: ["TypeScript", "JavaScript", "Python", "SQL", "Java"],
    },
    {
      title: "Front-End",
      icon: <Layout className="h-5 w-5" strokeWidth={1.5} />,
      skills: [
        "React",
        "Next.js",
        "React Native",
        "TailwindCSS",
        "Material-UI",
        "Redux",
      ],
    },
    {
      title: "Back-End",
      icon: <Database className="h-5 w-5" strokeWidth={1.5} />,
      skills: ["Node.js", "Express.js", "PostgreSQL", "Redis", "LangChain"],
    },
    {
      title: "DevOps & Tools",
      icon: <Server className="h-5 w-5" strokeWidth={1.5} />,
      skills: ["AWS", "Docker", "CI/CD", "Git & GitHub", "Linux"],
    },
  ];

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
            key skills
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category) => (
              <Card
                key={category.title}
                className="group border border-zinc-400 transition-shadow duration-300 hover:shadow-lg"
              >
                <CardHeader className="space-y-1">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-primary">{category.icon}</span>
                    <CardTitle className="whitespace-nowrap text-left text-xl">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="w-full text-left text-base text-gray-700 transition-colors duration-200 hover:text-slate-900"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
});
Skills.displayName = "Skills";

export default Skills;
