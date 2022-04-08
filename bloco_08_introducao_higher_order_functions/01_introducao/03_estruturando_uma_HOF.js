// Vamos construir este conceito passo a passo para que você possa compreender e aplicar na sua jornada como pessoa desenvolvedora. Para isto, é extremamente importante ter em mente que as HOF nos permitem compactar ações e não somente repassar valores. Veja este exemplo:

/* const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.log); */

// Construímos essa função para implementar um laço de repetição entre 0 e um número especificado via parâmetro ( number ) e para mostrar no console o valor da variável count de 0 a N ( number ). O console.log é uma função própria do JavaScript , mas veja que fica mais simples caso você precise substituir esta ação para console.table ou console.group .

// Vamos aumentar um pouco o nível de complexidade e visualizar como podemos ir construindo funções mais especializadas e bem definidas. Veja este exemplo:

const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(3, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });