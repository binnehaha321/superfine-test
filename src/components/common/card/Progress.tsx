import React from "react";

const Progress = () => {
	return (
		<div className="h-3 w-full bg-primary-normal rounded-xl my-1">
			<div
				className="h-3 rounded-xl"
				style={{
					background:
						"linear-gradient(90deg, #1991E1 0%, #8764FA 100%), linear-gradient(90deg, #19AFF5 0%, #CD82FF 100%)",
					width: "50%",
				}}
			></div>
		</div>
	);
};

export default Progress;
