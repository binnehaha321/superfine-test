import React from "react";
import ArrowRight from "../../../assets/icons/ArrowRightIcon";
import Container from "../../layout/Container";

const Search = () => {
	return (
		<Container>
			<div className="flex w-full md:w-[400px] bg-primary-semi rounded-3xl px-4 py-2 ml-auto my-3">
				<input
					placeholder="Search"
					className="inline-block w-full pr-3"
					style={{ background: "transparent" }}
				/>
				<button className="rounded-full p-1 bg-purple-400">
					<ArrowRight />
				</button>
			</div>
		</Container>
	);
};
export default Search;
