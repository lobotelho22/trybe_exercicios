// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

/* let listaDivisores = []; // vou usar essa array para contar os divisores de um número
let primo = 0; // aqui eu vou armazenar o resultado

for (i = 2; i <= 50; i += 1) {
  // faço a iteração até o número que eu procuro

  for (j = i; j >= 1; j -= 1) {
    // aqui eu itero o número e caso ele seja primo a array vai ter dois elementos
    if (i % j === 0) {
      listaDivisores.push(j);
    }
  }

  if (listaDivisores.length == 2) {
    // aqui eu defino o primo como o i que tem array.length = 2
    primo = i;
  }

  listaDivisores = [];
}

console.log(primo);

// BÔNUS

// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n = 5;
let ast = "*";

for (i = 1; i < n; i += 1) {
  ast += "*";
}

for (j = 0; j < n; j += 1) {
  console.log(ast);
}

console.log("\n"); */

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

/* let k = 8;
ast2 = "";

for (m = 0; m < k; m += 1) {
  ast2 += "*";
  console.log(ast2);
}

console.log('\n') */

// 3- Agora inverta o lado do triângulo.

/* let numLinhas = 15;
let linha = "";

for (let x = 1; x <= numLinhas; x++) {
  
  for (let y = numLinhas - x; y > 0; y--) { //aqui se colocam os espacos, de acordo com o numero de linhas e o contador do laço for mais externo
    linha += " ";
  }

  for (let z = numLinhas - x; z < numLinhas; z++) { // aqui se colocam os asteriscos, de acordo com o num de linhas e o contador do laço for mais externo
    linha += "*";
  }

  console.log(linha); //imprime a linha
  linha = ""; // limpa a linha para o próximo loop
} */

//4- Depois, faça uma pirâmide com n asteriscos de base:

// <-- Declaração das nossas variáveis -->

/* let numLinhas = 15;       // Aqui entra a quantidade de linhas da pirâmide
let linhaImpressa = "";   // gera para o console o que vai ser exibido em cada linha
let numAsterisco = 1;     // contagem do número de asteriscos
let numEspaco = 0;        // contagem do número de espaços

for (j = numLinhas; j > 0; j -= 2) {    // laço para gerar as linhas da pirâmide
    
    numEspaco = numLinhas - numAsterisco;   // calcula o numero de espaços por linha
    
    for (k = numEspaco / 2; k > 0; k -= 1) {    // gera espaços laterais
        linhaImpressa += " ";
    }
    
    for (p = numAsterisco; p > 0; p--) {        // gera os asteriscos centrais
        linhaImpressa += "*";
    }

    for (k = numEspaco / 2; k > 0; k -= 1) {    // gera espaços
        linhaImpressa += " ";
    }

    console.log (linhaImpressa);    // imprime linha
    linhaImpressa = "";             // limpa a linha para reescrever
    numAsterisco += 2;              // progride a contagem de asteriscos por linha
} */
