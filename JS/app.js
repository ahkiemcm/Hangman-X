console.log('Working')
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

//-------VARIABLE POOL-------//
var titlePage = document.querySelector('.title-page')
var gameStart = document.querySelector('#start-game')
var modeSelect = document.querySelector('.outer-list')
var wordList = document.querySelector('#wordList')
var phraseList = document.querySelector('#phraseList')
var catSubjectW = document.querySelectorAll('.inner-list-W')
var catSubjectP = document.querySelectorAll('.inner-list-P')

var sigmaTalk = document.querySelector('.sigma-monologue')
var sigmaWalk = document.querySelector('#sigma-walk')
var sigmaPoint = document.querySelector('#sigma-challenge')


//-------GAME VARIABLES-------//

var gamePage = document.querySelector('.game-page')
var words = ['megaman X', 'zero', 'vile', 'doctor light', 'maverick', 'reploid', 'sigma']
var phrases = ["its not over yet", "its time to get serious"]
var gameZone = []
var letterPool = document.querySelectorAll('.alphabet')

//-------GAME FUNCTIONS-------//
// Button Setup
// for (x = 0; x < letterPool.length; x++) {
// letterPool[x].addEventListener('click', function gameCheck() {
//     console.log(letterPool[x].value)
// })
// }


//Game Setup
// function gameSet() {
gameZone = words[Math.floor(Math.random() * words.length)] //Picks a random word
var zoneSplit = gameZone.split('')   //Splits up the guess word and puts it into a new array
// Creating a variable here for #spellScreen
var spellScreen = document.querySelector('#spellScreen')
console.log(zoneSplit.join(" "))

var wordGuess = []
for (x = 0; x < zoneSplit.length; x++) {
    wordGuess[x] = '_'
    spellScreen.innerHTML = wordGuess.join(" ")
}
// }

//     document.querySelector('#spellScreen').innerHTML = zoneCast

// function gameSetP() {
//     gameZone = phrases[Math.floor(Math.random() * phrases.length)] //Picks a random word
//     var zoneSplit = gamezone.split('')   //Splits up the guess phrase and puts it into a new array
//     document.getElementById('spellScreen').innerHTML = zoneSplit
// }

//Populate spellZone with gameZone.split() array, visibilty = hidden until revealed on match
// if (this.childNodes[0].style.visibility == "visible") {
// this.childNodes[0].style.visibility = "hidden";  //hide item
//     } else {
//     this.childNodes[0].style.visibility = "visible";  //show item
// }




//Game check
function gameCheckA() {
    // console.log(zoneSplit)
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('a')) {
            console.log(zoneSplit.indexOf('a'))
            wordGuess[zoneSplit.indexOf('a')] = 'a'
            spellScreen.innerHTML = wordGuess.join('')
    
        }
        else {
            document.querySelector('#health-bar').style.backgroundImage = "url('/HANGMAN-IMG/megaman-healthbar-wrong1.png')"
        }
    }
}

function gameCheckB() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('b')) {
            console.log(zoneSplit.indexOf('b'))
            wordGuess[zoneSplit.indexOf('b')] = 'b'
            spellScreen.innerHTML = wordGuess.join('')

        }
        else {
            document.querySelector('#health-bar').style.backgroundImage = "url('/HANGMAN-IMG/megaman-healthbar-wrong1.png')"
        }
    }
}
function gameCheckC() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('a')) {
            console.log(zoneSplit.indexOf('a'))
            wordGuess[zoneSplit.indexOf('a')] = 'a'
            spellScreen.innerHTML = wordGuess.join('')

        }
        else {
            document.querySelector('#health-bar').style.backgroundImage = "url('/HANGMAN-IMG/megaman-healthbar-wrong1.png')"
        }
    }
}
function gameCheckD() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('d')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckE() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('e')) { spellScreen.innerHTML = 'e' }
        else {
            alert('No match.')
        }
    }
}
function gameCheckF() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('f')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckG() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('g')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckH() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('h')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckI() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('i')) { spellScreen.innerHTML = 'i' }
        else {
            alert('No match.')
        }
    }
}
function gameCheckJ() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('j')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckK() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('k')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckL() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('l')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckM() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('m')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckN() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('n')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckO() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('o')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckP() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('p')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckQ() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('q')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckR() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('r')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckS() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('s')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckT() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('t')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckU() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('u')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckV() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('v')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckW() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('w')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckX() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('x')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckY() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('y')) { console.log(zoneSplit[x]) }
        else {
            alert('No match.')
        }
    }
}
function gameCheckZ() {
    for (x = 0; x < zoneSplit.length; x++) {
        if (zoneSplit.includes('z')) { spellScreen.innerHTML = 'z' }
        else {
            alert('No match.')
        }
    }
}





//-------TRANSITIONAL FUNCTIONS-------//
// modeSelect.style.display = block;

$('#start-game').click(function () {
    $('.title-page').fadeOut()
    $('.sigma-monologue').fadeIn(5000)
    $('#sigma-walk').fadeIn(2000)

})

$('#nextButton1').click(function () {
    $('#sigma-walk').fadeOut(200)
    $('#sigma-challenge').fadeIn(3000)
})

$('#nextButton2').click(function () {
    $('.sigma-monologue').fadeOut()
    $('.game-page').fadeIn(5000)
})

// modeSelect.addEventListener('click', function () {

// }

// catSubjectW.addEventListener('click', fuction(){
//     //We need to hide the title page and reveal the story fragment page.
// })












//-------ACTION FUNCTIONS-------