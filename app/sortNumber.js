const floorValue = 0
const ceilingValue = 100
const secretNumber = generateRandomNumber()
const showedLowestValue = document.getElementById('lowest-value')
const showedHighestValue = document.getElementById('highest-value')

function generateRandomNumber() {
    return parseInt(Math.random() * (ceilingValue + 1))
}

showedHighestValue.textContent = ceilingValue
showedLowestValue.textContent = floorValue

console.log('Secret number is: ', secretNumber)