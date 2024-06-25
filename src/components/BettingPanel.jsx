import React, { useState } from "react";

const BettingPanel = ({ multiplier, isRunning, onCashout }) => {
	const [bet, setBet] = useState("0.00");
	const [message, setMessage] = useState("");
	const [isPlaced, setIsPlaced] = useState(false);

	const HandleBetChange = (e) => {
		setBet(e.target.value);
	};
	const placeBet = () => {
		if (isPlaced) {
			setBet("0.00");
			setIsPlaced(false);
			setMessage("");
		} else {
			const msg = `Placed a bet of ${bet}`;
			console.log(msg);
			setIsPlaced(true);
		}
	};

	const handleButtonClick = () => {
		if (isRunning) {
			cashout();
		} else {
			placeBet();
		}
	};

	const cashout = () => {
		const cashoutValue = parseFloat(bet) * multiplier.toFixed(2);
		const msg = `You cashed out ${cashoutValue}`;
		window.alert(msg);
		console.log(msg);
		setIsPlaced(false);
		onCashout(bet, cashoutValue);
	};

	return (
		<div className="flex items-center bg-gray-800 p-2 mt-2 mr-5 rounded-xl justify-center font-sans">
			<input
				className="px-5 py-6 rounded-xl ml-5 mr-1 my-3 bg-black text-white font-bold text-center"
				type="text"
				pattern="[0-9]*"
				value={bet}
				onChange={HandleBetChange}
				placeholder={bet}
			/>
			<button
				className={`px-10 py-3 rounded-xl border-2 shadow-md text-white m-1 font-sans ${
					isPlaced && isRunning
						? "px-10 py-3 rounded-xl bg-yellow-600 border-2 border-yellow-900 shadow-md text-white m-1 font-sans"
						: ""
				} ${
					isPlaced
						? "bg-red-600 border border-red-400 py-6 text-xl"
						: "bg-lime-700 border border-lime-500"
				}`}
				onClick={handleButtonClick}
			>
				{isPlaced && isRunning ? (
					<>
						CASHOUT <br />
						{(parseFloat(bet) * multiplier).toFixed(2)} INR{" "}
					</>
				) : isPlaced ? (
					"Cancel"
				) : (
					<>
						BET <br /> {bet} INR
					</>
				)}
			</button>
			{message && <p className="text-white mt-4">{message}</p>}
		</div>
	);
};

export default BettingPanel;
