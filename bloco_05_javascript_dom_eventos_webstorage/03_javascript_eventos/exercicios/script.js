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
