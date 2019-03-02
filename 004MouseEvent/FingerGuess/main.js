var r;
function rock() {
    r = 3 * Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"images/rock.png\"/>;"
    var computerResult=computerChoice();
    judge("rock",computerResult);
}
function paper() {
    r = 3 * Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"images/paper.png\"/>;"
    var computerResult=computerChoice();
    judge("paper",computerResult);
}
function scissors() {
    r = 3 * Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"images/scissors.png\"/>;"
    var computerResult=computerChoice();
    judge("scissors",computerResult);
}
function judge(myChoice, computerResult) {
    if(myChoice=="rock"){
        if (computerResult=="rock"){
            document.getElementById("result").innerHTML = "draw";
        }
        else if(computerResult=="paper"){
            document.getElementById("result").innerHTML = "you lose";
        }
        else{
            document.getElementById("result").innerHTML = "you win";
        }
    }
    else if(myChoice=="paper"){
        if (computerResult=="rock"){
            document.getElementById("result").innerHTML = "you win";
        }
        else if(computerResult=="paper"){
            document.getElementById("result").innerHTML = "draw";
        }
        else{
            document.getElementById("result").innerHTML = "you lose";
        }
    }
    else{
        if (computerResult=="rock"){
            document.getElementById("result").innerHTML = "you lose";
        }
        else if(computerResult=="paper"){
            document.getElementById("result").innerHTML = "you win";
        }
        else{
            document.getElementById("result").innerHTML = "drae";
        }
    }
}
function go() {
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