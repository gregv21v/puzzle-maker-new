import { render, screen } from '@testing-library/react';
import App from './App';

test('renders left and right panels with canvas in center', () => {
  render(<App />);
  expect(screen.getByText(/left panel/i)).toBeInTheDocument();
  expect(screen.getByText(/right panel/i)).toBeInTheDocument();
  expect(screen.getByTestId('drawing-canvas')).toBeInTheDocument();
});
