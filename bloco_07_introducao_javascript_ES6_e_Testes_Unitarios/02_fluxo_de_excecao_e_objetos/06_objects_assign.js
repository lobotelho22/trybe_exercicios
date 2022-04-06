// Esse método é utilizado para copiar os valores de todas as propriedades de um ou mais objetos para um objeto destino. Sua estrutura é:

//ele recebe pelo menos dois parâmetros, de forma que o primeiro sempre será o objeto de destino, e os parâmetros restantes serão os valores que serão adicionados a esse objeto destino.

const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family);
  console.log(person);
  

  // Como você pode ver, o método Object.assign adicionou as propriedades de info e de family ao objeto person . Observe também que a chave age aparece tanto em person como em info e é sobrescrita pelo valor contido em info . Isso acontece quando há propriedades repetidas entre o objeto destino e os objetos passados por parâmetro, de forma que a propriedade do objeto destino sempre utilizará o último valor disponível.