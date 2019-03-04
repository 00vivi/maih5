var r,score=0,grade=3,lastHumanChoice;
var isComputerWin=false,lastComputerChoice;
function rock() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/rock.png\"/>";
    judge("rock");
    lastHumanChoice="rock";
}
function paper() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/paper.png\"/>";
    judge("paper");
    lastHumanChoice="paper";
}
function scissors() {
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
    else{
        computerResult=computerChoice()
    }
    if(myChoice=="rock"){
        if (computerResult=="rock"){
            document.getElementById("result").innerHTML = "draw";
            isComputerWin=false;
        }
        else if(computerResult=="paper"){
            document.getElementById("result").innerHTML = "you lose";
            score-=1;
            isComputerWin=true;
        }
        else{
            document.getElementById("result").innerHTML = "you win";
            score+=1;
            isComputerWin=false;
        }
    }
    else if(myChoice=="paper"){
        if (computerResult=="rock"){
            document.getElementById("result").innerHTML = "you win";
            score+=1;
            isComputerWin=false;

        }
        else if(computerResult=="paper"){
            document.getElementById("result").innerHTML = "draw";
            isComputerWin=false;
        }
        else{
            document.getElementById("result").innerHTML = "you lose";
            score-=1;
            isComputerWin=true;
        }
    }
    else{
        if (computerResult=="rock"){
            document.getElementById("result").innerHTML = "you lose";
            score-=1;
            isComputerWin=true;
        }
        else if(computerResult=="paper"){
            document.getElementById("result").innerHTML = "you win";
            isComputerWin=false;
            score+=1;
        }
        else{
            document.getElementById("result").innerHTML = "draw";
            isComputerWin=false;
        }
    }
    if(score>=5){
        score=0;
        grade+=1;
    }
    document.getElementById("result").innerHTML="the "+grade+" level, the score is "+score;
    if(grade>=10){
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
    if(isComputerWin){
        document.getElementById("computerChoice").innerHTML="<img src='images/"+lastComputerChoice+".png'>";
        return lastComputerChoice;
    }
    var temp=computerChoice();
    document.getElementById("computerChoice").innerHTML="<img src='images/"+temp+".png'>";
    return temp;
}