const log = console.log;

function psychic_game() {
    // $('#game_instructions').modal('show');

    const letters = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    let lettersPicked = [];

    let guessesLeft = 9;
    let randomLetter = '';
    let wins = 0;
    let losses = 0;

    // This will allow all scores to be displayed 
    function displayScores() {
        $('#guesses_left').text(guessesLeft);
        $('#wins').text(wins);
        $('#losses').text(losses)
    }


    // This will allow a random letter to be selected unknown to the user
    function randomLetterGenerator(array) {
        let randonNum = Math.floor(Math.random() * array.length)
        return array[randonNum];
    }

    // This updates the letters guessed 
    function updateLettersGuessed(array) {
        if (array.length !== 0) {
            $('#letters_guessed').text(lettersPicked.join(', '));
        }
    }

    function restartGame(){
        randomLetter = randomLetterGenerator(letters);
        guessesLeft = 9;
        lettersPicked = [];
        $('#letters_guessed').text('');
        displayScores();

        log(`random letter:  ${randomLetter}`);
    }
    $(document).on('keyup', function (x) {

        

        // if the letter keyed is already in the lettersPicked array then...do not push it to the array again
        if (lettersPicked.indexOf(x.key) === -1) {
            guessesLeft--;

            displayScores();

            lettersPicked.push(x.key);
            updateLettersGuessed(lettersPicked);

            // If there arent any guesses left then...

            if(guessesLeft === 0){
                losses++;
                restartGame();
            }

            if(x.key === randomLetter){
                alert(`You've guessed correctly!`);
                wins++;
                restartGame();
            }

        // if the letter exist in the in the lettersPicked array that user just entered...
        }else if(lettersPicked.indexOf(x.key) >= 0){
            alert(`You've entered this letter already. Please choose another letter.`)
        }
    })

    displayScores();
    randomLetter = randomLetterGenerator(letters);

    log(`random letter:  ${randomLetter}`);
}


$(document).ready(function () {
    psychic_game();
});