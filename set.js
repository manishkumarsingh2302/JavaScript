// let interval=setInterval(()=>{document.write("rinkiya ke papa");
    
// },1000)

var st=0
function start(){
    var c=0
let count=document.getElementById('count')
st=setInterval(()=>{
    count.innerHTML=c++
},100)

}
function Stop(){
    clearInterval(st)
}
//time out function
setTimeout(()=>{
    alert("hello")
},1000)
//=================
let frm =document.querySelector('#frm')
setTimeout(()=>{return fem.style.display=("Block")},2000)