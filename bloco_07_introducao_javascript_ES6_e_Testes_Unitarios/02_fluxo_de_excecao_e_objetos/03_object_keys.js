// Como você já sabe, objetos são um dos tipos de dados em JavaScript que possuem uma estrutura de chave e valor. Dê uma olhada no exemplo a seguir e pense como você poderia listar as chaves desse objeto:

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };

  // Uma ideia inicial é utilizar um 'for in' ou qualquer estrutura similar de loop

  /* for (const property in coolestTvShow) {
    console.log(property);
  } */

  //! Uma alternativa interessante é o método Object.keys, que retorna cada uma das chaves de um objeto como um elemento do tipo string, em uma array:

  const listaKeysDeObjeto = Object.keys(coolestTvShow);
  console.log(listaKeysDeObjeto);
  console.log(typeof(listaKeysDeObjeto));