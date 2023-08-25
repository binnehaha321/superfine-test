import React from "react";

interface IButton {
	title: string;
	path?: string;
	onClick?: () => void;
	className?: string;
	style?: React.CSSProperties;
}

const Button = ({ title, path, onClick, className = "", style }: IButton) => {
	return (
		<button
			className={`text-dark-200 font-semibold ${className}`}
			type="button"
			onClick={onClick}
			style={style}
		>
			{title}
		</button>
	);
};

export default Button;
