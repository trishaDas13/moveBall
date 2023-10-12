let ball = document.querySelector(".ball");
document.addEventListener("keydown", playGame);
let up = 0;
let left = 0;

function playGame(e){
    let bgHeight = document.documentElement.clientHeight;
    let bgWidth = document.documentElement.clientWidth;
    let eleWidth = ball.offsetWidth;
    let key = e.keyCode;
 
    //move right
    if((key == "68" || key == "39") && (left + eleWidth + 10 <= bgWidth)){
        ball.style.left = left + 10 + "px";
        left += 10;
    }

    // move down
    if((key == 83 || key == 40) && (up + eleWidth + 10 <= bgHeight)){
        ball.style.top = up + 10 + "px";
        up += 10;
    }

    //move left
    if((key == 65 || key == 37) && (left - 10 >= 0)){
        ball.style.left = left - 10 + "px";
        left -= 10;
    }

    //move up
    if((key == 87 || key == 38) && (up - 10 >= 0)){
        ball.style.top = up - 10 + "px";
        up -= 10;
    }
}