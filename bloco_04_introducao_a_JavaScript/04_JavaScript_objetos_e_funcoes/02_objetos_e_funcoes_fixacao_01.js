// ! Agora vamos fazer alguns exercícios de fixação para consolidar os conhecimentos adquiridos no video anterior! 😉

// ? 1 - Crie um objeto player contendo as variáveis listadas abaixo.

/* let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 }; */


let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 }
}

console.log ("A jogadora " + player['name'] + " da " + player['lastName'] + " tem " + player['age'] + " de idade");

// ? 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// ? Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log ("A jogadora " + player.name + " da " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.");

// ? 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player['medals']['silver'] + " medalhas de prata.");