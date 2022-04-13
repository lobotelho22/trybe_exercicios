// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'banana', 'cupuaçu'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'leite condensado', 'açúcar'];

const fruitSalad = (fruit, additional) => {
  const saladaPronta = [...fruit, ...additional];
  return saladaPronta;
};

console.log(fruitSalad(specialFruit, additionalItens));