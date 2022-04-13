// O operador spread (...) é um recurso útil para manipulação de objetos e arrays, sem comprometer o objeto fonte. É um modo de copiar as informações do array original para outro lugar, como no exemplo abaixo, em que a array numbers permanece inalterada.

const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

