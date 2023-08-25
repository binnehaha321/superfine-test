import React from "react";
import BrowseGamesLink from "../header/components/BrowseGames.Link";
import NavItems from "../header/NavItems";
import Actions from "../header/Actions";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
	return (
		<>
			{isOpen && (
				<div className="flex flex-col gap-5 h-screen shadow-lg bg-primary-normal absolute right-0 z-10 min-w-[300px] py-5">
					<BrowseGamesLink />
					<NavItems />
					<Actions />
				</div>
			)}
		</>
	);
};

export default Sidebar;
