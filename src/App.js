import React from 'react';
import './App.css';
import Display from './components/Display.js';
import ControlButtons from './components/ControlButtons.js'
function App() {
	return (
		<div className="App">
			<Display balls={3} strikes={2} fouls={4} hits={1} />
			<ControlButtons ball={() => console.log('wide one!')} />
		</div>
	);
}

export default App;
