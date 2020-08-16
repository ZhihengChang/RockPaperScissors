let decision = null;
let myScore = oppScore = 0;

var ROCKIMGPATH = "../../img/rock.png";
var PAPERIMGPATH = "../../img/paper.png";
var SCISSORSIMGPATH = "../../img/scissors.png";

//set image to rock image
function setRockImg(){
    decision = "rock";
    document.getElementById('meImg').src = ROCKIMGPATH;
}

//set image to paper image
function setPaperImg(){
    decision = "paper";
    document.getElementById('meImg').src = PAPERIMGPATH;
}

//set image to scissors image
function setScissorsImg(){
    decision = "scissors";
    document.getElementById('meImg').src = SCISSORSIMGPATH;
}

function submit(){
    //get Opponent decision 
    let oppDecision = getOppDecision();
    setOppImg(oppDecision);
    compare(decision, oppDecision);
}

function getOppDecision(){
    let oppDecision = null;
    //get a random number between 0-3
    let i = randNum(0, 3);
    switch(i){
        case 0:
            oppDecision = "rock";
            break;
        case 1:
            oppDecision = "paper";
            break;
        case 2:
            oppDecision = "scissors";
            break;
    }
    return oppDecision;

}

function setOppImg(oppDecision){
    (oppDecision == 'rock')? document.getElementById('oppImg').src = ROCKIMGPATH :
    (oppDecision == 'paper')? document.getElementById('oppImg').src = PAPERIMGPATH :
    document.getElementById('oppImg').src = SCISSORSIMGPATH;
}

//returns a random integer from start include to end exclude
function randNum(start, end){
    let n = Math.random() * (end - start) + start;
    return Math.floor(n);
}

function compare(myDecision, oppDecision){
    if(myDecision == oppDecision){
        tie();
        return;
    }
    if(myDecision == 'rock'){
        (oppDecision == 'paper')? lose() : win();
    }else if(myDecision == 'paper'){
        (oppDecision == 'scissors')? lose() : win();
    }else{
        (oppDecision == 'rock')? lose() : win();
    }
}

function win(){
    myScore++;
    document.getElementById('myScore').innerHTML = myScore;
    document.getElementById('alert').innerHTML = 
    "<span style='color: green;'>You Win!</span>";
}

function lose(){
    oppScore++;
    document.getElementById('oppScore').innerHTML = oppScore;
    document.getElementById('alert').innerHTML = 
    "<span style='color: red;'>You Lose!</span>";
}

function tie(){
    document.getElementById('alert').innerHTML = 
    "<span style='color: orange;'>Tie!</span>";
}

