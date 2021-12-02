import { render, screen } from '@testing-library/react';
import RadioButtonComp from './radioButtonComp';

describe('props rendered', () => {
    const props = {
        label: 'Radio A',
        name: 'radio',
        children: <p aria-label="text">Hello World!</p>,
    };
    test('name props rendered', () => {
        render(<RadioButtonComp name={props.name} />);
        const id = screen.getByLabelText('radio-btn');
        expect(id).toHaveAttribute('name', 'radio');
    });

    test('label props rendered', () => {
        render(<RadioButtonComp label={props.label} />);
        const text = screen.getByText('Radio A');
        expect(text).toBeInTheDocument();
    });
    test('children props rendered', () => {
        render(<RadioButtonComp {...props} />);
        const text = screen.getByLabelText('text');
        expect(text).toBeInTheDocument();
    });
});
