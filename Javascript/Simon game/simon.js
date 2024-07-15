let gameSeq=[]
let userSeq=[]
let started=false
let level=0
let h2=document.querySelector("h2")
let btns=["yellow","red","purple","green"]
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("started")
        started=true
        levelUp();
    }
})
function levelUp(){
    userSeq=[]
    level++;
    h2.innerText=`level ${level}`
    let randIdx=Math.floor(Math.random()*3)
    let randColor=btns[randIdx]
    let randbtn=document.querySelector(`.${randColor}`)
    gameSeq.push(randColor)
    console.log(gameSeq)
    btnFlash(randbtn)

}
function btnFlash(btn){
    // console.log("hlo")
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 200);
}
function checkAsn(index){
    // let index=level-1
    if(userSeq[index]===gameSeq[index]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }
    else{
        h2.innerHTML=`Game Over! Your Score was ${level} Press any Key to Start`
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },200)

        reset()
    }
}
function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 200);
    userColor=btn.getAttribute("id")
    userSeq.push(userColor)
    checkAsn(userSeq.length-1);
}
function btnpress(){
    let btn=this
    // console.log(btn)
    userflash(btn)

}

let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    gameSeq=[]
    userSeq=[]
    level=0
    started=false
}