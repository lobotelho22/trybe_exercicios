/* Adicione o valor "Contato" no final do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(menu); */

// aqui utilizaremos o método .push()

let menu = ['Home', 'Serviços', 'Portfólio', 'Links', 13 , true, [1,2,3]];

menu.push('Contato');

console.log(menu);
console.log(menu[0][2]);