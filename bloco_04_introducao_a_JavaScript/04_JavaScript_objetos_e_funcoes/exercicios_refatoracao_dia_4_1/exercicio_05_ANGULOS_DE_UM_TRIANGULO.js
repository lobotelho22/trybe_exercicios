/*
? Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

?    >> Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
?    >> Um ângulo será considerado inválido se não tiver um valor positivo.
*/

const angA = 30;
const angB = 60;
const angC = 90;

function isAngleValid (angA, angB, angC) {
  let isTriangle = false;
  const somaInt = angA + angB + angC

  if (angA < 0 || angB < 0 || angC < 0) {
    isTriangle = false;
    return isTriangle;
  } else if (somaInt == 180) {
    isTriangle = true;
    return isTriangle;
  } else {
    isTriangle = false;
    return isTriangle;
  }
}

function sumAngles (isAngleValid, angA, angB, angC) {
  if (isAngleValid == true) {
    let sumAngs = angA + angB + angC;  
    return "a soma dos ângulos do triângulo é: " + sumAngs;
  } else {
    return "não é um triângulo, rapá!"
  }
}

  let valid= isAngleValid(angA, angB, angC);

  console.log (valid);
  console.log (sumAngles(valid, angA, angB, angC));