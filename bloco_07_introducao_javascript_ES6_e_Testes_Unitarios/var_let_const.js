//! Tente rodar a função userInfo no seu editor de código. Nesse caso, a variável userEmail foi declarada dentro do escopo da função userInfo . Agora experimente mover o console.log(userEmail) para fora da função e a execute novamente. Você verá um erro dizendo que userEmail não é definida - a variável só é reconhecida dentro do escopo da função. O que aconteceria se trocássemos o let por var e const ? Não deixe de fazer esse teste! Você verá que nos três casos, não temos acesso à variável fora do escopo da função userInfo . Como saber, então, qual expressão utilizar para declarar variáveis?

function userInfo() {
  let userEmail = "maria@email.com";

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
userInfo();
//console.log(userEmail);

//! Nesse exemplo, temos acesso à variável userAge dentro e fora do bloco de código. Experimente trocar o var por let e const . Qual será o resultado? Temos acesso à variável declarada com o var dentro e fora do escopo do bloco. No entanto, não temos acesso à userAge fora do bloco de código quando usamos let e const para declarar essa variável. Isso é interessante quando queremos trabalhar com variáveis acessíveis apenas no contexto daquele bloco de código. Por ter um escopo mais abrangente, em aplicações mais complexas declarar variáveis com o var pode confundir até mesmo programadores mais experientes.

if (true) {
  // inicio do escopo do if
  var userAge = "20";
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20

//! Outro grande problema ao utilizar o var para atribuir valor à variáveis é que você consegue sobrescrevê-las sem gerar erros. Em aplicações maiores, você pode redeclarar variáveis acidentalmente e nem perceber o que aconteceu quando usamos o var . Por isso, encontrar e corrigir bugs pode se tornar uma verdadeira missão impossível. Por estes motivos, declarar variáveis com o var não é uma boa prática.

var userName = "Isabella";
var userName = "Lucas";
console.log(userName); // Resultado: Lucas

//! O ES6 corrige esse problema ao introduzir o let e o const , fazendo com que uma variável, com um nome específico, só possa ser declarada uma única vez dentro de um escopo. Experimente executar o exemplo anterior usando o let e const e veja o que acontece! E quanto ao const , como ele se diferencia do let ? O const permite que você declare constantes . Em outras palavras, o valor atribuído a uma variável declarada com o const não pode ser alterado. Já quando usamos o let , podemos substituir o valor original atribuído à variável. Tente executar o código abaixo usando o const e let e veja o que acontece!

// const favoriteLanguage = 'Javascript';
// favoriteLanguage = 'Python';
// console.log(favoriteLanguage); // Erro

// let favoriteTechnology = 'Machine learning';
// favoriteTechnology = 'Facial recognition';
// console.log(favoriteTechnology); // Facial recognition

//! No exemplo acima, vimos que o const é imutável - ao declarar const favoriteLanguage = 'Javascript' o valor de favoriteLanguage não pode ser alterado. Mas quando usamos o const para criar um objeto, o Javascript nos permite alterar as suas propriedades sem, contudo, reatribuir um novo objeto. Acompanhe o exemplo abaixo para entender melhor como funciona:

const userData = {
  name: 'Cláudio',
  id: '5489-2',
  email: 'claudio@email.com',
};

userData.name = 'João';

console.log(userData); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

//! Esse raciocínio também se aplica a um array. Podemos alterá-lo indiretamente adicionando/removendo um novo item sem sobrescrever o que já foi declarado:

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

// technologies = ['Javascript', 'CSS', 'HTML', 'React']
// console.log(technologies); // Erro