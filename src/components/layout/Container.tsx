import React from "react";

const Container = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={`px-6 xl:w-[1240px] lg:mx-auto ${className}`}>
			{children}
		</div>
	);
};

export default Container;
