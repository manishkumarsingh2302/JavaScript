let frm =document.querySelector('#frm')
setTimeout(()=>{
     frm.style.display='block'
    },2000)

    //=================
    let btn=document.querySelector('.btn')
    btn.addEventListener('click',()=>{alert("event fire")})