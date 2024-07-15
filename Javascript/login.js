let btns=document.querySelectorAll("button")
for(btn of btns){
    btn.addEventListener("click",function(event){
        console.log("hlo")
        if(event.target.innerText=="Login"){
            console.log("g")
            let lo=document.querySelector(".name input")
            lo.style.maxHeight="0"
            lo.style.border="0"
        }
        else {
            let lo=document.querySelector(".name input")
            lo.style.maxHeight="54"
            lo.style.border="2"
        }
        // if(event.target.innerText=="Login"){
        //     let lo=document.querySelector(".name input")
        //     lo.computedStyleMap.maxheight="0"
        // }
        // else if(event.target.innerText=="Sign Up"){
        //     console.log("g")
        //     let a=document.createElement("input")
        //     a.classList.add("input")
        //     document.querySelector(".login").append(a)

            
        // }
    })
}
