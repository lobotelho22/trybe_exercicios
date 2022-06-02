import { render, screen } from '@testing-library/react';
import App from './App';

test('está renderizando na tela um campo de emmail?', () => {
  render(<App />);
  const emailFormEl = screen.getByLabelText(/email/i);
  expect(emailFormEl).toBeInTheDocument();
  expect(emailFormEl).toHaveProperty('type', 'email');
});

it('Verifica se aparecem dois botões', () => {
  render(<App />);
  const btnEl = screen.getAllByRole('button');
  // console.log(btnEl[1].value);
  expect(btnEl).toHaveLength(2);
})

it('verificando a existência do botão Enviar', () => {
  render(<App />);
  const btnSendEl = screen.getByTestId('id-send');
  expect(btnSendEl).toBeInTheDocument();
  expect(btnSendEl).toHaveProperty('type', 'button');
  expect(btnSendEl).toHaveValue('Enviar');
})