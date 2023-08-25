import React from "react";

const Number = ({ num, title }: { num: string; title: string }) => {
	return (
		<div className="flex flex-col items-center py-2">
			<span className="text-4xl font-semibold">{num}</span>
			<span className="text-lg font-semibold">{title}</span>
		</div>
	);
};

export default Number;
