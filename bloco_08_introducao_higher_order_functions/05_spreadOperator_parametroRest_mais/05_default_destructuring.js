// Quando tentamos acesar propriedades não existentes em um objeto, temos o retorno undefined. Isso pode ser um incômodo ao fazermos a desestruturação de um objeto. Por conta disso, podemos definir valores padrões para evitarmos o problema. Por exemplo:

const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
};

/* const { nationality } = person; // se acessamos uma propriedade não existente do objeto...
console.log(nationality); // ...o código retornará UNDEFINED */

// No entanto, se usamos o default destructuring, definindo um valor padrão ao objeto, evitamos o problema.

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian

// Se, por acaso, o objeto possuir um valor para a propriedade indicada, o valor retornado, ao invés do padrão, será o valor indicado pelo objeto.

// Em analogia, podemos aplicar o mesmo procedimento a uma array:

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0