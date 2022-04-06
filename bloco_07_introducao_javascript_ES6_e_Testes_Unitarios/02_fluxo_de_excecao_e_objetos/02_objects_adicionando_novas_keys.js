// Veja o exemplo abaixo de um objeto que contém as informações de um cliente de uma loja:

const customer = {
  firstName: "Roberto",
  age: 22,
  job: "Teacher",
};

// Se precisamos incluir uma nova key (chave) ao elemento, o sobrenome, por exemplo, poderíamos reescrever a constante, adicionando a chave desejada
// Existem outras formas, mais eficientes de fazer o que queremos:

//! 1 - adicionando utilizando o formato o.k='v'

/* customer.lastName = 'Faria';
console.table(customer); */

//! 2 - podemos utilizar o formato o['k']='v'

/* customer['birthDate'] = '12/04/1999';
console.table(customer); */

//! 3 - podemos adicionar chaves e valores através de variáveis

const lastName = 'lastName';
const wordName = 'Faria';
customer[lastName] = wordName;
console.table(customer);

//! Utilizamos do mesmo expediente já visto, para acessarmos os valores de determinadas chaves de um objeto

const fullName = `${customer.firstName} ${customer.lastName}`;
console.log(fullName);