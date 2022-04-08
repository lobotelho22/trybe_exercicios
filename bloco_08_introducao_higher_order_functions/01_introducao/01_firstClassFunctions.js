// Uma linguaguem é dita ter First-Class Functions quando trata suas funções como first class citizens (isto é, cidadãos de primeira classe), ou seja, elas suportam as mesmas operações que estão disponíveis para os outros tipos. Isso significa que nossas funções podem ser atribuídas à variáveis, passadas como argumento e/ou retornadas por outras funções. JavaScript é uma linguagem que utiliza esse conceito, portanto podemos:

//! ATRIBUIR FUNÇÕES À VARIÁVEIS

// Uma arrow function é um bom exemplo: declaramos uma constante e atribuímos a ela o valor de uma função.


//Aqui, outro exemplo: passamos a funcção sayHello como atributo para a função printGreeting: ou seja, utilizamos função como argumento para outra função

const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);

// Retornar uma função de outra função:

const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(30);
  console.log(initialSum(15));