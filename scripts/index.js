const guessInput =document.getElementById('guess')
const submitbtn =document.getElementById('submit-btn')
const resultElement =document.getElementById('result')
const triesElement =document.getElementById('tries')

let numberToGuess
let tries = 0

  function createNumber () {
  numberToGuess = Math.floor(Math.random() * 50) + 1
 }

createNumber()

  submitbtn.addEventListener('click', () => {
  const guess = parseInt(guessInput.value)

if (isNaN(guess)) {
    resultElement.textContent = 'Wrong number!'
    return
  }
  tries++
  if (guess === numberToGuess) {
    resultElement.textContent = `Congratulation you guess the right number in ${tries} tries.`
    submitbtn.disabled = true 
  } else if (guess < numberToGuess) {
    resultElement.textContent = 'Number to low! Try again.'
  } else {
    resultElement.textContent = 'Too high! Try again'
  }
    triesElement.textContent = `Tries: ${tries}`
    guessInput.value = ''
  })
