let ul=document.querySelector("ul")
let input=document.querySelector("input")
let btn=document.querySelector("button")
btn.addEventListener("click",function(){
    console.log("click")
    let newli=document.createElement("li")
    let delbtn=document.createElement("button")
    newli.innerText=input.value
    delbtn.innerText="Delete"
    delbtn.classList.add("delete")
    ul.appendChild(newli)
    newli.appendChild(delbtn)
    input.value=""
})
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let a=event.target.parentElement
        a.remove();
    }
    // event.target.parentElement.remove
})