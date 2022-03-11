// * o laço for/in , o código que mostra as marcas de carros presentes em um Array é:

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

// * Um outro exemplo é a iteração nas chaves de um objeto:

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

// ! FOR OF

// * O for/of tem uma aplicação bastante parecida com o que vimos agora no for/in , mas com uma diferença crucial.

// * Enquanto o for/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades, ou seja, nos retorna o índice. Por exemplo, se tivermos um array com três strings dentro:

let food = ['hamburguer', 'bife', 'acarajé'];

for (let position in food) {
    console.log(position);
  }; // ? resultado: 0, 1, 2;
  
// * Se percorrermos um objeto, também teremos o mesmo resultado. O for/in irá percorrer a propriedade declarada, e não o seu valor em si.

//* Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in . Vejamos o exemplo: 

for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;
