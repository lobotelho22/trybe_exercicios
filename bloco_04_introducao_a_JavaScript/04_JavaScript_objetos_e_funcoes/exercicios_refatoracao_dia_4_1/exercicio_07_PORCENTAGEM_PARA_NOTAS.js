/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

    Porcentagem >= 90 -> A
    Porcentagem >= 80 -> B
    Porcentagem >= 70 -> C
    Porcentagem >= 60 -> D
    Porcentagem >= 50 -> E
    Porcentagem < 50 -> F
    O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.  */

function gradeToConcept (nota) {
  if (nota > 100) {
    return "Digite uma nota válida (entre 0 e 100).";
  } else if (nota >= 90) {
    nota = "A";
    return"sua nota foi ", nota;
  } else if (nota >= 80) {
    nota = "B";
    return "sua nota foi ", nota;
  } else if (nota >= 70) {
    nota = "C";
    return "sua nota foi ", nota;
  } else if (nota >= 60) {
    nota = "D";
    return "sua nota foi ", nota;
  } else if (nota >= 50) {
    nota = "E";
    return "sua nota foi ", nota;
  } else if (nota < 50) {
    nota = "F";
    return "sua nota foi ", nota;
  } else {
    return "Digite uma nota válida (entre 0 e 100).";
  }  
}

console.log(gradeToConcept(30));