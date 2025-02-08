function showdata(){
    let shname=document.querySelector('#showname')
    let shage =document.querySelector('#showage')
    let getname=localStorage.getItem('name')
    let getage=localStorage.getItem('age')

    shname.innerHTML=getname
    shage.innerHTMl=getage
    
}

function clearr(){
location.reload()

}
function savedata(){
    let name=document.querySelector('#name').value
    let age=document.querySelector('#age')

}