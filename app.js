let gameSeq = [];
let userSeq = [];

let btns = ["yellow" ,"red","purple","green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;
    }

    levelUp();
});

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = Level ${level};

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(.${randColor});
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
    
}

function gameFlash(btn   ){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);


}

function btnPress(){
    console.log(this);
    let btn = this;
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userFlash(this);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

function checkAns(lev){
    console.log("curr level = ", level);
    let idx = level-1;

    if(userSeq[lev] === gameSeq[lev]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }   
    }
    else{
        h2.innerHTML = Game Over! Your Score Was <b>${level}</b> <br> Press Any Key To Start.;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    } 
} 

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}
