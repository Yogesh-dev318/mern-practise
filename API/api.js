// let url="https://catfact.ninja/fact"
// fetch(url)
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log("data1=",data)
//     return fetch(url)
//     // return response.json()
// })
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log("Data2=",data)
// })
// .catch((error)=>{
//     console.log(error)
// })

// async function getfacts(){
//     try{
//         let res=await fetch(url) 
//         let data= await res.json()
//         qconsole.log(data.fact)
//     }
//     catch(e){
//         console.log(e)
//     }
// }
let btn=document.querySelector("button")
btn.addEventListener("click", async ()=>{
    let fact= await getfacts()
    console.log(fact)
    let p=document.querySelector("#result")
    p.innerText=fact;
})
let url="https://catfact.ninja/fact"
async function getfacts(){
    try{
        let res=await axios.get(url) 
        return (res.data.fact)
    }
    catch(e){
        console.log(e)
        return "NO FACT FOUND"
    }
}