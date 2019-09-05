import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls.js';
import { italic } from 'ansi-colors';

describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />);
    });
    it('strike', () => {
        const { getByText } = render(<Controls />);
        getByText(/strike/i);
    });
});