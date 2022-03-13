/*
    ?1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

    ? Adição (a + b)
    ? Subtração (a - b)
    ? Multiplicação (a * b)
    ? Divisão (a / b)
    ? Módulo (a % b)
*/

let a = 1046;
let b = 42;

// ADIÇÃO
//* <função adição>

function adicao() {
  let soma = a + b;
  return soma;
}

console.log("o valor da soma é " + adicao());

// SUBTRACAO
//* <função subtração>

function subtracao() {
    let diferenca = a - b;
    return diferenca;
}

console.log("O valor da subtração é: " + subtracao());

// MULTIPLICACAO
//* <função multiplicacao>

function multiplicacao() {
    let produto = a * b;
    return produto;
}

console.log("o valor da multiplicação é: " + multiplicacao());

// DIVISAO
//* <função divisao>

function divisao() {
    let quociente = a / b;
    return quociente;
}

console.log("O valor da divisão é: " + divisao());

// MODULO - "RESTO"
//* <função modulo>

function modulo() {
    let resto = a % b;
    return resto;
}

console.log("O resto da divisão é: " + modulo());
