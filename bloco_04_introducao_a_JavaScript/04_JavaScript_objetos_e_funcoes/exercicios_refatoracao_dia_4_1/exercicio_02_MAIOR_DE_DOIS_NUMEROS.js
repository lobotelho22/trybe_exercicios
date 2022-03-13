/*
?Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
*/

const a = 15;
const b = 46;

function biggerThan() {
  if (a > b) {
    return `o maior número é:${a}`;
  } else if (b > a) {
    return `o maior número é:${b}`;
  } else {
    return "não há maior, são iguais";
  }
}

console.log (biggerThan());