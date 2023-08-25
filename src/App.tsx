import React from "react";
import { Routes, Route } from "react-router-dom";
import { IRoutes } from "./routes";
import routes from "./routes";
import "./App.css";

function App() {
	return (
		<div className="h-screen bg-primary-bold overflow-x-hidden">
			<Routes>
				{routes.map(({ title, path, index, component }: IRoutes) => {
					const ELEMENT = component;
					return (
						<Route
							key={title}
							path={path}
							element={<ELEMENT />}
							index={index}
						/>
					);
				})}
			</Routes>
		</div>
	);
}

export default App;
