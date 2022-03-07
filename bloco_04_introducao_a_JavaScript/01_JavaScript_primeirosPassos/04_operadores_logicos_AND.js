/* A linguagem JavaScript possui três operadores lógicos: AND (&&), OR (||) e NOT (!). A principal função desses operadore é determinar a lógica entre dois valores ou variáveis.

O operador AND é binário e, portanto, depende de dois elementos para operar. Sua condição é que ao realizar duas etapas de testes, ambos devem retornar como verdadeiros, para que a condição seja válida. Por exemplo:

    João comeu hambúrger E bebeu coca-cola.

A sentença acima só será considerada verdadeira no caso de João ter efetuado as duas coisas. Caso ele só tenha comido hamburguer ou só tenha bebido coca-cola, a sentença é falsa.
*/

const currentHour = 15.50;
let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
}
else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
}

console.log (message);