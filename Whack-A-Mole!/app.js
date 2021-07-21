const square = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const result = document.querySelector('#result')
let timeLeft = document.querySelector('#time-left')

let hitPosition
let score = 0
let currentTime = 20
let timerId = null

function squareRandom() {
  square.forEach(className => {
    className.classList.remove('mole')
  })
  let randomSquare = square[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')
  
  hitPosition = randomSquare.id
}

square.forEach(id => {
  id.addEventListener('mousedown', ()=> {
    if(id.id === hitPosition) {
    score++
      result.textContent = score
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(squareRandom, 500)
}

moveMole()

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime
  if (currentTime === 0) {
    clearInterval(timerId)
    clearInterval(countDownTimer)
    timeLeft.textContent = `Gameover! your score : ${score}!`
  }
}

let countDownTimer = setInterval(countDown, 1000)

