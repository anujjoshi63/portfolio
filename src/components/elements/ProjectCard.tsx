import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

const ProjectCard = ({ title, description, link }: ProjectCardProps) => (
  <Link href={link} target="_blank" className="mt-3 w-fit">
    <div className="ease flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-3 rounded-xl border border-zinc-400 p-6 shadow-xl transition-all duration-300 hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:drop-shadow-[0_0_2px_hsl(240,0%,40%)] md:hover:-translate-y-1">
      <div className="gap flex w-full items-center text-left text-2xl font-semibold">
        {title}{" "}
        <ArrowUpRight
          size={20}
          color="gray"
          className="ml-[2px] mt-[4px] min-w-[14px]"
        />
      </div>
      <div className="flex flex-col items-center text-lg">
        <div className="w-full max-w-[18ch] flex-1 text-left">
          {description}
        </div>
      </div>
    </div>
  </Link>
);

export default ProjectCard;
