let string=""
let buttons=document.querySelectorAll(".button")
for(button of buttons){
    button.addEventListener("click",function(event){
        console.log(event.target)
        if(event.target.innerText=='='){
            string=eval(string)
            document.querySelector("input").value=string
        }
        else if(event.target.innerText=='c'){
            string=""
            document.querySelector("input").value=string
        }
        else{
            string=string+event.target.innerText;
        document.querySelector("input").value=string
        }
        
    })
}
// let string=[]
// let buttons=document.querySelectorAll("button")
// for(button of buttons){
//     button.addEventListener("click",function(event){
//         // console.log(event.target)
//         if(event.target.innerText=="="){
//             if(string[1]=="+"){
//                 // let a=string[0]
//                 // let b=string[2]
//                 for(let i=0;i<string.length;i++){
                    
//                 }
//                 let cal=string[0]+string[2]
//                 string.push(cal)
//                 // document.querySelector("input").value=cal
//             }
//             else if(string[1]=="-"){
//                 let len=string.length
//                 let cal=string[0]-string[2]
//                 document.querySelector("input").value=cal
//             }
//             else if(string[1]=="/"){
//                 let cal=string[0]/string[2]
//                 document.querySelector("input").value=cal
//             }
//             else if(string[1]=="*"){
//                 let cal=string[0]*string[2]
//                 document.querySelector("input").value=cal
//             }
//             else if(string[1]=="^"){
//                 let cal=string[0]^string[2]
//                 document.querySelector("input").value=cal
//             }
//             else if(string[1]=="%"){
//                 let cal=string[0]%string[2]
//                 document.querySelector("input").value=cal
//             }
//         }
//         else if(event.target.innerText=="c"){
//             string=[]
//             document.querySelector("input").value=string
//         }
//         else{
//             parseInt(event.target.innerText)
//             string.push(event.target.innerText)
//             console.log(string)
//             document.querySelector("input").value=string[string.length-1]
//         }
       
//     })
// }