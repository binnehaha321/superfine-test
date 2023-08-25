import React from "react";
import { BrowseGame, Community, Home, Support, UploadGame } from "../pages";

export interface IRoutes {
	title: string;
	path: string;
	index?: boolean;
	isExternal?: boolean;
	component: React.FC;
}

const routes: IRoutes[] = [
	{
		title: "",
		path: "",
		index: true,
		component: Home,
	},
	{
		title: "browse games",
		path: "browse-games",
		component: BrowseGame,
	},
	{
		title: "upload game",
		path: "upload-game",
		component: UploadGame,
	},
	{
		title: "community",
		path: "community",
		component: Community,
	},
	{
		title: "support",
		path: "support",
		component: Support,
	},
];

export default routes;
