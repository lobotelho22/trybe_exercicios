/* Faça uma função que retorne o array oddsAndEvens em ordem crescente:

    - Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
    
    - Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
*/

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const sortNumericArray = array => array.sort((a, b) => a - b);

console.log(`Os números ${sortNumericArray(oddsAndEvens)} se encontram ordenados de forma crescente`); // será necessário alterar essa linha 😉

const sortDecreasingNumericArray = array => array.sort((a, b) => b - a);

console.log(`Os números ${sortDecreasingNumericArray(oddsAndEvens)} se encontram ordenados de forma decrescente`);