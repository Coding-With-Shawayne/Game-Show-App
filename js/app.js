    const qwerty = document.getElementById('qwerty');
    const phrase = document.getElementById('phrase');
    const overlay = document.getElementById('overlay');
    const startButton = document.querySelector('.btn__reset');
    const title = document.querySelector('.title');

    let missedGuesses = 0;
    let phrases = [
        'ONE MINUTE',
        'SHOOT FOR THE STARS',
        'AIM FOR THE MOON',
        'MORNING COFFEE IS THE BEST',
        'ONCE UPON A TIME IN MEXICO'
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
    addPhraseToDisplay(phraseArray);

    // adds the letters of string to the display
    function addPhraseToDisplay (arr) {
        
        const phrase = document.querySelector('#phrase ul');
        
        for (let i = 0; i < arr.length; i += 1) {
            let list = document.createElement('li');
            list.textContent = arr[i];
            // console.log(list);
            phrase.appendChild(list);

            // Check array for space in text
            if ( arr[i] === ' ' ) {
                list.className = 'space';
            } else {
                list.className = 'letter';
            }
        }
    }

    // check if a letter is in the phrase
    function checkLetter (button) {
        // Store all li elements in checkLetter variable
        const checkLetter = document.querySelectorAll('li');
        let match = null;
      
        for (let i = 0; i < checkLetter.length; i += 1) {
            // Compares the text of the button parameter to the text of the li at the current index of the loop
            if (button.textContent === checkLetter[i].textContent.toLowerCase() ) {
                checkLetter[i].classList.add('show');
                match = button.textContent;
            }
        }
        return match;
    }

    checkLetter(addPhraseToDisplay);

    // check if the game has been won or lost
    const checkWin = () => {
        const letter = document.querySelectorAll('.letter');
        const show = document.querySelectorAll('.show');

        if (letter.length === show.length) {
            overlay.className = 'win';
            title.textContent = `CONGRATUATIONS, YOU WON! THE random phrase is ${phraseArray.join('')}`;
            overlay.style.display = 'flex';
            startButton.textContent = 'Play Again!';
            startButton.addEventListener('click', (e) => { 
                setPlayAgain();
            });
        }
        if (missedGuesses > 4) {
            overlay.className = 'lose';
            title.textContent = `You lost! THE CORRECT PHRASE IS ${phraseArray.join('')} Please try again!'`;
            overlay.style.display = 'flex';
            startButton.textContent = 'Try Again!';
            startButton.addEventListener('click', () => { 
                setPlayAgain();
            });
        }
    };
 
    // listen for the start game button to be pressed
    startButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        getRandomPhraseAsArray(phrases);
    });

    // listen for the onscreen keyboard to be clicked
    qwerty.addEventListener('click', (e) => {
        
        let buttonClick = e.target;
        // Check if button has chosen class
        if (buttonClick.tagName === 'BUTTON' || buttonClick.className === 'chosen') {
            buttonClick.className = 'chosen'; // Add the chosen class to the button that was pressed.
            buttonClick.disabled =  true; // Disabled button once clicked
            const letterFound = checkLetter(buttonClick);
            
            // Check if function find a letter, and remove heart and increment missed counter
            if ( letterFound === null ) {
                const lost = document.querySelectorAll('.tries img');
                lost[missedGuesses].src = 'images/lostHeart.png';
                lost.className = 'lost';
                missedGuesses++;
            }
        }
        checkWin();
    });

    function setPlayAgain() {
        
        const resetPhrase = document.querySelectorAll('#phrase ul li');
        const resetLetters = document.querySelectorAll('#qwerty .keyrow button');
        const life = document.querySelectorAll('.tries img');
        //const resetRandomPhrase = document.getElementById('phrases');

        for(let i = 0; i < resetPhrase.length; i+=1) {
            resetPhrase[i].remove(resetPhrase[i]);
        }
        for (let i = 0; i < resetLetters.length; i+=1) {
            resetLetters[i].className = "";
            resetLetters[i].disabled = false;
        }
        // for (let i = 0; i < resetRandomPhrase.length; i+=1) {
        //     resetRandomPhrase[i].length = 0;
        //     console.log(resetRandomPhrase);
        // }
        
        for (let i = 0; i < life.length; i+=1) {
        life[i].src = 'images/liveHeart.png';
        }
        missedGuesses = 0;
        getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(phraseArray);
    }
    
