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
      <div className="flex w-full min-w-[15rem] flex-1 flex-col items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 p-6 shadow-xl md:w-fit">
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
        <div className="-mt-2 whitespace-nowrap text-zinc-300">{otherData}</div>
      </div>
    </div>
  );
};

export default Card;
