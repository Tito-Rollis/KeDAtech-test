import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TextField from './textField';

test('Text Field page rendered', () => {
    render(<TextField />, { wrapper: MemoryRouter });
    const linkElement = screen.getByText('Text Field Component');
    expect(linkElement).toBeInTheDocument();
});
