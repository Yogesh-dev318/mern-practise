// const a=prompt("Enter Your max number")
// let b=Math.floor(Math.random()*a)+1
// let c=prompt("Enter Your Guess")
// while(true){
//     if(c==b){
//         console.log("You Guessed it");
//         break;
//     }
//     if(c=="quit"){
//         console.log("Thanks for playing");
//         break;
//     }else if(c<b){
//         c=prompt("You guess was small try again")
//     }
//     else if(c>b){
//         c=prompt("You guess was large try again")
//     }
//     else{
//         c=prompt("Enter number again.");
//     }
// }
// let arr={
//     add:function(a,b){
//         return a+b;
//     },
//     Names:{
//     name:"Yogesh",
//     name2:"Rohan"},
//     Age:{
//         Yogesh:"20",
//         Rohan:"19"
//     }
// }
// function dice(b){
//     let a=Math.floor(Math.random()*b)+1
//     console.log(a);
// }
// dice(50);

// function number(a){
//     let b=Math.floor(Math.random()*a)+1
//     for(let i=1;i<=b;i++){
//         console.log(i)
//     }
// }
// let a=prompt("Enter a number")
// number(a)


// function length(coutry){
//     let coun=""
//     let len=0
//     for(let i=0;i<country.length;i++){
//         let num=0
//         for(char of country[i]){
//             num++;

//         }
//         if(num>len){
//             len=num;
//             coun=country[i];
//         }
//     }
//     console.log(country.length, coun);
// }
// let country=["Australia","Germany","UnitedStatesofAmerica","bgieuargiuuergrgargahgyogew hgaoerg"]
// length(country)

// let a={
//     add:(a,b)=>{
//         return a+b;
//     }
// }
//settimeout
// let id=setInterval(()=>(console.log("Hello")),2000)
// setTimeout(()=>{
//     clearInterval(id)
//     console.log("Good Bye")
// },4000)
// let arr=[1,2,3,4,5,6,7,8,9,10]
// function prin(el){
//     console.log(el)
// }
// arr.forEach(prin)

// arr.forEach((el)=>{
//     console.log(el)
// })


// let arr=[
//     {
//         name:"Yogesh",
//         marks:"98"
//     },
//     {
//         name:"Rohan",
//         marks:"8"
//     },
//     {
//         name:"Ayush",
//         marks:"9"
//     }
// ]
// arr.forEach((students)=>{
//     console.log(students.marks)
// })

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let newar=arr.map((el)=>{
//     return el*2
// })
// let newar=arr.filter((el)=>{
//     return el%2==0;
// })
// let newar=arr.reduce((res,el)=>{
//     return res+el})
// console.log(newar)
// let max=arr.reduce((acc,el)=>{
//     if(acc<el){
//         return el
//     }else{
//         return acc
//     }
// });
// console.log(max);


let arr=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
let newarr=[...arr,...arr2]