/* Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

const a = 2**12;
const b = 4096%4;
const c = 10**5;

function biggerThan() {

    if (a > b && a > c) {
        return `O maior número é:${a}`;
    }
    else if (b > a && b > c) {
        return `O maior número é:${b}`;
    }
    else if (c > a && c > b) {
        return `O maior número é:${c}`;
    }
    else {
        return `Os números são iguais...`
    }

}

console.log(biggerThan());