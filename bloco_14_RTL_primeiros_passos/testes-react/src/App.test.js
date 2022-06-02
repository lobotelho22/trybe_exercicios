import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const emailFormEl = screen.getByLabelText(/email/i);
  expect(emailFormEl).toBeInTheDocument();
});
