import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("alterando o valor dos campos e testando o valor guardado", () => {
  render(<App />);
  const inputName = screen.getByRole('textbox', { name: /nome:/i});
  expect(inputName).toBeInTheDocument();
  expect(inputName).toHaveValue('');
  userEvent.type(inputName, 'Estudante da Trybe');
  expect(inputName).toHaveValue('Estudante da Trybe');

  const inpuMail = screen.getByRole('textbox', { name: /email:/i });
  expect(inpuMail).toBeInTheDocument();
  expect(inpuMail).toHaveValue('');
  userEvent.type(inpuMail, 'estudante@trybe.com.br');
  expect(inpuMail).toHaveValue('estudante@trybe.com.br');
})