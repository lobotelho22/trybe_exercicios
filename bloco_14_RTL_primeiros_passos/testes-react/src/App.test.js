import React from 'react';
import { findByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

test('Verificando se o botão e o campo email estão funcionando', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com.br';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent(/Valor:/g);

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
})

it('Verificando a chamada da API dos cachorros...', async () => {
  const returned = ['https://images.dog.ceo/breeds/husky/20180901_150234.jpg', 'https://images.dog.ceo/breeds/husky/20180904_185604.jpg'];

  // jest.spyOn(global, 'fetch');
  // global.fetch.mockResolvedValue({
  //   json: jest.fn().mockResolvedValue(returned),
  // });

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(returned),
  });
  
  render(<App />);
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://dog.ceo/api/breed/husky/images');
  // const loaded = await screen.findByText(/Doguinhos/i)
  // console.log(loaded);
})