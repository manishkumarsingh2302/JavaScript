async function Demo(){
    let apidata=await fetch("https://jsonplaceholder.typicode.com/comments")

let fdata =await apidata.json()
let api=document.querySelector("#apidata")
let dt=fdata.map((e)=>{return e.name +e.id +e.email})
api.innerHTML=dt
//console.log(fdata);
}
Demo()