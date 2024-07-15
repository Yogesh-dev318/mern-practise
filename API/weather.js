url=`https://api.openweathermap.org/data/2.5/weather?q=`
url2=`,&APPID=b97554de742b803653f0cc8f70cd1c54`
let btn=document.querySelector("button")
btn.addEventListener("click",async ()=>{
    let inp = document.querySelector("input").value;
    console.log(inp)
    let rm=await weather(inp);
    let we=await weatherdes(inp);
    console.log("click")
    let temp=document.querySelector(".temp")
    temp.innerText=(rm)
    let temp2=document.querySelector(".weather")
    temp2.innerText=(we)
})
async function weather(inp){
    try{
        let rem=await axios.get(url+inp+url2)
        return (rem.data.main.temp)
    }
    catch(e){
        console.log(e);
    }
}
async function weatherdes(inp){
    try{
        let rem=await axios.get(url+inp+url2)
        console.log(rem)
        for(col of rem.data.weather){
            return (col.description)
        }
    }
    catch(e){
        console.log(e);
    }
}