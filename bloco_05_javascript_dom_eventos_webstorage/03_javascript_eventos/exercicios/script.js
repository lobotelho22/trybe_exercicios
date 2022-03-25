function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//? Exercicio 1:
//? O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

let listDays = document.getElementById("days");

function createDaysOfMonth() {
  for (i = 0; i < dezDaysList.length; i += 1) {
    let dia = document.createElement("li");
    dia.innerText = dezDaysList[i];
    dia.classList = "day";
    listDays.appendChild(dia);
  }
}

function createDecHolidays() {
  let elementsLi = document.getElementsByClassName("day");
  for (i = 0; i < elementsLi.length; i += 1) {
    let holiday = elementsLi[i].innerText;
    if (holiday === "24" || holiday === "25" || holiday === "31") {
      elementsLi[i].classList.add("holiday");
    }
  }
}

function createFridays() {
  let elementsLi = document.getElementsByClassName("day");
  let fridays = [4, 11, 18, 25];
  for (i = 0; i < elementsLi.length; i += 1) {
    let isFriday = elementsLi[i].innerText;
    for (let friday of fridays) {
      if (friday == isFriday) {
        elementsLi[i].classList.add("friday");
      }
    }
  }
}

createDaysOfMonth();
createDecHolidays();
createFridays();

//? Exercício 2:
//? Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados"
//? Adicione a este botão a ID "btn-holiday"
//? Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function createHolidayBtn(feriado) {
  let btnHoliday = document.createElement("button");
  btnHoliday.innerText = feriado;
  btnHoliday.name = feriado;
  btnHoliday.id = "btn-holiday";
  divButton = document.querySelector(".buttons-container");
  divButton.appendChild(btnHoliday);
}

createHolidayBtn("Feriados");

//? Exercicio 3:
//? Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday"
//? É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor rgb(238,238,238)

function colorHoliday() {
  let hDays = document.querySelectorAll(".holiday");

  for (i = 0; i < hDays.length; i += 1) {
    let testeCor = hDays[i].style.backgroundColor;

    if (testeCor == "rgb(59, 191, 43)") {
      hDays[i].removeAttribute("style");
    }

    if (testeCor != "rgb(59, 191, 43)") {
      hDays[i].style.backgroundColor = "#3bbf2b";
    }
  }
}

let btnHoliday = document.getElementById("btn-holiday");
btnHoliday.addEventListener("click", colorHoliday);

//? Exercicio 4 - Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
//? Adicione a este botão o ID "btn-friday" .
//? Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createFridayBtn(sexta) {
  let btnFriday = document.createElement("button");
  btnFriday.id = "btn-friday";
  btnFriday.name = sexta;
  btnFriday.innerText = sexta;

  let divSexta = document.querySelector(".buttons-container");
  divSexta.appendChild(btnFriday);
}

createFridayBtn("Sexta-feira");

//? Exercício 5:
//? Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
//? É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function alteraSexta() {
  let listFridays = document.querySelectorAll(".friday");

  for (i = 0; i < listFridays.length; i += 1) {
    let testFriday = listFridays[i].innerText;

    if (testFriday == "sextou!") {
      let fridays = [4, 11, 18, 25];
      listFridays[i].innerText = fridays[i];
      listFridays[i].removeAttribute("style");
    }

    if (testFriday != "sextou!") {
      listFridays[i].innerText = "sextou!";
      listFridays[i].style.color = "#b64fb7";
    }
  }
}

let btnFriday = document.getElementById("btn-friday");
btnFriday.addEventListener("click", alteraSexta);

//? Exercício 6:
//? Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function zoomNumber(event) {
  event.target.style.fontSize = "1.6em";
  // event.target.style.border = "1px solid red";
  // event.target.style.borderRadius = "100%";
}

function zoomOutNumber(event) {
  //event.target.removeAttribute("style");
  event.target.style.fontSize = "20px";
}

let dayOfMonth = document.querySelectorAll(".days-container ul .day");

for (j = 0; j < dayOfMonth.length; j += 1) {
  dayOfMonth[j].addEventListener("mouseover", zoomNumber);
}

for (j = 0; j < dayOfMonth.length; j += 1) {
  dayOfMonth[j].addEventListener("mouseleave", zoomOutNumber);
}

//? Exercício 7:
//? Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//? O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function createTask(task) {
  let taskNew = document.createElement("span");
  let secaoTask = document.querySelector(".my-tasks");
  taskNew.innerText = task;
  taskNew.className = "task-item";
  secaoTask.appendChild(taskNew);
}

createTask("cozinhar");

//? Exercício 8:
//? Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

//? O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//? O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function createDivTask(cor) {
  let backgroundTask = document.createElement("div");
  let secaoTask = document.querySelector(".my-tasks");
  backgroundTask.className = "task";
  backgroundTask.style.backgroundColor = cor;
  secaoTask.appendChild(backgroundTask);
}

createDivTask("#5bd946");

//? Exercício 9:
//? Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
//? Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

let task = document.querySelector(".task");

function changeTaskColor() {
  let taskColor = task.style.backgroundColor;

  if (taskColor == "rgb(91, 217, 70)") {
    task.style.backgroundColor = "#628b56";
  } else {
    task.style.backgroundColor = "rgb(91, 217, 70)";
  }
}

task.addEventListener("click", changeTaskColor);

//? Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
//? Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)

function changeDayColor(event) {
  //console.log('foda-se o presidente');
  let taskColor = document.querySelector(".task").style.backgroundColor;
  let dayTask = event.target;

  if (dayTask.style.backgroundColor != taskColor) {
    dayTask.style.backgroundColor = taskColor;
  } else if (dayTask.style.backgroundColor == taskColor) {
    dayTask.style.backgroundColor = "#EEEEEE";
  }
}

for (let littleDay of dayOfMonth) {
  littleDay.addEventListener("click", changeDayColor);
}

//? Bônus:
//todo  Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
//todo Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
//todo Ao pressionar a tecla "enter" o evento também deverá ser disparado.
//? Dica - Propriedade: key .


