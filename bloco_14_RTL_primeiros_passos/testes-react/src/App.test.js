import { render, screen } from '@testing-library/react';
import App from './App';

test('está renderizando na tela um campo de emmail?', () => {
  render(<App />);
  const emailFormEl = screen.getByLabelText(/email/i);
  expect(emailFormEl).toBeInTheDocument();
  expect(emailFormEl).toHaveProperty('type', 'email');
});

it('está aparecendo um botão na tela?', () => {
  render(<App />);
  const btnEl = screen.getByRole('button');
  expect(btnEl).toBeInTheDocument();
})
