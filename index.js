const startBtn = document.getElementById('start-btn')
const moleHoles = document.querySelectorAll('.hole')
const timerEl = document.getElementById('timer')
const scoreEl = document.getElementById('score')
const gameOverPopUp = document.getElementById('game-over-popup')
const finalScoreEl = document.getElementById('final-score')
const restartBtn = document.getElementById('restart-btn')
let timesUp = false
let score = 0

function getRandomIndex() {
    index = Math.floor(Math.random() * moleHoles.length) + 1
    // console.log('random index:', index)
    return index
}

function getRandomTime(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min
}

// function getRandomHole() {
//     const index = Math.floor(Math.random() * 3) + 1
//     const hole = holes[index]
//     return hole
// }

function runTimer() {
    let seconds = 59 
    let timer = setInterval(() => {
        if (seconds > 9) {
            timerEl.innerText = `00:${seconds}`
        } else if (seconds <= 9 ) {
            timerEl.innerText = `00:0${seconds}`
        } else  {
            timerEl.innerText = '00:00'
        }
        
        if (seconds === 0) {
            clearInterval(timer)
            timesUp = true
            console.log('game over')
            gameOverPopUp.classList.remove('hidden')
            finalScoreEl.innerText = score
        } else {
            seconds--
        }

    }, 1000)

}

moleHoles.forEach(hole => {
    hole.addEventListener('click', () => {
        // console.log(hole.id)
        if( hole.id === `hole-${index}` ){
            score++
            scoreEl.innerText = score
            console.log('whack!', hole.id)
        }
    })
})


startBtn.addEventListener('click', () => {
    console.log('start game')
    startBtn.disabled = true
    runTimer()
    getRandomIndex()
    molePeek(index)
})

function molePeek() {
    const time = getRandomTime(400, 900)
    const currentMole = document.querySelector(`#hole-${index} .mole`)
    const currentHole = document.querySelector(`#hole-${index} .hole-img`)
    // mole up
    currentMole.classList.remove('hidden')
    currentHole.classList.add('hidden')
    
    // mole down & repeat
    setTimeout(() => {
        currentMole.classList.add('hidden')
        currentHole.classList.remove('hidden')
        if (!timesUp) {
            getRandomIndex()
            molePeek(index)
        }
    }, time);
}

restartBtn.addEventListener('click', () => {
    gameOverPopUp.classList.add('hidden')
    startBtn.disabled = false
    score = 0
    timesUp = false
    scoreEl.innerText = score
    timerEl.innerText = '1:00'
})