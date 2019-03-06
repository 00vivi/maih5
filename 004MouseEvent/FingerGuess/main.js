var r,score=4,grade=7,humanChoice,lastHumanChoice;
var lastWinner="noone",lastComputerChoice;
function rock() {
    humanChoice="rock";
    document.getElementById("myChoice").innerHTML="<img src=\"images/rock.png\"/>";
    judge("rock");
    lastHumanChoice="rock";
}
function paper() {
    humanChoice="paper";
    document.getElementById("myChoice").innerHTML="<img src=\"images/paper.png\"/>";
    judge("paper");
    lastHumanChoice="paper";
}
function scissors() {
    humanChoice="scissors";
    document.getElementById("myChoice").innerHTML="<img src=\"images/scissors.png\"/>";
    judge("scissors");
    lastHumanChoice="scissors";
}
function judge(myChoice) {
    r = 3 * Math.random();
    var computerResult;
    if(grade==1){
        computerResult = onlyRocker();
    }
    else if(grade==2){
        computerResult = learnFromHuman();
    }
    else if(grade==3){
        computerResult = winnerAgain();
        lastComputerChoice=computerResult;
    }
    else if(grade==4){
        computerResult=loseChange();
        lastComputerChoice=computerResult;
    }
    else if(grade==5){
        computerResult=lovePaper();
    }
    else if(grade==6){
        computerResult=randomPlayer();
    }
    else if(grade==7){
        computerResult=cheatingMan(humanChoice);
    }
    else{
        computerResult=computerChoice()
    }
    if(myChoice=="rock"){
        if (computerResult=="rock"){
            document.getElementById("result").innerHTML = "draw";
            lastWinner="noone"
        }
        else if(computerResult=="paper"){
            document.getElementById("result").innerHTML = "you lose";
            lastWinner="computer";
            score-=1;
            isComputerWin=true;
        }
        else{
            document.getElementById("result").innerHTML = "you win";
            score+=1;
            lastWinner="human"
        }
    }
    else if(myChoice=="paper"){
        if (computerResult=="rock"){
            document.getElementById("result").innerHTML = "you win";
            score+=1;
            lastWinner="human"
        }
        else if(computerResult=="paper"){
            document.getElementById("result").innerHTML = "draw";
            lastWinner="noone"
        }
        else{
            document.getElementById("result").innerHTML = "you lose";
            score-=1;
            lastWinner="computer"
        }
    }
    else{
        if (computerResult=="rock"){
            document.getElementById("result").innerHTML = "you lose";
            score-=1;
            lastWinner="computer"
        }
        else if(computerResult=="paper"){
            document.getElementById("result").innerHTML = "you win";
            lastWinner="human"
            score+=1;
        }
        else{
            document.getElementById("result").innerHTML = "draw";
            lastWinner="noone"
        }
    }
    if(score>=5){
        score=0;
        grade+=1;
    }
    document.getElementById("result").innerHTML="the "+grade+" level, the score is "+score;
    if(grade>7){
        document.getElementById("result").innerHTML="NB,PASS  "+score;
    }
}
function computerChoice() {
    if (r < 1) {
        document.getElementById("computerChoice").innerHTML = "<img src='images/rock.png'>";
        return "rock"
    } else if (r < 2) {
        document.getElementById("computerChoice").innerHTML = "<img src='images/scissors.png'>";
        return "scissors"
    } else {
        document.getElementById("computerChoice").innerHTML = "<img src='images/paper.png'>";
        return "paper"
    }
}
function onlyRocker() {
    document.getElementById("computerChoice").innerHTML="<img src='images/rock.png'>";
    return "rock";
}
function learnFromHuman() {
    document.getElementById("computerName").innerHTML="模仿帝";
    document.getElementById("computerChoice").innerHTML="<img src='images/"+lastHumanChoice+".png'>";
    return lastHumanChoice;
}
function winnerAgain() {
    document.getElementById("computerName").innerHTML="赢了还出";
    if(lastWinner=="computer"){
        document.getElementById("computerChoice").innerHTML="<img src='images/"+lastComputerChoice+".png'>";
        return lastComputerChoice;
    }
    var temp=computerChoice();
    document.getElementById("computerChoice").innerHTML="<img src='images/"+temp+".png'>";
    return temp;
}
function loseChange() {
    document.getElementById("computerName").innerHTML="输了就换";
    if(lastWinner=="human"){
        getResultExclude(lastComputerChoice);
        document.getElementById("computerChoice").innerHTML="<img src='images/"+lastComputerChoice+".png'>";
        return temp;
    }
    temp=computerChoice();
    document.getElementById("computerChoice").innerHTML="<img src='images/"+temp+".png'>";
    return temp;
}
function getResultExclude(exclusion){
    var temp=computerChoice();
    if(temp==exclusion){
        return getResultExclude(exclusion);
    }
    else{
        return temp;
    }
}
function lovePaper(){
    r= Math.random()*3;
    var temp;
    document.getElementById("computerName").innerHTML="爱布先生";
    document.getElementById("computerChoice").innerHTML="<img src='images/"+temp+".png'>";

    if (r < 0.8) {
        document.getElementById("computerChoice").innerHTML = "<img src='images/rock.png'>";
        return "rock"
    }
    else if (r < 1.7) {
        document.getElementById("computerChoice").innerHTML = "<img src='images/scissors.png'>";
        return "scissors"
    }
    else {
        document.getElementById("computerChoice").innerHTML = "<img src='images/paper.png'>";
        return "paper"
    }
    return temp;
}
function randomPlayer(){
    r= Math.random()*3;
    var temp;
    document.getElementById("computerName").innerHTML="随心所欲";
    document.getElementById("computerChoice").innerHTML="<img src='images/"+temp+".png'>";

    if (r < 1) {
        document.getElementById("computerChoice").innerHTML = "<img src='images/rock.png'>";
        return "rock"
    }
    else if (r < 2) {
        document.getElementById("computerChoice").innerHTML = "<img src='images/scissors.png'>";
        return "scissors"
    }
    else {
        document.getElementById("computerChoice").innerHTML = "<img src='images/paper.png'>";
        return "paper"
    }
    return temp;
}
function cheatingMan(humanChoice){
    document.getElementById("computerName").innerHTML="作弊爷爷";
    if(humanChoice=="rock"){
        r=Math.random();
        if(r<0.5){
            document.getElementById("computerChoice").innerHTML="<img src='images/paper.png'>";
            return "paper";
        }
        else{
            return computerChoice();
        }
    }
    if(humanChoice=="paper"){
        r=Math.random();
        if(r<0.5){
            document.getElementById("computerChoice").innerHTML="<img src='images/scissors.png'>";
            return "scissors";
        }
        else{
            return computerChoice();
        }
    }
    if(humanChoice=="scissors"){
        r=Math.random();
        if(r<0.5){
            document.getElementById("computerChoice").innerHTML="<img src='images/rock.png'>";
            return "rock";
        }
        else{
            return computerChoice();
        }
    }
}