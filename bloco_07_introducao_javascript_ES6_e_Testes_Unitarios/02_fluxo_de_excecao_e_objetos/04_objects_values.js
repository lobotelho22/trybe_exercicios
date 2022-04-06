// O Object.values segue a mesma lógica que o Object.keys , a diferença está em que ele lista os valores de cada chave. Voltando ao nosso exemplo anterior, como faríamos para listar os valores de cada chave do nosso objeto coolestTvShow?

const coolestTvShow = {
    name: "Big Bang Theory",
    genre: "Comedy",
    createdBy: "Chuck Lorre & Bill Prady",
    favoriteCharacter: "Sheldon Cooper",
    quote: "Knock, knock, Penny! Knock, knock, Penny! Knock, knock, Penny!",
    seasons: 12,
  };

  let piball = 'tru'

  console.log(Object.values(coolestTvShow));
  