

let audio = document.getElementById('dice-audio')
let dice = document.getElementById('dice');
let number = document.getElementById('number');

function roll() {
    let number = document.getElementById('number');
    let dice = document.getElementById('dice')
    // let number = document.getElementById('number');
    let audio = document.getElementById('dice-audio')
    audio.play()
    dice.classList.add('roll-dice')
    number.innerText = ' '
    
    setTimeout(() => {
        let random = Math.floor(Math.random()*6)
        dice.classList.remove('roll-dice')
        number.innerText = random;
    }, 1200);
}