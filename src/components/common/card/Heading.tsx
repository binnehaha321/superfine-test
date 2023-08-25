import React from "react";

const Heading = ({ title }: { title: string }) => {
	return (
		<div className="py-4">
			<h2 className="text-center md:text-left text-xl font-semibold uppercase">
				{title}
			</h2>
		</div>
	);
};

export default Heading;
