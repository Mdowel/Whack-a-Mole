const startBtn = document.getElementById('start-btn')
const moleHoles = document.querySelectorAll('.hole')
const timerEl = document.getElementById('timer')
let timesUp = false

function getRandomIndex() {
    index = Math.floor(Math.random() * 3) + 1
    console.log('random index:', index)
    return index
}

function getRandomTime(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min
}

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
        } else {
            seconds--
        }

    }, 1000)

}

moleHoles.forEach(hole => {
    hole.addEventListener('click', () => {
        console.log(hole.id)
    })
})


function molePeek() {
    const currentMole = document.querySelector(`#hole-${index} .mole`)
    // mole up
    currentMole.classList.remove('hidden')
    
    // mole down
    setTimeout(() => {
        currentMole.classList.add('hidden')
    }, getRandomTime(500, 1000));
}

startBtn.addEventListener('click', () => {
    console.log('start game')
    startBtn.disabled = true
    getRandomIndex()
    runTimer()
    molePeek(index)
})