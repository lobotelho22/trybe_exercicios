// 1 - Dada uma matriz, transforme em um array.

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

const teste = arrays.reduce(((acc, array) => acc.concat(array)),[])

console.log(teste);

/* function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
} */