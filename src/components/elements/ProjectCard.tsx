import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./button";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

const ProjectCard = ({ title, description, link }: ProjectCardProps) => (
  <Link href={link} target="_blank" className="mt-3 block w-full">
    <Card
      className={cn(
        "group w-full min-w-[20rem] border-zinc-300 transition-all duration-300 hover:-translate-y-1",
        "hover:border-zinc-400 dark:hover:drop-shadow-[0_0_2px_hsl(240,0%,40%)]",
      )}
    >
      <CardHeader className="w-full pb-2">
        <CardTitle className="flex items-center text-2xl font-semibold tracking-tighter">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex min-w-fit flex-col items-start gap-4 text-left text-base text-gray-700 md:whitespace-nowrap">
          {description}
          <Button
            variant="outline"
            className="border-zinc-300 group-hover:text-slate-900"
          >
            View project
            <ArrowUpRight
              size={20}
              color="gray"
              className="ml-[2px] mt-[4px] min-w-[14px] transition-all group-hover:ml-1 group-hover:mt-0 group-hover:stroke-slate-700"
            />
          </Button>
        </div>
      </CardContent>
    </Card>
  </Link>
);

export default ProjectCard;
