import { motion } from "framer-motion";
import { RefObject } from "react";

type HeaderProps = {
  workExperienceRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  introRef: RefObject<HTMLDivElement>;
  footerRef: RefObject<HTMLDivElement>;
};

const Header = ({
  workExperienceRef,
  skillsRef,
  introRef,
  footerRef,
}: HeaderProps) => {
  const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const animateFooter = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    footerRef.current?.classList.add("bg-slate-300");
    footerRef.current?.classList.add("dark:bg-slate-900");
    footerRef.current?.classList.add("scale-105");
    setTimeout(() => {
      footerRef.current?.classList.remove("bg-slate-300");
      footerRef.current?.classList.remove("dark:bg-slate-900");
      footerRef.current?.classList.remove("scale-105");
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
    >
      {children}
    </button>
  );

  return (
    <div className="flex w-full items-center justify-center pt-4">
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
        <Button onClick={() => scrollToRef(introRef)}>about</Button>
        <Button onClick={() => scrollToRef(skillsRef)}>skills</Button>
        <Button onClick={() => scrollToRef(workExperienceRef)}>work</Button>
        <Button
          onClick={() => {
            scrollToRef(footerRef);
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
