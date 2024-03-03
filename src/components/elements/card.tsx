import Link from "next/link";

type CardProps = {
  title: string;
  subtitle: string;
  imgPath: string;
  otherData?: string;
  url: string;
  onClick?: () => void;
};
const Card = ({ title, subtitle, otherData, imgPath, url }: CardProps) => {
  return (
    <Link href={url} target="_blank">
      <div className="flex w-full min-w-[15rem] flex-1 flex-col items-center gap-2 rounded-xl border border-zinc-700 bg-themeWhite p-6 text-themeBlack shadow-xl  dark:bg-zinc-800 dark:text-themeWhite md:w-fit ">
        {/* <Image
          alt="project"
          src={imgPath}
          width={100}
          height={100}
          className="aspect-square rounded-lg"
        /> */}
        <div className="whitespace-nowrap text-2xl font-bold">{title}</div>
        <div className=" mt-2 whitespace-nowrap text-lg font-light">
          {subtitle}
        </div>
        <div className="-mt-2 whitespace-nowrap bg-themeWhite text-themeBlack opacity-75 dark:bg-zinc-800 dark:text-themeWhite">
          {otherData}
        </div>
      </div>
    </Link>
  );
};

export default Card;
