/* Tipos primitivos são, basciamente dois: os tipos de referência e os tipos de valores. No exemplo abaixo, por exemplo, podemos classificas nossas variáveis:*/

let movie = "Avengers"; // tipo de valor: string literal
let score = 10.89; // tipo de valor: number literal
let isValid = true // tipo de valor: boolean
let nameP; // tipo de valor: undefined
let color = null; // tipo de valor: null

console.log(typeof movie); // o comando typeof identifica o tipo de valor de uma variável
console.log(typeof color);

// O JavaScript possui tipagem dinâmica, portanto podemos atribuir novamente valores às nossas variáveis -- lembre-se, utilizamos o let, alterando o tipo de valor da variável

movie = 30.3333;
console.log(typeof movie);

// Podemos efetuar operações matemáticas em JavaScript:

let salary = 3500;

console.log(salary + salary); // somamos o valor do salário a ele mesmo
console.log(salary * salary); // multiplicamos o valor do salário por ele mesmo
console.log(salary / salary); // dividimos o valor do salário por ele mesmo
console.log(salary - salary); // subtraímos o salário por ele mesmo
console.log(salary ** 3); // aqui elevamos o salário ao cubo

// Podemos incrementar ou decrementar um valor (adicionar ou subtrair 1):

salary++;

console.log (salary);

salary--;

console.log (salary);