import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './home';
test('Home page rendered', () => {
    render(<Home />, { wrapper: MemoryRouter });
    const linkElement = screen.getByText('Pick The UI Below!');
    expect(linkElement).toBeInTheDocument();
});
