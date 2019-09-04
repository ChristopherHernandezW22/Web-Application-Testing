import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display.js';

describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    });
    it('props working', () => {
        const display = render(<Display strikes={2} balls={3} />);
        display.getByText(/Strikes: 2/);
        display.getByText(/Balls: 3/);

    });
});