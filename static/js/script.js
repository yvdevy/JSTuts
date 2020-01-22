//alert("Hiyyy");
//Age in days Start
function ageInDays() {
  let birthyear = prompt("Enter year of birth");
  let ageInDays = (2020 - birthyear) * 365;
  let h1 = document.createElement("h1");
  var result = document.createTextNode("You are " + ageInDays + " days old");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(result);
  console.log(ageInDays);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}
//Age in days end

//Generate Mobile Start
function generatemobile() {
  var image = document.createElement("img");
  var button = document.createElement("button");
  button.innerHTML = "click button";
  button.style.backgroundColor = "orange";
  var div = document.getElementById("flex-gen-mobile");
  image.src =
    "https://assets.mspimages.in/c/tr:w-200,h-320,cm-pad_resize/15879-91-1.jpg";
  image.id = "generatedImage";
  div.appendChild(image);
  //image.onclick = document.getElementById("generatedImage").remove();
}
//Generate Mobile end

//RPSGame Start
function rpsGame(buddychoice) {
  console.log(buddychoice);
  var humanchoice, botchoice;
  humanchoice = buddychoice.id;
  botchoice = numberToBotChoice(randInttoRPS());
  console.log("botchoice: " + botchoice);
  result = decideWinner(humanchoice, botchoice);
  console.log(result);
  message = finalMessage(result);
  console.log(message);
  rpsFrontEnd(buddychoice.id, botchoice, message);
}

function randInttoRPS() {
  return Math.floor(Math.random() * 3);
}

function numberToBotChoice(number) {
  return ["rock", "paper", "scissor"][number];
}

function decideWinner(buddychoice, botchoice) {
  let rpsDB = {
    rock: { scissor: 1, rock: 0, paper: -1 },
    paper: { scissor: -1, rock: 1, paper: 0 },
    scissor: { scissor: 0, rock: -1, paper: 1 }
  };
  let buddyScore = rpsDB[buddychoice][botchoice];
  let botScore = rpsDB[botchoice][buddychoice];
  return { buddyScore, botScore };
}

function finalMessage({ buddyScore, botScore }) {
  if (buddyScore === 1) return { message: "You Won!", color: "green" };
  else if (buddyScore === 0) return { message: "Its a Tie", color: "yellow" };
  return { message: "You Lose!", color: "red" };
}

function rpsFrontEnd(buddychoice, botchoice, finalMessage) {
  var imgDB = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissor: document.getElementById("scissor").src
  };
  document.getElementById("flex-box-rps-select").remove();

  //   document.getElementById("rock").remove();
  //   document.getElementById("paper").remove();
  //   document.getElementById("scissor").remove();

  var resultdiv = document.createElement("div");
  resultdiv.id = "flex-box-rps-result";
  //   resultdiv.style="{
  //     display: flex,
  //     align-items: center,
  //     border: 1px solid blue,
  //     padding: 10px,
  //     flex-wrap: wrap,
  //     flex-direction: row,
  //     justify-content: space-around
  //   }";
  var humandiv = document.createElement("div");
  var messagediv = document.createElement("div");
  var botdiv = document.createElement("div");

  humandiv.innerHTML =
    "<img onClick='rpsGame(this);' src='" +
    imgDB[buddychoice] +
    "' height=150px width=150px  '/>";

  console.log(humandiv);
  messagediv.innerHTML =
    "<h1 style='color:" +
    finalMessage["color"] +
    "; font-size:60px; padding :3px;'>" +
    finalMessage["message"] +
    "</h1>";
  console.log(messagediv);
  botdiv.innerHTML =
    "<img  src='" + imgDB[botchoice] + "' height=150px width=150px  '/>";

  console.log(botdiv);

  var playagainbtn = document.createElement("button");
  playagainbtn.innerHTML = "Play Again";
  playagainbtn.onClick = playagain(resultdiv.id, "flex-box-rps-select");
  //button.
  document.getElementById("container-3").appendChild(resultdiv);
  document.getElementById("flex-box-rps-result").appendChild(humandiv);
  document.getElementById("flex-box-rps-result").appendChild(messagediv);
  document.getElementById("flex-box-rps-result").appendChild(botdiv);
  document.getElementById("flex-box-rps-result").appendChild(playagainbtn);
}
function playagain(resultdivid, selectdivid) {
  document.getElementById("" + resultdivid + "").remove();
  document
    .getElementById("container-3")
    .appendChild(document.getElementById(selectdivid));
}
//RPSGame end
