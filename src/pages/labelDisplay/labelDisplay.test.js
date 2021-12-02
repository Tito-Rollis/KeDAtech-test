import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LabelDisplay from './labelDisplay';

test('Text Field page rendered', () => {
    render(<LabelDisplay />, { wrapper: MemoryRouter });
    const linkElement = screen.getByText('Label Display Component');
    expect(linkElement).toBeInTheDocument();
});
