// Trecho copiado do enunciado:

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

// fim do trecho copiado

// Precisamos identificar através e exibir pelo console.log o tipo de cada variável declarada no trecho do código acima

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

console.log(typeof patientAge); //observe que ao tentarmos identificar o tipo de uma variável não declarada, o valor assumido é undefined

patientId = '50';

console.log(typeof patientId); // observe que ao ser redeclarada como '50'