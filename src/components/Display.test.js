import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display.js';

//creating basic render test for the Display component describe allows us to create a block that groups together several related tests. Using / / in order to utilize regular expression syntax
describe('<Display/>', () => {
	test('renders without crashing', () => {
		render(<Display />);
	})
	test('props work', () => {
		const display = render(<Display balls={3} strikes={2} fouls={4} hits={1} />);
		display.getByText(/Balls: 3/);
		display.getByText(/Strikes: 2/);
		display.getByText(/Fouls: 4/);
		display.getByText(/Hits: 1/);
	})
	//Testing edge cases
	test('component knows values', () => {
		const display = render(<Display balls={46} strikes={-1000} fouls={30} hits={-89} />);
		display.getByText(/Balls: 46/);
		display.getByText(/Strikes: -1000/);
		display.getByText(/Fouls: 30/);
		display.getByText(/Hits: -89/);
	})
});
