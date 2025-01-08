function validate(){
    let name=document.getElementById('name').value
    let age=document.getElementById('age').value
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
}