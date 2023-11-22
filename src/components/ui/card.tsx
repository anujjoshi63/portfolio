import Image from "next/image";
type CardProps = {
  title: string;
  subtitle: string;
  imgPath: string;
  otherData?: string;
  onClick?: () => void;
};
const Card = ({ title, subtitle, otherData, imgPath }: CardProps) => {
  return (
    <div>
      <div className="flex w-fit min-w-[15rem] flex-1 flex-col items-center gap-2 rounded-xl bg-zinc-700 p-6 shadow-xl">
        <Image
          alt="project"
          src={imgPath}
          width={100}
          height={100}
          className="aspect-square rounded-lg"
        />
        <h1 className="whitespace-nowrap text-2xl font-bold">{title}</h1>
        <h4 className=" mt-2 whitespace-nowrap text-lg font-light">
          {subtitle}
        </h4>
        <h4 className="-mt-2 whitespace-nowrap text-zinc-300">{otherData}</h4>
      </div>
    </div>
  );
};

export default Card;
