const btnBackgroundBlack = document.querySelector(
  "#set-background-color #black"
);
const btnBackgroundGrey = document.querySelector("#set-background-color #grey");
const btnBackgroundwhite = document.querySelector(
  "#set-background-color #white"
);

const btnTextBlack = document.querySelector("#set-text-color #black");
const btnTextWhite = document.querySelector("#set-text-color #white");
const btnTextGrey = document.querySelector("#set-text-color #grey");

const btnMinusFont = document.querySelector("#set-size-color #minus");

function startBackground(optionBgColor) {
  optionBgColor = localStorage.getItem("background");

  if (optionBgColor === "black") {
    setBackgroundToBlack();
  }
  if (optionBgColor === "grey") {
    setBackgroundToGrey();
  }

  if (optionBgColor === "white") {
    setBackgroundToWhite();
  }
}

function startText(optionText) {
  optionText = localStorage.getItem("textColor");

  if (optionText === "black") {
    setTextColorBlack();
  }

  if (optionText === "grey") {
    setTextColorGrey();
  }

  if (optionText === "white") {
    setTextColorWhite();
  }
}

function testNaNFontSize() {
  for (i = 0; i < localStorage.length; i += 1) {
    if (localStorage.key(i) === "fontSize") {
      return isNaN(localStorage.key(i));
    }
  }
  return false;
}

function startFontSize() {
    document.querySelector("h1, #title").style.fontSize = fontSizesArray[0];
    document.querySelector("h2").style.fontSize = fontSizesArray[1];
    document.querySelector("p").style.fontSize = fontSizesArray[2];
    document.querySelector("ul").style.fontSize = fontSizesArray[3];
  }

function startSetup() {
  startBackground();
  startText();

  let testFontSize = testNaNFontSize();
  if (testFontSize === false) {
    fontSizesArray = createTableFontSizes();
    localStorage.setItem("fontSize", fontSizesArray);
  } else {
    let xablau = localStorage.getItem("fontSize");
    fontSizesArray = xablau.split(",");
    startFontSize();
  }
}

window.onload = startSetup();

//! NavBar functions -- Cor de Fundo

function setBackgroundToBlack() {
  localStorage.setItem("background", "black");
  document.body.style.backgroundColor = "black";
}

function setBackgroundToGrey() {
  localStorage.setItem("background", "grey");
  document.body.style.backgroundColor = "rgb(85, 85, 85)";
}

function setBackgroundToWhite() {
  localStorage.setItem("background", "white");
  document.body.style.backgroundColor = "rgb(238, 238, 238)";
}

function setTextColorBlack(textMain, textLi) {
  textMain = document.querySelector("main p");
  textMain.style.color = "#222";

  textLi = document.querySelectorAll("li");
  for (i = 0; i < textLi.length; i += 1) {
    textLi[i].style.color = "#222";
    textLi[i].style.backgroundColor = "#DDD";
  }

  localStorage.setItem("textColor", "black");
}

function setTextColorGrey(textMain, textLi) {
  textMain = document.querySelector("main p");
  textMain.style.color = "#555";

  textLi = document.querySelectorAll("li");
  for (i = 0; i < textLi.length; i += 1) {
    textLi[i].style.color = "#555";
    textLi[i].style.backgroundColor = "#DDD";
  }

  localStorage.setItem("textColor", "grey");
}

function setTextColorWhite(textMain, textLi) {
  textMain = document.querySelector("main p");
  textMain.style.color = "#EEE";

  textLi = document.querySelectorAll("li");
  for (i = 0; i < textLi.length; i += 1) {
    textLi[i].style.color = "#EEE";
    textLi[i].style.backgroundColor = "#222";
  }

  localStorage.setItem("textColor", "white");
}

function createTableFontSizes() {
  let tableFontSizes = [];
  tableFontSizes[0] = document.querySelector("h1, #title").style.fontSize;
  tableFontSizes[1] = document.querySelector("h2").style.fontSize;
  tableFontSizes[2] = document.querySelector("p").style.fontSize;
  tableFontSizes[3] = document.querySelector("ul").style.fontSize;
  return tableFontSizes;
}

function setFontSizeDown() {
  if (
    fontSizesArray[0] == "" &&
    fontSizesArray[1] == "" &&
    fontSizesArray[2] == "" &&
    fontSizesArray[3] == ""
  ) {
    fontSizesArray = ["4em", "2.8em", "1em", "1em"];
  }

  for (i = 0; i < fontSizesArray.length; i += 1) {
    let fontSize = parseFloat(fontSizesArray[i]) * 0.9;
    fontSizesArray[i] = fontSize + "em";
  }

  localStorage.setItem("fontSize", fontSizesArray);

  document.querySelector("h1, #title").style.fontSize = fontSizesArray[0];
  document.querySelector("h2").style.fontSize = fontSizesArray[1];
  document.querySelector("p").style.fontSize = fontSizesArray[2];
  document.querySelector("ul").style.fontSize = fontSizesArray[3];
}

//! NavBar Botoẽs e chamado de eventos

btnBackgroundBlack.addEventListener("click", setBackgroundToBlack);
btnBackgroundGrey.addEventListener("click", setBackgroundToGrey);
btnBackgroundwhite.addEventListener("click", setBackgroundToWhite);

btnTextBlack.addEventListener("click", setTextColorBlack);
btnTextWhite.addEventListener("click", setTextColorWhite);
btnTextGrey.addEventListener("click", setTextColorGrey);

btnMinusFont.addEventListener("click", setFontSizeDown);
