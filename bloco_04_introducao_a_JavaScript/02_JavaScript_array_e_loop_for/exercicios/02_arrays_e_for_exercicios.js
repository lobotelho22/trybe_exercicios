// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let num of numbers) {
    console.log (num);
}

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let somaTotal = 0;

for (let num of numbers) {
    somaTotal += num;
}

console.log ("o valor total da soma dos itens é:", somaTotal);

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let mediaAritmetica = somaTotal / (numbers.length);

console.log ("O valor da média atitmética é:", mediaAritmetica);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (mediaAritmetica > 20) {
    console.log ("valor maior que 20");
} else {
    console.log ("valor menor ou igual a 20");
}

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorNum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (maiorNum < numbers[i]){
        maiorNum = numbers[i];
    }
}

console.log ("O maior número da lista é:", maiorNum);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let valoresImpares = [];

for (let j = 0; j < numbers.length; j+= 1) {
    if (numbers[j] % 2 !== 0) {
        valoresImpares.push(numbers[j])
    }
}

if (valoresImpares.length === 0){
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log ("Os valores ímpares da array são:", valoresImpares);
}

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorNum = numbers[0];

for (let k = 0; k < numbers.length; k += 1) {
    if (menorNum > numbers[k]){
        menorNum = numbers[k];
    }
}

console.log ("O menor número da lista é:", menorNum);

// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let array25 = [];

for (n = 0; n < 25; n += 1) {
    array25[n] = n+1;
}

console.log ("Nossa tabela 25 é: " + array25);

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

array25Por2 = []

for (p = 0; p < array25.length; p += 1) {
    array25Por2[p] = array25[p] % 2;
}

console.log ("Nossa tabela 25 dividida por 2: " + array25Por2);