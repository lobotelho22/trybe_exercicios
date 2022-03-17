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
  event.target.style.border = "1px solid red";
  event.target.style.borderRadius = "100%";
}

function zoomOutNumber(event) {
  event.target.removeAttribute('style');
}

let dayOfMonth = document.getElementsByClassName("day");

for (j = 0; j < dayOfMonth.length; j += 1) {
  dayOfMonth[j].addEventListener("mouseover", zoomNumber);
}

for (j = 0; j < dayOfMonth.length; j += 1) {
  dayOfMonth[j].addEventListener("mouseleave", zoomOutNumber);
}
