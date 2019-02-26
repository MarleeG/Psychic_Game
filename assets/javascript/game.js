const log = console.log;

function psychic_game() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    let guessesLeft = 9
    let randomLetter = '';

    // This will allow all scores to be displayed 
    function displayScores(){
         $('#guesses_left').append(guessesLeft);
    }
   

    // This will allow a random letter to be selected unknown to the user
    function randomLetterGenerator(array){
        let randonNum = Math.floor(Math.random() * array.length)
        return array[randonNum];
    }

    displayScores();
    randomLetter = randomLetterGenerator(letters);
    log(`random letter:  ${randomLetter}`);
}


$(document).ready(function () {
    psychic_game();
});