import React from 'react';
import './App.css';
import Display from './components/Display.js';

function App() {
	return (
		<div className="App">
			<Display balls={3} strikes={2} />
		</div>
	);
}

export default App;
