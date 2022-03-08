/*Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

    >> Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
    >> Um ângulo será considerado inválido se não tiver um valor positivo. */

const angA = 10;
const angB = 60;
const angC = -90;

const somaInt = angA + angB + angC;

let isTriangle = false;

if (angA < 0 || angB < 0 || angC < 0){
    console.log ("Foi digitado um valor negativo para um dos ângulos!");
}
else if (somaInt == 180) {
    isTriangle = true;
    console.log (isTriangle);
} else {
    console.log (isTriangle);
}