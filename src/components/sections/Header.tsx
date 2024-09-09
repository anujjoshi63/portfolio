"use client"
import { motion } from "framer-motion";
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
  FOOTER: "footer_section"
}
const Header = () => {
  const scrollToRef = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView(
      {
        behavior: "smooth",
        block: sectionId !== "work_section" ? "center" : "start"
      }
    )
  }

  const animateFooter = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const footer = document.getElementById(SECTIONS_ID_MAP.FOOTER)
    if (!footer) return
    footer.classList.add("bg-slate-300");
    footer.classList.add("dark:bg-slate-900");
    footer.classList.add("scale-105");
    setTimeout(() => {
      footer.classList.remove("bg-slate-300");
      footer.classList.remove("dark:bg-slate-900");
      footer.classList.remove("scale-105");
    }, 500);
  };

  const Button = ({
    children,
    onClick,
  }: {
    children: string;
    onClick: () => void;
  }) => (
    <button
      className="lowercase blur-none transition-all duration-300 hover:-translate-y-[2px] hover:drop-shadow-[0_1px_2px_hsl(240,0%,30%)] dark:hover:text-[hsl(240,0%,95%)]"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );

  return (
    <div className="flex w-full items-center justify-center pt-4" id="header_section">
      <motion.div
        initial={{ top: "-3rem", opacity: 0, filter: "blur(20px)", scale: 0.3 }}
        animate={{
          top: "1.5rem",
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
        }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 30,
          delay: 1,
        }}
        className="fixed z-50 flex w-fit items-center justify-center gap-6 rounded-full border   border-[hsla(0,0%,30%,0.5)] bg-gradient-to-tr from-[hsla(260,20%,70%,0.3)] to-[hsla(250,20%,60%,0.3)] px-4 py-2 bg-blend-difference backdrop-blur-md dark:from-[hsla(260,40%,20%,0.3)] dark:to-[hsla(250,40%,10%,0.3)]
md:top-6"
      >
        <Button onClick={() => scrollToRef(SECTIONS_ID_MAP.INTRO)}>about</Button>
        <Button onClick={() => scrollToRef(SECTIONS_ID_MAP.SKILLS)}>skills</Button>
        <Button onClick={() => scrollToRef(SECTIONS_ID_MAP.WORK)}>work</Button>
        <Button
          onClick={() => {
            scrollToRef(SECTIONS_ID_MAP.FOOTER);
            animateFooter();
          }}
        >
          Links
        </Button>
      </motion.div>
    </div>
  );
};
export default Header;
