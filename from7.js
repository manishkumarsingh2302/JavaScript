function validate(){
    let name=document.getElementById('name').value
    let age=document.getElementById('age').value
    let contact=document.getElementById('contact').value
    let email=document.getElementById('email').value
    let pass=document.getElementById('password').value
    let cpass=document.getElementById('cpassword').value
    if(name==""){
        alert("Plase fill full your name")
        document.getElementById('name').focus()
        return false
    }
    else if(age==""){
        let erage=document.getElementById('errorpage')
        AbstractRange.innerHTML="plase fiil this page "
        document.getElementById('age').focus()
        return false
    }
    else if (isNaN(age)){
        let erage=document.getElementById('erroage')
        erage.innerHTML='age should be a number'
        let age=document.getElementById('age')
            ag.style.border='2px solid red'
            return false
        
    }
    else if(contact==''){
        alert('please entre contact number')
        document.getElementById('contact').focus()
        return false
}    
else if( isNaN(contact) ){
    alert('please number should be digit')
    document.getElementById('contact').focus()
    return false
    }
    else if(contact.length>10 || contact.length<10){
        alert('entere valid number .. shpould be 10 digit')
        document.getElementById('contact').focus
        return false
    }
    else if(!(email.includes('@'))){
        alert("please entre valid email")
        document.getElementById('email').focus()
        return false
    }
    else if(pass==""){
        alert("plese fill password")
        document.getElementById('password').focus()
        return false
    }
    else if(!(pass.match(/[@#$%*~]/))){
        alert("plase include special charctre")
        document.getElementById('password').focus()
        return false

    }
    else if(cpass==""){
        alert("plese  confrom password")
        document.getElementById('cpassword').focus()
        return false
    }
}