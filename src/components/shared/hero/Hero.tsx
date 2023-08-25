import React from "react";
import Number from "./Number";
import Button from "../../common/button/Button";

const Hero = ({ videoSrc }: { videoSrc: string }) => {
	return (
		<div className="flex flex-col lg:flex-auto lg:grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none">
			<div className="bg-purple-400">
				<video className="w-full h-full" autoPlay={true} controls>
					<source src={videoSrc} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<div className="bg-primary-semi py-[4rem] px-[1rem] 2xl:px-[6rem] xl:px-[3rem]">
				<h2 className="text-4xl xl:text-5xl text-center sm:text-left text-dark-100 font-semibold tracking-wider">
					THE FIRST GAMEJAM
				</h2>
				<p className="mt-1 mb-5 italic text-purple-200 text-xl opacity-70 text-center sm:text-left">
					Hosted by GameJam
				</p>

				<div className="numbers">
					<h4 className="text-xl text-center sm:text-left">Starts in</h4>
					<div className="countdown flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-0 justify-between">
						<div className="timer flex gap-5">
							<Number num={"00"} title="days" />
							<Number num={"00"} title="hours" />
							<Number num={"00"} title="minutes" />
						</div>
						<div className="audience flex gap-5">
							<Number num={"300"} title="Joined" />
							<Number num={"300"} title="Submissions" />
						</div>
					</div>
				</div>

				<div className="call-to-action text-center mt-8">
					<Button
						title="JOIN NOW!"
						path="/"
						className="text-2xl px-4 py-2 rounded-full text-dark-100"
						style={{
							background:
								"linear-gradient(90deg, #1991E1 0%, #8764FA 100%), linear-gradient(90deg, #19AFF5 0%, #CD82FF 100%)",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
