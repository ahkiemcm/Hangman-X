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
    //If letter fills more than one spot, animate: Megaman jump shot + shoot on landq
    // > If not, remove portion of health bar to symbolize a chance lost. 
        //Health bar will consist of 5 different images, each with subsequently less health
    //> Player chooses another letter. Is there a loop we can do to make this more DRY?

    //If player guesses wrong 5 times, player loses (cue animation or image for game lose)
    //If player fills form before 5 characters, player wins (cue animation/image for game win)
    
    //Kind of a stretch goal here: If the player answers correctly 3 times in a row, player 
    //unlocks all vowels in the word OR unlocks an extra letter

// Store categories and word choices in arrays. 
// Make a smart randomizer.

//Somehow we need to check if the letter belongs in the word

//I'm thinking the letters from each word or phrase are going to be hidden and revealed
// based on letter pressed. That might make this easier...

//Words and phrases randomly selected based on category array, then pushed into an empty
// array called 'game zone'. New array is then separated by letter--hide each letter.
//Each button in letter pool loops through an array of letters to 
// check if it belongs or not. 
//Whether it is or not dictates the following action.