/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

    >> Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais;

    >> Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case);

    >> Se a peça passada for inválida, o programa deve retornar uma mensagem de erro;

    >> Exemplo: bishop (bispo) -> diagonals (diagonais) */

//let peca = "BISPO";


function wichMove(peca){
    
    peca = peca.toLowerCase();

    switch (peca) {

        case "rei" :
            return "rei -> movimento livre, uma casa de cada vez";
            break;
        
        case "rainha" :
            return "rainha -> move-se ao longo das diagonais e horizontais";
            break;
    
        case "bispo" :
            return "bispo -> move-se nas diagonais";
            break;
    
        case "cavalo" :
            return "cavalo -> move-se em 'L'. É a única peça que pode pular outras";
            break;
    
        case "torre" :
            return "torre -> move-se na vertical ou horizontal";
            break;
    
        case "peão" :
            return "peão -> move-se uma casa para a frente. Na sua saída pode se mover duas casas";
            break;
    
        case "peao" :
            return "peão -> move-se uma casa para a frente. Na sua saída pode se mover duas casas";
            break;
            
        default:
            return "informe um nome válido para uma peça...";
    }
}

console.log (wichMove("cavalo"));