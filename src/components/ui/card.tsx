import Image from 'next/image';
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
			<div className="flex flex-col items-center shadow-xl rounded-xl p-6 gap-2 flex-1 bg-zinc-700 min-w-[15rem] w-fit">
				<Image
					alt="project"
					src={imgPath}
					width={100}
					height={100}
					className="aspect-square rounded-lg"
				/>
				<h1 className="text-2xl font-bold whitespace-nowrap">
					{title}
				</h1>
				<h4 className=" font-light mt-2 text-lg whitespace-nowrap">
					{subtitle}
				</h4>
				<h4 className="-mt-2 text-zinc-300 whitespace-nowrap">
					{otherData}
				</h4>
			</div>
		</div>
	);
};

export default Card;
