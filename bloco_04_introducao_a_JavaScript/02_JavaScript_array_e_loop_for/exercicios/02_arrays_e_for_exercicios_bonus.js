let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Ordene o array numbers em ordem crescente e imprima seus valores;

let elementoMaior = 0;
let elementoMenor = 0;

for (i = 0; i < numbers.length; i += 1) {
    elementoMaior = numbers[i];
    for (j = 0; j < numbers.length; j += 1) {
        if (elementoMaior < numbers[j]){
            elementoMenor = numbers[i];
            elementoMaior = numbers[j];
            numbers[j] = elementoMenor;
            numbers[i] = elementoMaior;
        }
    }
}
console.log ("\n1 - Ordene o array numbers em ordem crescente e imprima seus valores:");
console.log ("tabela em ordem crescente: " + numbers);


// 2 - Ordene o array numbers em ordem decrescente e imprima seus valores;

for (k = 0; k < numbers.length; k += 1) {
    elementoMaior = numbers[k];
    for (m = 0; m < numbers.length; m += 1) {
        if (elementoMaior > numbers[m]){
            elementoMenor = numbers[k];
            elementoMaior = numbers[m];
            numbers[m] = elementoMenor;
            numbers[k] = elementoMaior;
        }
    }
}

console.log ("\n2 - Ordene o array numbers em ordem decrescente e imprima seus valores");
console.log ("tabela em ordem decrescente: " + numbers);

// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbersProduto = [];

for (n = 0; n < numbers.length; n += 1) {
    if (n+1 < numbers.length){
        numbersProduto.push(numbers[n] * numbers[n+1]);
    }
    else {
        numbersProduto.push(numbers[n] * 2);
    }

}

console.log ("\nAgora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push: ");
console.log ("\n", numbersProduto);