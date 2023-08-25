import React, { useContext } from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import Actions from "./Actions";
import Container from "../../layout/Container";
import MenuIcon from "../../../assets/icons/Menu";
import useTablet from "../../../hooks/useTablet";
import BrowseGamesLink from "./components/BrowseGames.Link";
import Sidebar from "../sidebar/Sidebar";

const Header = () => {
	const { isTablet } = useTablet();
	const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);

	return (
		<Container>
			<div className="flex justify-between py-6">
				<div className="flex gap-10 items-end">
					<Logo />
					{!isTablet && <BrowseGamesLink />}
				</div>
				{isTablet ? (
					<button onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
						<MenuIcon />
					</button>
				) : (
					<NavItems />
				)}

				{!isTablet && <Actions />}
			</div>
			<Sidebar isOpen={isOpenSidebar} />
		</Container>
	);
};

export default Header;
