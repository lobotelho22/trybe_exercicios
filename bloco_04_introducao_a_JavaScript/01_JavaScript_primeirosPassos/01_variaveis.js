let age = 20;
const fullName = "Flamel";

console.log(age);
console.log(fullName);

/* OBS: Variáveis não podem ter espaços ou começar por números. Emc caso de ser necessário utilizar termos compostos, a alternativa é usar o modelo de camelCase (como em fullName), onde o primeiro termo se inicia com letra minúscula e os seguintes em letras maiúsculas*/

/* Variáveis são case sensitive!!! */

/* Variáveis declaradas com o "let" podem ser reatribuídas. Portanto, se determinarmos um novo valor para age, abaixo, e chamarmos o console, nosso resultado será alterado para o novo valor declarado */

age = 30;

console.log(age);

/* Variáveis declaradas com o comando "const" não podem ser reatribuídas. Portanto, se tentarmos alterar o valor da nossa variável "fullName", o sistema nos retornará um erro: */

fullName = "Raymond"

console.log(fullName)