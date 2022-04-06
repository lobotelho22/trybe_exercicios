// Um pouco diferente dos métodos apresentados anteriormente, este retorna um array cujos elementos são também arrays para cada conjunto chave e valor do objeto.

const coolestTvShow = {
    name: "Big Bang Theory",
    genre: "Comedy",
    createdBy: "Chuck Lorre & Bill Prady",
    favoriteCharacter: "Sheldon Cooper",
    quote: "Knock, knock, Penny! Knock, knock, Penny! Knock, knock, Penny!",
    seasons: 12,
  };

  console.log(Object.entries(coolestTvShow));

  //Podemos acessar entradas específicas, utilizando o que já conhecemos das arrays

  const bigBangData = Object.entries(coolestTvShow);
  console.log(bigBangData[2][1]);