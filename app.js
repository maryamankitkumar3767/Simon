let userSeq = [];
let compSeq = [];

let level = 0;
let highestLevel = 0;
let started =false;

let btns =["red","orange","blue", "yellow"];


let h2= document.querySelector("h2");

document.addEventListener("keypress",()=>{
    if(started==false){
console.log("key is pressed");
started = true;
    }
    levelUp();
});

function gameFlash(btn){

btn.classList.add("flash");
    setTimeout(function(){
btn.classList.remove("flash");
    }, 150);
     
    }

function userFlash(btn){

btn.classList.add("userFlash");
    setTimeout(function(){
btn.classList.remove("userFlash");
    }, 150);
     
    }

function levelUp() {
    level++;
h2.innerText= `level : ${level}`;



let randIdx = Math.floor(Math.random() * 4);
let randColor = btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`); 
gameFlash(randBtn);
compSeq.push(randColor);
console.log(compSeq);
}

function checkAns(idx){
//console.log("current level : ", level);
//let idx = level-1;

if(userSeq[idx] === compSeq[idx]){
    if(userSeq.length === compSeq.length){
        console.log("same value");
        setTimeout(levelUp,1000);
    }
} else {
    gameOver();
    h2.innerText = `Game over press any key to start your level : ${highestLevel}`;
    reset();
}

}

function btnPress(){
    let btn = this;
    console.log(btn);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
   checkAns(userSeq.length-1);


}

let allBtns = document.querySelectorAll(".btn");

for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    
    gameSeq = [];
    compSeq = [];
    level = 0;
}


function gameOver(){
    if(level > highestLevel){
        highestLevel = level;
        console.log("highest level : ", highestLevel);
    }
}