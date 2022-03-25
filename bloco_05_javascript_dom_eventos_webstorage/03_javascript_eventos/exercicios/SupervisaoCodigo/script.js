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
function daysOfMonth() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const daysMonthList = document.getElementById("days");
  for (let i = 0; i < dezDaysList.length; i += 1) {
    const days = dezDaysList[i];
    const daysList = document.createElement("li");
    daysList.innerHTML = days;
    daysMonthList.appendChild(daysList);
    if (days == "24" || days == "31") {
      daysList.className = "day holiday";
    } else if (days == "4" || days == "11" || days == "18") {
      daysList.className = "day friday";
    } else if (days == "25") {
      daysList.className = "day holiday friday";
    } else {
      daysList.className = "day";
    }
  }
}
daysOfMonth();
// let feriadoss = document.createElement('button');
function holiday(feriados) {
  feriados = document.createElement("button");
  feriados.id = "btn-holiday";
  feriados.innerHTML = "feriados";
  let div = document.querySelector(".buttons-container");
  div.appendChild(feriados);
}
holiday();
// console.log(holiday());

let botao = document.getElementById("btn-holiday");

function bgColor() {
  
  let holiD = document.getElementsByClassName("holiday");

  for (let h = 0; h < holiD.length; h += 1) {

    console.log(holiD[h].style.backgroundColor);
    if (holiD[h].style.backgroundColor === "blue") {
      holiD[h].style.backgroundColor = "rgb(238,238,238)";
    }
    else  {
      holiD[h].style.backgroundColor = "blue";
    }
  }
}

botao.addEventListener("click", bgColor);
// Escreva seu código abaixo.
