let person_student={
    name :"maha raj",
age :90,
contact:1234,
account_stat:{
    ac_bal :12000,
    account_no:12345
},
personal_details:{
    marita_statues:"inmarrid",
    do:"12jan90"
},
documents:[1234,"123sf"],
fun:function(name){
    alert("inside onject" +name)
}

}
// console.log(person_student.account_stat.ac_bal)
console.log(person_student.documents[1]);
person_student.fun("manish");
// ==================================================

let insaan={
    name:"manish",
    age:20,
    city:"ARA",
    fun:function(){
        console.log(this.name);
    }
}
insaan.fun()
// =======================================================

let ob={
    name :"manish",age:20,contact:56456454
}
for(let ky in ob){
    console.log(ky);
}
// ===========================================================
let emp=[
    {
        name:"manish",age:20,contact:5345,id:154
    },
    {
        name:"manishi",age:20,contact:5375,id:153
    },
    {
        name:"manpj",age:27,contact:5346,id:1545
    }
]
console.log(emp);