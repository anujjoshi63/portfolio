import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type CardProps = {
  title: string;
  subtitle: string;
  imgPath: string;
  otherData?: string;
  url: string;
  onClick?: () => void;
};
const HighlightCard = ({
  title,
  subtitle,
  otherData,
  imgPath,
  url,
}: CardProps) => {
  return (
    <Link href={url} target="_blank" className="flex flex-1 ">
      <div className="flex w-full min-w-[15rem] flex-1 flex-col items-center gap-2 rounded-xl border border-zinc-400 bg-themeWhite p-6 text-themeBlack shadow-xl transition-all dark:border-zinc-700 dark:bg-zinc-800 dark:text-themeWhite md:w-fit md:hover:-translate-y-1 ">
        {/* <Image
          alt="project"
          src={imgPath}
          width={100}
          height={100}
          className="aspect-square rounded-lg"
        /> */}
        <div className="flex w-full whitespace-nowrap text-left text-2xl font-bold md:tracking-tighter">
          {title}{" "}
          <ArrowUpRight
            size={20}
            color="gray"
            className="ml-[2px] mt-[4px] inline-block min-w-[14px]"
          />
        </div>
        <div className="mt-2 w-full whitespace-nowrap text-left text-lg font-light">
          {subtitle}
        </div>
        <div className="-mt-2 w-full whitespace-nowrap bg-themeWhite text-left text-themeBlack opacity-75 dark:bg-zinc-800 dark:text-themeWhite">
          {otherData}
        </div>
      </div>
    </Link>
  );
};

export default HighlightCard;
