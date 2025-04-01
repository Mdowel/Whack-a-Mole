const startBtn = document.getElementById('start-btn')
const moleHoles = document.querySelectorAll('.hole')

function getRandomIndex() {
    index = Math.floor(Math.random() * 3) + 1
    console.log('random index:', index)
    return index
}

function getRandomTime(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min
}


moleHoles.forEach(hole => {
    hole.addEventListener('click', () => {
        console.log(hole.id)
    })
})


function molePeek() {
    const currentMole = document.querySelector(`#hole-${index} .mole`)
    currentMole.classList.remove('hidden')

    setTimeout(() => {
        currentMole.classList.add('hidden')
    }, getRandomTime(500, 1000));
}

startBtn.addEventListener('click', () => {
    console.log('start game')
    getRandomIndex()
    molePeek(index)
})