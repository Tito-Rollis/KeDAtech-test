import { render, screen } from '@testing-library/react';
import App from './App';

describe('All routes rendered', () => {
    test('renders learn react link', () => {
        render(<App />);
        const linkElement = screen.getByText(/Pick The UI Below!/i);
        expect(linkElement).toBeInTheDocument();
    });
});
