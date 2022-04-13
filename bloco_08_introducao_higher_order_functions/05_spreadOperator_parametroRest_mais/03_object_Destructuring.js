// Desestruturação de Objeto ou Object Destructuring .

// A sintaxe da desestruturação de objetos pede para passarmos o nome das propriedades que queremos acessar do lado esquerdo, entre chaves, e o objeto do lado direito:

// Esse é o nosso objeto exemplo
/* const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};

// Desetruturamos ele seguindo a sintaxe indicada:

const { name, seller } = product;

console.log(name); // 'Smart TV Crystal UHD'
console.log(seller); // 'Casas de Minas' */

// Vale lembrar também que podemos adicionar quantas propriedades forem necessárias dentro das chaves, basta seguirmos a sintaxe da desestruturação de objetos. Você deve estar se perguntando. "E se a chave do objeto contiver outro objeto como valor?" Veja o exemplo abaixo e entenda como podemos resolver este problema:

// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };

// Queremos extrair o nome do personagem, a idade, o nome do planeta e verificar se ele é um Jedi. Depois de feito, precisamos imprimir essas informações no console.log() , para isso, vamos utilizar a desestruturação de objetos:

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// Como foi mostrado, para desconstruir uma chave que contém um objeto como valor, precisamos utilizar o nome da chave seguido por : , segue a sintaxe: homeWorld: { name: planetName } . Agora planetName é uma variável que recebe o valor da propriedade name do objeto homeWorld .

