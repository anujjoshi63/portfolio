import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const WorkExperienceCard = ({
  title,
  oneLineDescription,
  bullets,
}: {
  title: string;
  oneLineDescription: string;
  bullets: string[];
}) => {
  return (
    <motion.div
      viewport={{ once: true }}
      className="flex-1 space-y-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        type: "tween",
        duration: 1.5,
      }}
    >
      <div className="relative mx-auto flex rounded-lg border border-zinc-400 p-4 shadow-md dark:border-zinc-700 dark:bg-zinc-800 md:w-2/3">
        <div className="flex flex-col">
          <div className="text-3xl font-medium tracking-tight dark:text-[hsl(240,11%,86%)]">
            {title}
          </div>
          <p className="text-lg leading-relaxed">{oneLineDescription}</p>
          <div className="flex flex-col">
            {bullets.map((bullet: string, index: number) => {
              return (
                <div
                  className="mt-3 flex gap-2 text-lg leading-relaxed"
                  key={bullet[0] + index.toString()}
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
