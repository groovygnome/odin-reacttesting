import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../src/App';

describe('App component', () => {
    it('renders magnificent monkeys', () => {
        render(<App />);

        expect(screen.getByRole('heading').textContent).toMatch(/Magnificent Monkeys/i);
    });

    it('renders radical rhinos after button', async () => {
        const user = userEvent.setup();

        render(<App />);
        const button = screen.getByRole('button', { name: 'Click Me' });

        await user.click(button);

        expect(screen.getByRole('heading').textContent).toMatch(/Radical Rhinos/i);
    });
});

