function validateGuess(guessedNumber) {

    const numberMapping = {
        'um': 1,
        'dois': 2,
        'três': 3,
        'quatro': 4,
        'cinco': 5,
        'seis': 6,
        'sete': 7,
        'oito': 8,
        'neve': 9
    }

    const number = numberMapping[guessedNumber] ? numberMapping[guessedNumber] : parseInt(guessedNumber)
    if (invalidGuess(number)) {
        printInvalidGuess()
    } else if (invalidNumber(number)) {
        printInvalidNumber()
    } else {
        if (number >= floorValue && number <= ceilingValue) {
            guess.textContent = number

            if (number == secretNumber) {
                document.body.innerHTML = `<h1>Congrats! You got it! <i class="fa-regular fa-face-grin-wink"></i></h1>
                <h3 class="congrats">The secret number was <strong>${secretNumber}</strong></h3>
                <button id="playAgain" class="playAgain-bt">Play Again</button>`

            } else if (number > secretNumber) {
                message.classList.remove('hidden')
                message.innerHTML = `        <div id="guess" class="message"> <!--Use class hidden in the future as well-->
                    <p class="guess-text">Your guess was:
                    <p>
                    <div class="box">${number}</div>
                    <div class="guess-text-container">The correct number is lower! <i class="fa-solid fa-arrow-trend-down"></i></div>
                </div>`
            } else {
                message.classList.remove('hidden')

                message.innerHTML = `        <div id="guess" class="message"> <!--Use class hidden in the future as well-->
                    <p class="guess-text">Your guess was:
                    <p>
                    <div class="box">${number}</div>
                    <div class="guess-text-container">The correct number is higher! <i class="fa-solid fa-arrow-trend-up"></i></div>
                </div>`

            }
        }
    }


}

function invalidNumber(number) {
    return number < floorValue || number > ceilingValue
}

function printInvalidGuess() {
    console.log('Your guess was invalid, it must be a number!')
    message.classList.remove('hidden')
    message.innerHTML = `<div id="guess" class="message invalid"> 
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p class="guess-text">Your guess is not valid, it must be a number!
        <p>
    </div>`
}

function printInvalidNumber() {
    console.log(`Your guess was invalid, it must be above ${floorValue} and bellow ${ceilingValue}!`)
    message.classList.remove('hidden')
    message.innerHTML = `<div id="guess" class="message invalid"> 
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p class="guess-text">Your guess was invalid, it must be above ${floorValue} and bellow ${ceilingValue}!
        <p>
    </div>`

}

function invalidGuess(number) {
    return Number.isNaN(number)
}

document.body.addEventListener('click', e => {
    if (e.target.id === 'playAgain') {
        window.location.reload()
    }
})