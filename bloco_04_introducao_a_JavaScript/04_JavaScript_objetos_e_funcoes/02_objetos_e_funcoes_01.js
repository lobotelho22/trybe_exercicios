let car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

// *Para acessa chaves dentro de um objeto utilizamos pontos ou colchetes. Exemplo:

console.log(car.type);
console.log(car["model"]);

// *Se o objeto está dentro de um array , ele é acessado através do seu índice, da mesma forma que se acessaria uma informação num array de strings , por exemplo. Após pegar o objeto que você deseja, para acessar suas propriedades basta usar a notação de colchetes ou a notação de ponto . O mesmo vale para acessar objetos dentro de objetos. Aqui o acesso só funcionará se realizado com os colchetes. Bem como se as chaves de um objeto estiverem indexadas por números:

let diasDaSemana = {
  1: "domingo",
  2: "segunda",
  3: "terça",
  4: "quarta",
  5: "quinta",
  6: "sexta",
  7: "sábado",
};

// diasDaSemana.1;
// ! SyntaxError: Unexpected number -> se descomentado a linha acima

console.log(diasDaSemana["1"]); // domingo
