const log = console.log;

function psychic_game() {
    const letters = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    let = lettersPicked = [];

    let guessesLeft = 9
    let randomLetter = '';

    // This will allow all scores to be displayed 
    function displayScores() {
        $('#guesses_left').text(guessesLeft);
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

    $(document).on('keyup', function (x) {
        guessesLeft--;
        displayScores();

        // if the letter keyed is already in the lettersPicked array then...do not push it to the array again
        if (lettersPicked.indexOf(x.key) === -1) {
            lettersPicked.push(x.key);
            updateLettersGuessed(lettersPicked);
        }




        console.log(lettersPicked)
    })

    displayScores();
    randomLetter = randomLetterGenerator(letters);
    log(`random letter:  ${randomLetter}`);
}


$(document).ready(function () {
    psychic_game();
});