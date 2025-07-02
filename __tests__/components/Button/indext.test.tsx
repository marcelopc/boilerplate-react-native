import Button from '../../../src/components/Button';
import { render, fireEvent } from '@testing-library/react-native';

describe('Button', () => {
  it('renders with correct label', () => {
    const { getByText } = render(
      <Button label="Click Me" onClick={() => {}} testID="button" />
    );
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls onClick when pressed', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button label="Click Me" onClick={mockOnClick} testID="button" />
    );
    fireEvent.press(getByText('Click Me'));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('applies correct styles to button', () => {
    const { getByTestId } = render(
      <Button label="Click Me" onClick={() => {}} testID="button" />
    );
    const button = getByTestId('button');
    expect(button).toHaveStyle({
      backgroundColor: '#007AFF',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    });
  });
});
