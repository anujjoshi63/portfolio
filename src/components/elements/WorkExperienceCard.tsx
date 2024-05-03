import { motion } from "framer-motion";
import { ArrowUpRight, MoveRight } from "lucide-react";
import Link from "next/link";
import { useId } from "react";
import { useInView } from "react-intersection-observer";

type WorkExperienceCardProps = {
  title: string;
  oneLineDescription: string;
  bullets: string[] | JSX.Element[];
  url?: string;
};

const WorkExperienceCard = ({
  title,
  oneLineDescription,
  bullets,
  url,
}: WorkExperienceCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // This will ensure the animation only plays once
  });
  return (
    <motion.div
      ref={ref}
      className="flex-1 space-y-3"
      initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 30,
      }}
    >
      <div className="relative mx-auto flex rounded-lg border border-zinc-400 p-4 shadow-md dark:border-zinc-700 dark:bg-zinc-800">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-3xl font-medium tracking-tight dark:text-[hsl(240,11%,86%)]">
            {title}{" "}
            {url && (
              <Link href={url || ""} target="_blank">
                <ArrowUpRight
                  size={20}
                  color="gray"
                  className="cursor-pointer"
                />
              </Link>
            )}
          </div>
          <p className="text-lg leading-relaxed">{oneLineDescription}</p>
          <div className="flex flex-col">
            {bullets.map((bullet, index) => {
              return (
                <div
                  className="mt-3 flex gap-2 text-lg leading-relaxed"
                  key={useId()}
                >
                  <MoveRight width={14} className="mt-[4px] min-w-[14px]" />
                  {bullet}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperienceCard;
