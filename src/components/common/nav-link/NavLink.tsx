import React from "react";
import { NavLink as RouteLink } from "react-router-dom";

const NavLink = ({
	to,
	title,
	className,
}: {
	to: string;
	title: string;
	className?: string;
}) => {
	return (
		<RouteLink to={to} className={`uppercase font-semibold ${className}`}>
			{title}
		</RouteLink>
	);
};

export default NavLink;
