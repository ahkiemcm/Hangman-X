console.log("Working");
//I'm not entirely sure about what we need function-wise just yet.
//Lets brainstorm...

//We need functions to hide our page sections, set to reveal and hide sections on certain
//click events.

//We need functions to take a value from the buttons we press equal to the letter selected.

//Buttons need to print character value into a form.

//We need to figure out the  '_ _ _ _ _' format. I don't know how we get it like that...

//Create conditionals that specify the rules of the game

//Player chooses a letter > If letter is correct, print letter to form
//Animate: Megaman shoots :D
//If 2nd correct in a row, shoot then charge
//If 3rd correct in a row, fire a charged blast--reset
//If letter fills more than one spot, animate: Megaman jump shot + shoot on land
// > If not, remove portion of health bar to symbolize a chance lost.
//Health bar will consist of 5 different images, each with subsequently less health
//> Player chooses another letter. Is there a loop we can do to make this more DRY?

//If player guesses wrong 4 times, player loses (cue animation or image for game lose)
//If player fills form before 4 wrong guesses, player wins (cue animation/image for game win)

//Kind of a stretch goal here: If the player answers correctly 3 times in a row, player
//unlocks all vowels in the word OR unlocks an extra letter

// Store categories and word choices in arrays.
// Make a smart randomizer.

//Somehow we need to check if the letter belongs in the word

//I'm thinking the letters from each word or phrase are going to be hidden and revealed
// based on letter pressed. That might make this easier...

//Select game mode---> run function gameSet() =
//Words and phrases randomly selected based on category array, then pushed into an empty
// array called 'game zone'. New array is then separated by letter--hide each letter.
//Each button in letter pool loops through an array of letters to
// check if it belongs or not.
//Whether it is or not dictates the following action.

//Query select the button class, call the resulting array "letter-pool"
//For loop through the array, adding an onclick event listener for every iteration (0-25) with a function called gameCheck()

//function gameCheck() =
// for loop through the length of the gameZone array which contains the randomly chosen word or phrase
// Ex. Compare letter-pool[3](that would be D) ==  gameZone[x].length {hide or reveal and run corresponding
// image switch and animation functions}

//Okay, here comes the hard part....Let's start by declaring variables. This can be the area we store them.

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

//}

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
      "url('/HANGMAN-IMG/megaman-healthbar-empty.png')";
    document.querySelector("#you-lose").style.visibility = "visible";
    // alert("HUMANITY IS LOST")
  } else if (healthTracker <= 4) {
    console.log(healthTracker);
    health.style.backgroundImage =
      "url('HANGMAN-IMG/megaman-healthbar-wrong3.png')";
  } else if (healthTracker <= 8) {
    console.log(healthTracker);
    health.style.backgroundImage =
      "url('HANGMAN-IMG/megaman-healthbar-wrong2.png')";
  } else if (healthTracker <= 12) {
    console.log(healthTracker);
    health.style.backgroundImage =
      "url('HANGMAN-IMG/megaman-healthbar-wrong1.png')";
  } else {
    console.log(healthTracker);
    health.style.backgroundImage =
      "url('HANGMAN-IMG/megaman-healthbar-full.png')";
  }
  megaman.style.backgroundImage =
    "url('HANGMAN-IMG/megaman-x-sprite-sheet-ready.png')";
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
    console.log(x, button.value);
    var regEx = new RegExp(letter, "ig");

    var match;
    while (null != (match = regEx.exec(gameZone))) {
      console.log(match);
    }
  });
});

//SUPER UNCLEAN VERSION

// function gameCheckA() {
//   // console.log(zoneSplit)
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

