//todo) crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const addKeys = (object, key, value) => {
    object = {};
    object[key] = value;
    return object;
}

const novela = addKeys('Roque Santeiro','personagem','Sinhozinho Malta');
console.table(novela);
//console.log(typeof(addKeys));