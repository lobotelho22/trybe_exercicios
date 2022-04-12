// Faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const filtraPares = (number) => number % 2 === 0;
const realizaSoma = (soma, number) => soma + number;
const somaPares = numbers.filter(filtraPares).reduce(realizaSoma);

console.log(somaPares);