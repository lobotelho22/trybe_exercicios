/* A estrutura Switch / Case funciona como um encadeamento de testes lógicos de tipo "If ... Else If". Tomemos como exemplo um resultado de prova, que retorna três condições: aprovado, lista ou reprovado. */

let resultadoFinal = "reprovada";

switch (resultadoFinal) {
    case "aprovado":
        console.log("Parabéns, cumpriu a missão!");
        break;
    case "aprovada":
        console.log("Parabéns, cumpriu a missão!");
        break;
    case "lista":
        console.log("não desanime, você está na lista de espera e uma vaga pode ser sua!");
        break;
    case "reprovado" :
        console.log("não foi dessa vez, tente em uma outra oportunidade.")
        break;
    case "reprovada":
        console.log("não foi dessa vez, tente em uma outra oportunidade.");
        break;
    default:
        console.log("não se aplica");
}