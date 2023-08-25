import { useEffect, useState } from "react";

interface WindowSize {
	width: number | undefined;
	height: number | undefined;
}

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: undefined,
		height: undefined,
	});

	const handleSize = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useEffect(() => {
		window.addEventListener("resize", handleSize);

		return () => window.removeEventListener("resize", handleSize);
	}, []);

	return windowSize;
};

export default useWindowSize;
