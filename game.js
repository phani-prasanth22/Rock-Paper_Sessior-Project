let ComputerMove = '';
let result = '';
let emoji = '';
let vectory=0;
let defeat=0;
let Ties = 0;



function ComMove() {
    let randomNumber = Math.random();  // Move inside function so it generates every time
    if (randomNumber >= 0 && randomNumber < 1/3) {
        ComputerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        ComputerMove = 'paper';
    } else {
        ComputerMove = 'scissors';
    }
}
function setEmoji() {
    if (result === 'You Win') {
        emoji = '<span class="emoji win">🎉</span>';
    } else if (result === 'You Lose') {
        emoji = '<span class="emoji lose">😞</span>';
    } else {
        emoji = '<span class="emoji tie">🤝</span>';
    }
}

function ScoreCard(){
    if (result ==='You Win'){
        vectory += 1;
    }
    else if (result==='You Lose'){ 
        defeat +=1
    }
    else{
        Ties+=1
    }
    document.getElementById("scoreDisplay").innerHTML =
        `<span class="scoreText">Wins: ${vectory} | Losses: ${defeat} | Ties: ${Ties}</span>`;
}


function RockMove() {
    ComMove();  
    if (ComputerMove === 'rock') {
        result = 'Its a Tie';
    } else if (ComputerMove === 'paper') {
        result = 'You Lose';
    } else {
        result = 'You Win';
    }
    ScoreCard();
    setEmoji();
    document.getElementById("result").innerHTML = `You Choose: <strong>scissor</strong><br> Computer Choose: <strong>${ComputerMove}</strong><br> Result: <strong>${result}</strong> ${emoji}`;   
    
}

function PaperMove() {
    ComMove();
    if (ComputerMove === 'rock') {
        result = 'You Win';
    } else if (ComputerMove === 'paper') {
        result = 'Its a Tie';
    } else {
        result = 'You Lose';
    }
    ScoreCard();

    setEmoji();
    
    document.getElementById("result").innerHTML = `You Choose: <strong>Paper</strong><br> Computer Choose: <strong>${ComputerMove}</strong><br> Result: <strong>${result}</strong>${emoji}`;
    
}

function ScissorsMove() {
    ComMove();
    if (ComputerMove === 'rock') {
        result = 'You Lose';
    } else if (ComputerMove === 'paper') {
        result = 'You Win';
    } else {
        result = 'Its a Tie';
    }
    ScoreCard();
    
    setEmoji();
    document.getElementById("result").innerHTML = `You Choose: <strong>scissor</strong><br> Computer Choose: <strong>${ComputerMove}</strong><br> Result: <strong>${result}</strong>${emoji}`;
    
}
