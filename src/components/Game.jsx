import React, { useState, useEffect } from "react";
import BettingPanel from "./BettingPanel";
import MultiplierDisplay from "./MultiplierDisplay";
import History from "./History";
import HistoryGraph from "./HistoryGraph";

const Game = () => {
	const [multiplier, setMultiplier] = useState(1);
	const [isRunning, setIsRunning] = useState(false);
	const [history, setHistory] = useState([]);
	const [targetMultiplier, setTargetMultiplier] = useState(null);
	const [cashoutHistory, setCashoutHistory] = useState([]);

	useEffect(() => {
		let interval;
		if (isRunning) {
			interval = setInterval(() => {
				setMultiplier((prev) => prev + 0.1);
			}, 100);
			if (targetMultiplier && multiplier >= targetMultiplier) {
				clearInterval(interval);
				setIsRunning(false);
				setHistory((prevHistory) => [...prevHistory, multiplier.toFixed(1)]);
			}
		} else if (!isRunning && multiplier !== 1) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isRunning, multiplier]);

	const startGame = () => {
		setIsRunning(true);
		setMultiplier(1);
		setTargetMultiplier(Math.random() * 10 + 1);
	};

	const handleCashout = (bet, cashoutValue) => {
		setCashoutHistory((prevHistory) => [...prevHistory, { bet, cashoutValue }]);
	};

	return (
		<div className="grid grid-cols-4">
			<div className="col-span-1">
				<History history={history} cashoutHistory={cashoutHistory} />
				<HistoryGraph history={history} />
			</div>
			<div className="col-span-3 text-center">
				<MultiplierDisplay multiplier={multiplier} />
				<br />
				<BettingPanel
					multiplier={multiplier}
					isRunning={isRunning}
					onCashout={handleCashout}
				/>
				<button
					className="bg-red-500 text-white text-xl text-center p-4 rounded-xl mt-3 "
					onClick={startGame}
				>
					{isRunning ? "Running..." : "Start"}
				</button>
			</div>
		</div>
	);
};

export default Game;
