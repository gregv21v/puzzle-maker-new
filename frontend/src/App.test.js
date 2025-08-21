import { render, screen } from '@testing-library/react';
import App from './App';

test('renders left, center, and right panels', () => {
  render(<App />);
  expect(screen.getByText(/left panel/i)).toBeInTheDocument();
  expect(screen.getByText(/center panel/i)).toBeInTheDocument();
  expect(screen.getByText(/right panel/i)).toBeInTheDocument();
});
