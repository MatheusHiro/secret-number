window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
//const guessBt = document.getElementById('button-guess-id')
const message = document.getElementById('guess')
const guess = document.querySelector('.box')
const answer = document.querySelector('.guess-text-container')
recognition.lang = 'pt-Br'
/*let isListening = true

function toogleVoice() {
    if (isListening) {
        console.log('button clicked')
        recognition.stop()
        isListening = false
    } else {
        console.log('button unclicked')
        recognition.start()
        isListening = true
    }
}

guessBt.addEventListener('click', toogleVoice)
*/
recognition.start()
recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    let guessedNumber = e.results[0][0].transcript
    console.log(e.results[0][0].transcript)
    validateGuess(guessedNumber)
}
recognition.addEventListener('end', () => recognition.start())
