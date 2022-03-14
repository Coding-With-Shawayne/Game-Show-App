// document.addEventListener('DOMContentLoaded', () => {
    const qwerty = document.getElementById('qwerty');
    //const phrase = document.getElementById('phrase');
    const overlay = document.getElementById('overlay');
    const startButton = document.querySelector('.btn__reset');

    let missedGuesses = 0;
    let phrases = [
        'One Minute',
        'Shoot for the sky',
        'Aim for the moon',
        'Morning coffee is the best',
        'Once upon a time in mexico'
    ];

    // return a random phrase from an array
    function getRandomPhraseAsArray (arr) {
    // Generate a number between 1 and array length
    const randomNumber = Math.floor(Math.random() * arr.length);
    // Select single random phrase using randomNumberIndex as index position
    const randomPhrase = arr[randomNumber];
        // Split the phrase into arrays of letter
        return randomPhrase.split('');
    }

    const phraseArray = getRandomPhraseAsArray(phrases);
    
    // adds the letters of string to the display
    function addPhraseToDisplay (arr) {
        
        const phrase = document.querySelector('ul');

        for ( i = 0; i < arr.length; i += 1) {
            const list = document.createElement('li');
            list.textContent = arr[i];
            console.log(list);
            phrase.appendChild(list);

            if ( arr[i] === ' ' ) {
                list.className = 'space';
            } else {
                list.className = 'letter';
            }
        }
    }

    addPhraseToDisplay(phraseArray);

    // check if a letter is in the phrase
    const checkLetter = ('click', (button) => {
        const checkLetter = document.querySelector('li');
        if ( checkLetter === 'BUTTON') {
            let match = null;
        } 
        for ( i = 0; i < checkLetter.length; i += 1) {
            if (button.textContent === checkLetter[i].textContent ) {
                match = button.textContent;
            }
        }
        return match;
    })

    // check if the game has been won or lost
    const checkWin = () => {
        const letters = document.querySelectorAll('.letter');
        const letterShow = document.querySelectorAll('.show');
    }

    // listen for the start game button to be pressed
    startButton.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    // listen for the onscreen keyboard to be clicked
    qwerty.addEventListener('click', (e) => {
        const click = document.querySelectorAll('.tries img');
        const tries = document.getElementsByClassName('.tries:last-child');
        //const results =  checkLetter();
        if (e.target.tagName === 'BUTTON') {
            
        } else {
            tries.remove
            missedGuesses+= 1;
        }
    });
// });