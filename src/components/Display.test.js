import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display.js';

//creating basic render test for the Display component describe allows us to create a block that groups together several related tests
describe('<Display/>', () => {
	test('renders without crashing', () => {
		render(<Display />);
	})
	test('props work', () => {
		render(<Display balls={3} strikes={2} />)
	})
});
