//-------SELECTOR POOL-------//
var titlePage = document.querySelector(".title-page");
var gameStart = document.querySelector("#start-game");
var modeSelect = document.querySelector(".outer-list");
var wordList = document.querySelector("#wordList");
var phraseList = document.querySelector("#phraseList");
var catSubjectW = document.querySelectorAll(".inner-list-W");
var catSubjectP = document.querySelectorAll(".inner-list-P");

var sigmaTalk = document.querySelector(".sigma-monologue");
var sigmaWalk = document.querySelector("#sigma-walk");
var sigmaPoint = document.querySelector("#sigma-challenge");

var health = document.querySelector("#health-bar");
var megaman = document.querySelector("#megaman");
var sigma = document.querySelector("#sigma");

//-------GAME VARIABLES-------//

var gamePage = document.querySelector(".game-page");
var words = [
  "MEGAMAN X",
  "ZERO",
  "VILE",
  "DOCTOR LIGHT",
  "MAVERICK",
  "REPLOID",
  "SIGMA"
];
var phrases = ["its not over yet", "its time to get serious"];
var gameZone = [];
var letterPool = document.querySelectorAll(".alphabet");
var noEffect = [];

//-------GAME FUNCTIONS-------//

//Game Setup
// function gameSet() {
gameZone = words[Math.floor(Math.random() * words.length)]; //Picks a random word
var zoneSplit = gameZone.split(""); //Splits up the guess word and puts it into a new array
// Creating a variable here for #spellScreen
var spellScreen = document.querySelector("#spellScreen");
console.log(zoneSplit.join(" "));

var wordGuess = [];
for (x = 0; x < zoneSplit.length; x++) {
  wordGuess[x] = "_";
  spellScreen.innerHTML = wordGuess.join(" ");
}

//Game check
var healthTracker = 16;
if (healthTracker <= 0) {
  alert("You lose!");
} //else if (healthTracker = 3) {
// }

function victory() {
  // if (spellScreen.innerHTML != "_") {
  //   alert("You win!");}
  victorious = spellScreen.innerHTML.includes("_") ? true : alert("You win!");
}

function wrongAnswer() {
  healthTracker -= 1;
  if (healthTracker <= 0) {
    console.log(healthTracker);
    health.style.backgroundImage =
      "url('/HANGMAN-IMG/Healthbar/megaman-healthbar-empty.png')";
    document.querySelector("#you-lose").style.visibility = "visible";
    // alert("HUMANITY IS LOST")
  } else if (healthTracker <= 4) {
    console.log(healthTracker);
    health.style.backgroundImage =
      "url('HANGMAN-IMG/Healthbar/megaman-healthbar-wrong3.png')";
  } else if (healthTracker <= 8) {
    console.log(healthTracker);
    health.style.backgroundImage =
      "url('HANGMAN-IMG/Healthbar/megaman-healthbar-wrong2.png')";
  } else if (healthTracker <= 12) {
    console.log(healthTracker);
    health.style.backgroundImage =
      "url('HANGMAN-IMG/Healthbar/megaman-healthbar-wrong1.png')";
  } else {
    console.log(healthTracker);
    health.style.backgroundImage =
      "url('HANGMAN-IMG/Healthbar/megaman-healthbar-full.png')";
  }
}
//----GAMEBOARD----//

// Button Setup

// //FOR LOOP ATTEMPT
// for (x = 0; x < letterPool.length; x++) {
//   letterPool[x].addEventListener("click", function gameCheck() {
//     console.log(letterPool[x].value);

//     if (zoneSplit.includes(letterPool[x].value)) {
//       console.log("That's in there");
//     } else {
//       console.log("Does not include");
//     }
//   });
// }

// //FOR EACH ATTEMPT
// letterPool.forEach(function(button, x) {
//   button.addEventListener("click", function gameCheck() {
//     console.log(x, button.value);
//     // console.log(wordGuess);
//     if (zoneSplit.includes(button.value)) {
//       // console.log("That's in there");
//       wordGuess[zoneSplit.indexOf(button.value)] = button.value;
//       console.log(wordGuess);
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       console.log("Does not include");
//     }
//   });
// });

//FOR EACH w/RegEx
letterPool.forEach(function(button, x) {
  button.addEventListener("click", function gameCheck(letter) {
    console.log(button.value, x);

    var regEx = new RegExp(button.value, "ig");
    //Use zone split instead of gameZone to access the array of letters in our word...
    var match;

    if (null != (match = regEx.exec(gameZone))) {
      console.log("It matches!", match.index);
      console.log(wordGuess[match.index]);
      wordGuess[match.index] = button.value;
      console.log(wordGuess);
      spellScreen.innerHTML = wordGuess.join("");
    } else {
      wrongAnswer();
    }
  });
});

// SUPER UNCLEAN VERSION

// function gameCheckA() {
//   console.log(zoneSplit);
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("a")) {
//       console.log(zoneSplit.indexOf("a"));
//       wordGuess[zoneSplit.indexOf("a")] = "a";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }

//-------TRANSITIONAL FUNCTIONS-------//

$("#start-game").click(function() {
  $(".title-page").fadeOut();
  $(".sigma-monologue").fadeIn(5000);
  $("#sigma-walk").fadeIn(2000);
});

$("#nextButton1").click(function() {
  $("#sigma-walk").fadeOut(200);
  $("#sigma-challenge").fadeIn(3000);
});

$("#nextButton2").click(function() {
  $(".sigma-monologue").fadeOut();
  $(".game-page").fadeIn(5000);
});

//-------ACTION FUNCTIONS-------
