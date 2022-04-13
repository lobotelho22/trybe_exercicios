// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  let counter = array.reduce((acc, name, index, lista) => {
    name = name.toLowerCase();
    for (let i = 0; i < name.length; i += 1) {
      if (name[i] === 'a') {
        acc += 1;
      }
    }
    return acc;
  }, 0);
  return counter;
};

console.log(containsA(names));