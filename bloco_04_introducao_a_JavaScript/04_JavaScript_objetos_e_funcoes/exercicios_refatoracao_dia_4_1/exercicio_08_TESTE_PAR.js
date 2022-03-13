// ?Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false . */

/* const num1 = 12;
const num2 = 15;
const num3 = 42; */

function isEven(num1, num2, num3) {
    
    let paridade = false;

    if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
        paridade = true;
        return paridade;
    }

    return paridade;
}

console.log(isEven(1, 13, 21));
