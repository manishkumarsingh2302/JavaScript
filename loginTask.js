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