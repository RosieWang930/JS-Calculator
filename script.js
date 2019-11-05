//Half Calculation
var halfButton = document.getElementById("half-button");
var inputNum = document.getElementById("half-input");

halfButton.addEventListener("click", halfNumber);

function halfNumber() {
  alert(inputNum.value / 2);
  console.log("Half of " + inputNum.value + " is " + inputNum.value / 2 + ".");
}

//Fortune calculation
var fortuneButton = document.getElementById("fortune-button");
var inputFortune = document.getElementById("fortune-input");
var fortuneList = ["People are naturally attracted to you.", "Enjoy the good luck a companion brings you.", "Your shoes will make you happy today.", "A dream you have will come true.", "The greatest risk is not taking one.", "Serious trouble will bypass you."]
var outputIndex;
var currentOutput = document.getElementById("fortune-outputText");

fortuneButton.addEventListener("click", fortune);

function fortune() {
  outputIndex = Math.floor(Math.random() * fortuneList.length);
  currentOutput.innerHTML = inputFortune.value + ": " + fortuneList[outputIndex];
}

//Fortune restyle
currentOutput.addEventListener("mouseover", restyle);
function restyle() {
  currentOutput.style.color = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
  currentOutput.style.fontSize = "3rem";
  currentOutput.style.textShadow = "0px 0px " + Math.round(Math.random()*10) + "px red";
}