// function gameCheckB() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("b")) {
//       console.log(zoneSplit.indexOf("b"));
//       wordGuess[zoneSplit.indexOf("b")] = "b";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckC() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("c")) {
//       console.log(zoneSplit.indexOf("c"));
//       wordGuess[zoneSplit.indexOf("c")] = "c";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckD() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("d")) {
//       console.log(zoneSplit.indexOf("d"));
//       wordGuess[zoneSplit.indexOf("d")] = "d";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckE() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("e")) {
//       console.log(zoneSplit.indexOf("e"));
//       wordGuess[zoneSplit.indexOf("e")] = "e";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckF() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("f")) {
//       console.log(zoneSplit.indexOf("f"));
//       wordGuess[zoneSplit.indexOf("f")] = "f";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckG() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("g")) {
//       console.log(zoneSplit.indexOf("g"));
//       wordGuess[zoneSplit.indexOf("g")] = "g";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckH() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("h")) {
//       console.log(zoneSplit.indexOf("h"));
//       wordGuess[zoneSplit.indexOf("h")] = "h";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckI() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("i")) {
//       console.log(zoneSplit.indexOf("i"));
//       wordGuess[zoneSplit.indexOf("i")] = "i";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckJ() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("j")) {
//       console.log(zoneSplit.indexOf("j"));
//       wordGuess[zoneSplit.indexOf("j")] = "j";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }

// function gameCheckK() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("k")) {
//       console.log(zoneSplit.indexOf("k"));
//       wordGuess[zoneSplit.indexOf("k")] = "k";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckL() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("l")) {
//       console.log(zoneSplit.indexOf("l"));
//       wordGuess[zoneSplit.indexOf("l")] = "l";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckM() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("m")) {
//       console.log(zoneSplit.indexOf("m"));
//       wordGuess[zoneSplit.indexOf("m")] = "m";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckN() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("n")) {
//       console.log(zoneSplit.indexOf("n"));
//       wordGuess[zoneSplit.indexOf("n")] = "n";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckO() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("o")) {
//       console.log(zoneSplit.indexOf("o"));
//       wordGuess[zoneSplit.indexOf("o")] = "o";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckP() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("p")) {
//       console.log(zoneSplit.indexOf("p"));
//       wordGuess[zoneSplit.indexOf("p")] = "p";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckQ() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("q")) {
//       console.log(zoneSplit.indexOf("q"));
//       wordGuess[zoneSplit.indexOf("q")] = "q";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckR() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("r")) {
//       console.log(zoneSplit.indexOf("r"));
//       wordGuess[zoneSplit.indexOf("r")] = "r";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckS() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("s")) {
//       console.log(zoneSplit.indexOf("s"));
//       wordGuess[zoneSplit.indexOf("s")] = "s";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckT() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("t")) {
//       console.log(zoneSplit.indexOf("t"));
//       wordGuess[zoneSplit.indexOf("t")] = "t";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckU() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("u")) {
//       console.log(zoneSplit.indexOf("u"));
//       wordGuess[zoneSplit.indexOf("u")] = "u";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckV() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("v")) {
//       console.log(zoneSplit.indexOf("v"));
//       wordGuess[zoneSplit.indexOf("v")] = "v";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckW() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("w")) {
//       console.log(zoneSplit.indexOf("w"));
//       wordGuess[zoneSplit.indexOf("w")] = "w";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckX() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("x")) {
//       console.log(zoneSplit.indexOf("x"));
//       wordGuess[zoneSplit.indexOf("x")] = "x";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckY() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("y")) {
//       console.log(zoneSplit.indexOf("y"));
//       wordGuess[zoneSplit.indexOf("y")] = "y";
//       spellScreen.innerHTML = wordGuess.join("");
//     } else {
//       wrongAnswer();
//     }
//   }
// }
// function gameCheckZ() {
//   for (x = 0; x < zoneSplit.length; x++) {
//     if (zoneSplit.includes("z")) {
//       console.log(zoneSplit.indexOf("z"));
//       wordGuess[zoneSplit.indexOf("z")] = "z";
//       spellScreen.innerHTML = wordGuess.join("");
//       megaman.style.backgroundImage =
//         "url('/HANGMAN-IMG/megaman-x-sprite-sheet-jump.png')";
//       megaman.style.backgroundRepeat = "no-repeat";
//     } else {
//       // megaman.style.backgroundImage = "url(megaman-damage-frame)"
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
