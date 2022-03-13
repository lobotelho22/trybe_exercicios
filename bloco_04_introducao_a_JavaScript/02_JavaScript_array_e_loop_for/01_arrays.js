// A array é um tipo de variável COMPOSTA. Neste tipo de variável conseguimos armazenar uma diversidade de valores. Por exemplo, poderíamos a armazenar os sabores do cardápio de uma pizzaria em uma array:

let cardapio = ["4 queijos", "frango com catupiry", "marguerita", "palmito", "chocolate"];
console.log (cardapio); // ao chamarmos o console.log o sistema nos retornará todos os valores de pizzas inseridos em nossa variável cardápio

console.log ("menu de sabores: " + cardapio); //Dessa forma os elementos do array são apresentados "inline" com a string.

/* Incluindo elementos em uma Array

Caso queiramos incluir elementos em uma Array, podemos fazê-lo de modo direto. Arrays tem sua contagem iniciada a partir do elemento 0. O console.log abaixo retorna o valor "4 queijos:" */

console.log (cardapio[0]);

// Portanto nossa array cardápio tem como último elemento cardapio[4] = "chocolate". Se quizermos anexar um elemento a nossa array, podemos declará-lo diretamente:

cardapio[5] = "peito de peru"; // adicionamos o sabor peito de peru
console.log ("menu de sabores: " + cardapio); //temos um novo resultado, com 6 sabores

/* 
Há no entando o inconveniente de não sabermos a externsão de uma Array. Neste Caso, ao declararmos um elemento, corremos o risco de substituí-lo, causando problemas ao nosso código.

Para efetuarmos a adição de um elemento a uma array, de modo seguro, podemos utilizar o método .push(), que colocará o valor indicado no final da array. Vejamos o exemplo: */

cardapio.push("presunto");
console.log ("menu de sabores: " + cardapio); //temos um novo resultado, com a inclusão do sabor presunto

/* Caso a intenção seja adicionar um elemento ao início da lista, podemos utilizar o método .unshift(): */

cardapio.unshift("romana");
console.log ("menu de sabores: " + cardapio); // o sabor "romana" foi incluído no início da lista

/* Para sabermos o número de elementos (tamanho) de uma lista, podemos utilizar o método .length(), que retorna o número total de elementos da array chamada (neste caso, iniciando a contagem em 1). Nossa array cardapio, retorna 7, por exemplo: */

console.log(cardapio.length); // -> 8

/* Podemos ordenar uma array com o método .sort(). No caso do nosso cardápio, ele ficará em ordem alfabética: */

console.log (cardapio.sort());

//Acessamos os valores de uma array indicando seu número entre colchetes:

console.log(cardapio[0]);
console.log(cardapio[2]);
console.log(cardapio[6]);

// Para removermos itens de uma array, utilizamos os métodos .pop() e .shift(), que removem, respectivamente, os itens do final e do início da lista:

cardapio.pop();
cardapio.shift();
console.log ("menu de sabores: " + cardapio); //removemos os itens cardapio[7]="presunto" e cardapio[0]="4 queijos"

// Podemos usar o método .indexOf() para buscarmos a posição de um item em uma array:

let indexOfPizza = cardapio.indexOf('presunto');
console.log (indexOfPizza);