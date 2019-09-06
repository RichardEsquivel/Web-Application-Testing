import React from 'react';

const ControlButtons = (props) => {
	return (
		<div>
			<button onClick={props.ball}>BALLS</button>
			<button onClick={props.strike}>STRIKES</button>
			<button onClick={props.foul}>FOULS</button>
			<button onClick={props.hit}>HITS</button>

		</div>
	)
}

export default ControlButtons;