/* O operador OR considera que entre duas ou mais condições testadas, no caso de apenas uma ser verdadeira, o resultado do teste lógico é verdadeiro. Por exemplo:

    João comeu hamburguer ou bebeu coca-cola.

No caso da sentença acima, caso João tenha exclusivamente bebido coca-cola, ou exclusivamente comido hamburguer, ou ainda caso ele tenha feito ambas as coisas, o resultado será verdadeiro. Ou seja, a única condição em que OU é falsa será quando TODAS as condições testadas serem falsas. 

Um exemplo do uso do operador lógico OU: */

let weekDay = "quarta-feira";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log ("Oba, mais um dia de aprendizado na Trybe! :D");
} else {
    console.log("FINALMENTE, descanso merecido!")
}