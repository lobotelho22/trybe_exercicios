// Operadores condicionais: if e else

/* A estrutura condicional de se (if) e senão (else) é feita da seguinte forma:

    if (condicao) {
        o código a ser executado caso a condição seja verdadeira
    }

No caso de continuar testando condições diferentes, utilizamos o comando else acompanhado de um novo if:

    if (condicao) {
        o código a ser executado caso a condição seja verdadeira
    }
    else if {
        nova condicao
    } else {
        ultima condicao
    }

O else desacompanhado do if é a condição final do teste. Acompanhemos o exemplo abaixo: */

let trybe = 15;

if (trybe >= 14 && trybe < 14.40) {
    console.log("Esquenta")
}
else if (trybe >= 16.30 && trybe < 17.50) {
    console.log ("Aula ao Vivo");
}
else if (trybe >= 19.40 && trybe < 20) {
    console.log("Fechamento");
}
else {
    console.log ("Fora dos momentos síncronos");
}
