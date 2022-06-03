import React from "react";
import { render, screen } from "@testing-library/react";
import ValidEmail from "../components/ValidEmail";

test("Testando um componente, caso o email seja válido", () => {
    const EMAIL_USER = 'email@email.com.br';

    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByRole('heading', { level: 3 , name: /email válido/i });
    expect(isValid).toBeInTheDocument();
})

test("Testando um componente, caso o email seja inválido", () => {
    const EMAIL_USER = 'qualquer coisa que não seja um email';
    
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByRole('heading', {level: 3, name: /email inválido/i })
    expect(isValid).toBeInTheDocument();
})