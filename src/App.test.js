import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


test('App renders correctly without crashing', async () => {
	await render(<App />);
});