// O reduce é diferente das outras HOFs : ele possui um parâmetro a mais para a função que recebe como parâmetro. Esse parâmetro é chamado de acumulador , comumente referido como acc . E o que ele faz? Ele serve para acumular dentro de si os resultados das funções. Pense assim: caso não exista segundo parâmetro no reduce , para um array de cinco elementos, o reduce executará a função passada como parâmetro quatro vezes. O valor inicial de acc será a primeira posição do array. Na primeira iteração ele realiza a função com o primeiro valor do array que está em acc com a segunda posição que está em seu segundo parâmetro curr , que é chamado de current . Na segunda vez, acc conterá o retorno da primeira iteração, na terceira, o retorno da primeira e da segunda, e assim por diante. Olhe no exemplo abaixo:

// ! A função soma todos os valores de um array:

const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Hora de olhar outro exemplo para fixar e mostrar outras formas de se usar o reduce . Neste exemplo, serão comparados valores para buscar o maior valor em um array.

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0); // O 0 aqui define o valor inicial de bigger, na função getBigger, que funciona como o acumulador de nossa reduce
console.log(bigger); // 56