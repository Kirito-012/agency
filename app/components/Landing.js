import React from "react";
import Hero from "./Hero";
import Header from "./Header";
import Second_sec from "./Second_sec";
import Fourth_sec from "./Fourth_sec";
import Fifth_sec from "./Fifth_sec";

const Landing = () => {
	return (
		<div>
			<Header />
			<Hero />
			<Second_sec />
			{/* <Fourth_sec /> */}
			<Fifth_sec />
		</div>
	);
};

export default Landing;
