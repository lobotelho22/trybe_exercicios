/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

    Porcentagem >= 90 -> A
    Porcentagem >= 80 -> B
    Porcentagem >= 70 -> C
    Porcentagem >= 60 -> D
    Porcentagem >= 50 -> E
    Porcentagem < 50 -> F
    O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.  */

let nota = 30;

if (nota > 100) {
  console.log("Digite uma nota válida (entre 0 e 100).");
} else if (nota >= 90) {
  nota = "A";
  console.log("sua nota foi ", nota);
} else if (nota >= 80) {
  nota = "B";
  console.log("sua nota foi ", nota);
} else if (nota >= 70) {
  nota = "C";
  console.log("sua nota foi ", nota);
} else if (nota >= 60) {
  nota = "D";
  console.log("sua nota foi ", nota);
} else if (nota >= 50) {
  nota = "E";
  console.log("sua nota foi ", nota);
} else if (nota < 50) {
  nota = "F";
  console.log("sua nota foi ", nota);
} else {
  console.log("Digite uma nota válida (entre 0 e 100).");
}
