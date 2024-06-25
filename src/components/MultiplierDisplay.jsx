import React from "react";

const MultiplierDisplay = ({ multiplier }) => {
	return (
		<div className="bg-gradient-to-b from-black to-slate-900 p-12 rounded-xl mr-5 mb-4	">
			<div className="font-sans text-5xl text-white font-bold ">
				<h1>Current Multiplier: x{multiplier.toFixed(1)}</h1>
			</div>
		</div>
	);
};

export default MultiplierDisplay;
