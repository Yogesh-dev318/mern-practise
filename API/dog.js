url="https://dog.ceo/api/breeds/image/random"
let btn=document.querySelector("button")
btn.addEventListener("click",async ()=>{
    console.log("click")
    let rm=await dog();
    let img=document.querySelector("img");
    img.setAttribute("src",rm)
})
async function dog(){
    try{
        let res=await axios.get(url)
        return (res.data.message)
    }
    catch(e){
        console.log("Error:",e)
    }
}