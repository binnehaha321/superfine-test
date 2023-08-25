import React from "react";
import routes from "../../../routes";
import NavLink from "../../common/nav-link/NavLink";

const NavItems = () => {
	return (
		<div className="flex flex-col md:flex-row gap-5 lg:gap-16 items-center md:items-end">
			{routes.slice(2).map(({ title, path }) => (
				<NavLink key={title} to={path} title={title} />
			))}
		</div>
	);
};

export default NavItems;
