import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DateField from './dateField';

test('Text Field page rendered', () => {
    render(<DateField />, { wrapper: MemoryRouter });
    const linkElement = screen.getByText(/Date-Field Component/i);
    expect(linkElement).toBeInTheDocument();
});
