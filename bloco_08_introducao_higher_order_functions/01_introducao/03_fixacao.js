// 1 - Crie uma função que retorne a string 'Acordando!!' ;

const arcordando = () => { console.log('Acordando!!') };

// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;

const tomarCafe = () => { console.log('Bora tomar café!!') };

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;

const dormir = () => { console.log('Partiu dormir!!') };

// Ao chamar a função doingThings:
const doingThings = (func) => func();

doingThings(arcordando);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!