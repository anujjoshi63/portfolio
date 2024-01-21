import { RefObject } from "react";

const Header = ({
  workExperienceRef,
  skillsRef,
  introRef,
  footerRef,
}: {
  workExperienceRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  introRef: RefObject<HTMLDivElement>;
  footerRef: RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="flex w-full items-center justify-center pt-4">
      <div className="fixed top-3 z-50 flex w-fit items-center justify-center gap-6 rounded-full border   border-[hsla(0,0%,30%,0.5)] bg-gradient-to-tr from-[hsla(260,40%,20%,0.3)] to-[hsla(250,40%,10%,0.3)] px-4 py-2 bg-blend-difference backdrop-blur-md md:top-6">
        <button
          className="lowercase blur-none transition-all duration-300 hover:-translate-y-[2px] hover:text-[hsl(240,0%,95%)] hover:drop-shadow-[0_1px_2px_hsl(240,0%,30%)]"
          onClick={() => {
            introRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          about
        </button>
        <button
          className="lowercase blur-none transition-all duration-300 hover:-translate-y-[2px] hover:text-[hsl(240,0%,95%)] hover:drop-shadow-[0_1px_2px_hsl(240,0%,30%)]"
          onClick={() => {
            skillsRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Skills
        </button>
        <button
          className="lowercase blur-none transition-all duration-300 hover:-translate-y-[2px] hover:text-[hsl(240,0%,95%)] hover:drop-shadow-[0_1px_2px_hsl(240,0%,30%)]"
          onClick={() => {
            workExperienceRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Work
        </button>
        <button
          className="lowercase blur-none transition-all duration-300  hover:-translate-y-[2px] hover:text-[hsl(240,0%,95%)] hover:drop-shadow-[0_1px_2px_hsl(240,0%,30%)]"
          onClick={async () => {
            footerRef.current?.scrollIntoView({
              behavior: "smooth",
            });
            await new Promise((resolve) => setTimeout(resolve, 500));
            footerRef.current?.classList.add("bg-slate-700");
            footerRef.current?.classList.add("scale-105");
            setTimeout(() => {
              footerRef.current?.classList.remove("bg-slate-700");
              footerRef.current?.classList.remove("scale-105");
            }, 500);
          }}
        >
          Links
        </button>
      </div>
    </div>
  );
};
export default Header;
