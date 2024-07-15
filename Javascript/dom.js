// let btns=document.querySelectorAll("button");
// console.dir(btns)
// for(btn of btns){
//     btn.onclick=print;
//     btn.onmouseenter=function(){
//         console.log("Moise")
//     }
//     btn.addEventListener("click",print)
//     btn.addEventListener("click",Name)
//     btn.addEventListener("dblclick",function(){
//         console.log("Thamks")
//     })
// }
// function print(){
//     console.log("Hello")
// }
// function Name(){
//     console.log("Yogesh")
// }
// btn.onclick=print
// btn.onclick=function(){
//     console.log("Hello World");
// }


// let btn=document.querySelector("button")
// btn.addEventListener("click",function(){
//     let h3=document.querySelector("h3")
//     let random=getrandomcolor()
//     h3.innerText=random;
//     let div=document.querySelector("div")
//     div.style.backgroundColor=random
//     console.log("color updated")
// })
// function getrandomcolor(){
//     let red=Math.floor(Math.random()*255)
//     let green=Math.floor(Math.random()*255)
//     let blue=Math.floor(Math.random()*255)
//     let color=`rgb(${red},${green},${blue})`
//     return color;
// }


// let input=document.querySelector("input")
// input.addEventListener("keydown",function(event){
//     console.log(event.code)
//     console.log(event.key)
//     console.log(input.value)
//     console.log("Key was pressed")
// })
// let form=document.querySelector("form")
// form.addEventListener("submit",function(event){
//     event.preventDefault()
//     console.log("Hello")
//     let input=document.querySelector("#username")
//     let pass=document.querySelector("#password")
//     console.log(pass.value)
//     console.log(input.value)
//     alert(`${input.value} your password is ${pass.value}`)
// })





// h1=document.querySelector("h1")
// function changecolor(color,delay,nextcolor){
//     setTimeout(()=>{
//         h1.style.color=color
//         nextcolor();
//     },delay)
// }
// changecolor("red",1000,()=>{
//     changecolor("Yellow",1000,()=>{
//         changecolor("green",1000)
//     })
// })


// function savedb(data,success,failure){
//     let internetspeed=Math.floor(Math.random()*10)+1
//     if(internetspeed>4){
//         success()
//     }
//     else{
//         failure();
//     }
// }
// savedb("Hello",()=>{
//     console.log("Success1")
//     savedb("hlo",()=>{
//         console.log("Success2")
//     },()=>{
//         console.log("failure2")
//     })
// },()=>{
//     console.log("Failure1")
// }
// )
 
// function savebd(data){
//     return new Promise((resolve,reject)=>{
//         let internetspeed=Math.floor(Math.random()*10)+1
//         if(internetspeed>4){
//             resolve("Success")
//         }
//         else{
//             reject("Failure");
//         }
//     })
// }
// savebd("hello").then((result)=>{
//     console.log("Saved1")
//     console.log("result of promise ",result)
//     return savebd("hlo")
// })
// .then((result)=>{
//     console.log("Saved2")
//     console.log("result of promise ",result)
//     return savebd("gl")
// })
// .then((result)=>{
//     console.log("Saved3")
//     console.log("result of promise ",result)
// })
// .catch((error)=>{
//     console.log("Fail")
//     console.log("error of promise ",error)
// })


// async function greet(){
//     //throw "eoor"
//     return "hello"
// }
// greet()
// .then((result)=>{
//     console.log("Success")
//     console.log(result);
// })
// .catch((error)=>{
//    console.log("Error")
//    console.log(error)
// })

function num(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let num=Math.floor(Math.random()*10)+1
            if(num>5){
                console.log(num);
                resolve()
            }
            else{
                reject("hlo");
            }
        },1000);
    })
}
async function demo(){
    try{
        await num()
        num()
    }
    catch(error){
        console.log(error)
    }
}
    