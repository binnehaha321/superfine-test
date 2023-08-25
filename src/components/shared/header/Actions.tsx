import React from "react";
import Button from "../../common/button/Button";

const Actions = () => {
	return (
		<div className="flex flex-col md:flex-row items-center md:items-end gap-5 md:gap-12">
			<Button title="Sign up" path="/sign-up" onClick={() => {}} />
			<Button title="Log in" path="/log-in" onClick={() => {}} />
		</div>
	);
};

export default Actions;
