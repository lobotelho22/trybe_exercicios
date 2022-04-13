// Agora que você entende como a desestruturação funciona, você pode estar se perguntando: será que ela também se aplica a arrays ? Afinal de contas, arrays são objetos iteráveis e têm algumas similaridades com os objetos em Javascript... Este questionamento é válido, e a resposta é: SIM! Podemos desestruturar arrays da mesma forma que desestruturamos objetos usando a notação para array destructuring .

// procedemos com a desestruturação com sintake semelhante, atuando em cada posição da array, como no exemplo abaixo:

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada