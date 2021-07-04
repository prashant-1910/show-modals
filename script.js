'use strict';
let number = document.querySelector('.number');
let input = document.querySelector('.guess');
let message = document.querySelector('.message');
let highscoreUI = document.querySelector('.highscore');
let scoreLabel = document.querySelector('.score');
let check = document.querySelector('.check');
let again = document.querySelector('.again');
let body = document.querySelector('body');

let secrateNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// number.textContent = secrateNumber;

const setMessage = msg => {
    message.textContent = msg;
}

const reset = () =>{
    console.log('here');
    score = 20 ;
    scoreLabel.textContent = score;
    input.value = '';
    message.textContent = 'Start guessing...';
    number.textContent = '?';
    body.style.backgroundColor = '#222';
    number.style.width = '15rem';
}

check.addEventListener('click',function(){
    let guess = +input.value;
    console.log(`Secrate Number ${secrateNumber}`);
    if(!guess){
        setMessage(`Enter valid Number 🤞`);
    }else if(guess === secrateNumber){
        setMessage(`You won 😍`)
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem'
        number.textContent = secrateNumber;
        if(highScore < score){
            highScore = score;
            highscoreUI.textContent = highScore;
        }
    }else if(guess != secrateNumber){
        if(score > 0){
            setMessage(guess < secrateNumber ? `Too Low` : `Too high`);
            score--;
            scoreLabel.textContent = score;
        }else{
            setMessage(`You loose`);
        }
    }
});

again.addEventListener('click',reset);