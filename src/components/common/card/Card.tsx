import React from "react";
import Progress from "./Progress";
import Price from "./Price";

interface CardSize {
	width: string | number;
	height: string | number;
}

interface ICard {
	type: "jams" | "games";
	src: string;
	alt: string;
	size: CardSize;
	title: string;
	tag: string;
	desc?: string;
	statistic?: {
		days: number | string;
		hours: number | string;
		joined: number | string;
		submissions?: number | string;
	} | null;
}

const Card = ({ src, alt, size, title, tag, type, desc, statistic }: ICard) => {
	return (
		<div
			className={`card bg-primary-semi rounded-2xl h-full flex flex-col justify-between`}
			style={{ width: size.width }}
		>
			<img
				src={src}
				alt={alt}
				className="rounded-3xl"
				style={{
					minHeight: type === "games" ? 300 : "auto",
					objectFit: "cover",
				}}
			/>
			<div className="p-3">
				<div className="flex justify-between items-center">
					<div className="heading-info">
						<h3 className="font-semibold text-2xl uppercase">{title}</h3>
						<p className="text-lg text-purple-200">
							{type === "jams" ? `Hosted by ${tag}` : `#${tag}`}
						</p>
					</div>
					{type === "games" && <Price price={3.99} />}
				</div>
				<div className="mt-3">
					{type === "jams" ? (
						<div className="time-progress">
							<p className="italic">{`Start in ${statistic?.days} days, ${statistic?.hours} hours`}</p>
							<Progress />
							<div className="flex gap-3 italic">
								<span>{`${statistic?.joined} Joined`}</span>
								<span>{`${statistic?.submissions} submissions`}</span>P
							</div>
						</div>
					) : (
						<p>{desc}</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;
