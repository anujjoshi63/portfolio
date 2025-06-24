"use client"

import { motion } from "framer-motion"

// type HeaderProps = {
//   workExperienceRef: RefObject<HTMLDivElement>;
//   skillsRef: RefObject<HTMLDivElement>;
//   introRef: RefObject<HTMLDivElement>;
//   footerRef: RefObject<HTMLDivElement>;
// };

const SECTIONS_ID_MAP = {
  HEADER: "header_section",
  SKILLS: "skills_section",
  WORK: "work_section",
  INTRO: "intro_section",
  FOOTER: "footer_section",
}
const Header = () => {
  const scrollToRef = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: sectionId !== "work_section" ? "center" : "start",
    })
  }

  const animateFooter = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const footer = document.getElementById(SECTIONS_ID_MAP.FOOTER)
    if (!footer) return
    footer.classList.add("bg-slate-300")
    footer.classList.add("dark:bg-slate-900")
    footer.classList.add("scale-105")
    setTimeout(() => {
      footer.classList.remove("bg-slate-300")
      footer.classList.remove("dark:bg-slate-900")
      footer.classList.remove("scale-105")
    }, 700)
  }

  const Button = ({
    children,
    onClick,
  }: {
    children: string
    onClick: () => void
  }) => (
    <button
      className="lowercase blur-none transition-all duration-200 ease-out hover:opacity-70 active:scale-95 active:opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2 py-1"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )

  return (
    <div
      className="flex w-full items-center justify-center pt-4"
      id="header_section"
    >
      <motion.div
        initial={{ y: -50, opacity: 0, scale: 0.9 }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          delay: 0.5,
        }}
        className="fixed top-6 z-50 flex w-fit items-center justify-center gap-6 rounded-full border border-[hsla(0,0%,30%,0.5)] bg-gradient-to-tr from-[hsla(260,20%,70%,0.3)] to-[hsla(250,20%,60%,0.3)] px-4 py-2 bg-blend-difference backdrop-blur-md dark:from-[hsla(260,40%,20%,0.3)] dark:to-[hsla(250,40%,10%,0.3)]"
      >
        <Button onClick={() => scrollToRef(SECTIONS_ID_MAP.INTRO)}>
          about
        </Button>
        <Button onClick={() => scrollToRef(SECTIONS_ID_MAP.SKILLS)}>
          skills
        </Button>
        <Button onClick={() => scrollToRef(SECTIONS_ID_MAP.WORK)}>work</Button>
        <Button
          onClick={() => {
            scrollToRef(SECTIONS_ID_MAP.FOOTER)
            animateFooter()
          }}
        >
          Links
        </Button>
      </motion.div>
    </div>
  )
}
export default Header
