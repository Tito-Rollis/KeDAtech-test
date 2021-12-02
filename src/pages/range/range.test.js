import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Range from './range';

test('range page rendered', () => {
    render(<Range />, { wrapper: MemoryRouter });
    const linkElement = screen.getByText(/Range Component/i);
    expect(linkElement).toBeInTheDocument();
});
