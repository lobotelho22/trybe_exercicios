/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false . */

const num1 = 12;
const num2 = 16;
const num3 = 42;

let isOdd = false;

if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
    isOdd = true;
    console.log(isOdd);
} else {
    console.log (isOdd);
}