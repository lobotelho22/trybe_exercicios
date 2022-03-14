const bodyColor = document.getElementsByTagName("body")[0];
bodyColor.style.backgroundColor = "rgb(249, 249, 249)";

const headerTrybe = document.querySelector("h1");
headerTrybe.style.backgroundColor = "#2FC18C"

const emergencySide = document.getElementsByClassName("emergency-tasks")[0];
emergencySide.style.backgroundColor = "#ED5A1D";

const noEmergencySide = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergencySide.style.backgroundColor = "#BDC8B8";

const titleBars = document.querySelectorAll("div h3");
    for (i = 0; i < titleBars.length; i += 1) {
        titleBars[i].style.backgroundColor = "#027FC9";
    }

const footerTrybe = document.querySelector("footer");
footerTrybe.style.backgroundColor = "#2FC18C"