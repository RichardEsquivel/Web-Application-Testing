import React, { useState } from 'react';
import './App.css';
import Display from './components/Display.js';
import Dashboard from './components/Dashboard.js'

const App = () => {
	const [balls, setBalls] = useState(0);
	const [strikes, setStrikes] = useState(0);

	const ballScore = () => {
		setBalls(balls + 1);
	};

	const strikeScore = () => {
		if (strikes === 2) {
			setStrikes(0);
			setBalls(0);
		} else {
			setStrikes(strikes + 1);

		};

		const foulScore = () => {
			setStrikes(strikes + 1);
		}

		const hitScore = () => {
			setStrikes(0);
			setBalls(0);

		}
		return (
			<div className="App">
				<Display balls={balls} strikes={strikes} />
				<Dashboard ball={ballScore}
					strike={strikeScore}
					foul={foulScore}
					hit={hitScore} />
			</div>
		);
	}
}
export default App;
