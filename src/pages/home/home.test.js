import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './home';

test('Text Field page rendered', () => {
    render(<Home />, { wrapper: MemoryRouter });
    const linkElement = screen.getByText(/Pick The UI Below!/i);
    expect(linkElement).toBeInTheDocument();
});
