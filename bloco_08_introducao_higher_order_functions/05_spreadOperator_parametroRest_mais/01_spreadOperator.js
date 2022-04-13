// O operador spread (...) é um recurso útil para manipulação de objetos e arrays, sem comprometer o objeto fonte. É um modo de copiar as informações do array original para outro lugar, como no exemplo abaixo, em que a array numbers permanece inalterada.

const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

// O spread é muito útil também quando precisamos combinar arrays em uma única estrutura, como ilustrado abaixo:

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

// Podemos utilizar o sprea como parâmetro de entrada em uma função, como no exemplo abaixo, que calcula o IMC de uma pessoa, a partir dos dados de entrada em uma array:

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [90, 1.78];

console.log(imc(...patientInfo)); // 28.41

// Podemos, incluive utilizar deste artifício em funções prontas do JavaScript que recebem múltiplos parâmetros, como Math.max e Math.min, por exemplo:

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

// Podemos utilizar os mesmos princípios em objetos:

const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };
  
  const customer = { ...people, ...about };
  console.log(customer); /* {
    id: 101,
    name: 'Alysson',
    age: 25,
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer'
  } */

  // As linhas abaixo demonstram que ao manipularmos o objeto costumer, não alteramos os valores originais dos objetos que foram combinados para sua criação:

  customer.occupation = 'Designer de Interiores';
  console.log(customer);
  console.log(about);

  