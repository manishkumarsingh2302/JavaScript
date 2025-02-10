// let frm =document.querySelector('#frm')
// setTimeout(()=>{
//      frm.style.display='block'
//     },2000)

//     //=================
//     let btn=document.querySelector('.btn')
//     btn.addEventListener('click',()=>{alert("event fire")})


const multi=()=>{
     let userdata={
          name : document.querySelector('#name').value,
          email:document.querySelector('#email').value,
          password:document.querySelector('#password')
     }
     localStorage.setItem("userdata",JSON.stringify(userdata))
}


let data =JSON.parse(localStorage.getItem('userdata'))
console.log(data); 

//==================================================================

function loginform(){
     let logindata={
          loginemail :document.querySelector('#loginemail').value,
          loginpassword :document.querySelector('#loginpassword').value,
     }
     if(data.email !=logindata.loginemail || data.password !=logindata.loginpassword){
          alert("user not found")
          return false
     }
}