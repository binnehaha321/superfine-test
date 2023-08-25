import React from "react";

const Price = ({ price }: { price: number | string }) => {
	return (
		<div className="px-2 py-1 bg-dark-400 text-dark-100 font-semibold text-lg rounded-full tracking-wider">{`$${price}`}</div>
	);
};

export default Price;
