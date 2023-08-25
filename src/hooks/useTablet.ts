import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

const useDetectScreen = () => {
	const { width } = useWindowSize();
	const [isTablet, setIsTablet] = useState(false);

	useEffect(() => {
		if (width && width <= 992) {
			setIsTablet(true);
		} else {
			setIsTablet(false);
		}
	}, [width]);

	return { isTablet };
};

export default useDetectScreen;
