import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display.js';

//creating basic render test for the Display component

test('renders without crashing', () => {
	render(<Display />);
});
