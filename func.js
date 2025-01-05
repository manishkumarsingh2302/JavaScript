function add( a,b){
    console.log(a+b)
}
add(2,5)

//let num1=parseInt(prompt("enter number"))
//let num2=parseInt(prompt("enter number"))


function demo(){
    return "manshi"

}
let a = demo()
  console.log(a);
  // or
    console.log(demo())


    // with arg and return valur
    
     function code(a){
        return a*a
     }
      let b=code(2)
      if(b%2==0){
        alert("even")
      }
      else{
        alert("odd")
      }
      //print rectangle 
      function fun(){
        return num*num*num
      }
      let a=parseInt(prompt("entre a number"));
      let ans=fun(a)
      for(let r=1; r<=ans; r++){
        for(let c=1;c<=r;c++){
          document.write("<br>")
        }
      }
      //add total num
       function digit(a){
               let sum=0
               while(a!=0){
                re=a%10;
                sum=sum+re
                a=a/10
               }
               console.log(sum);
       }
       let br=parseInt(prompt("enter numner"))
       demo(b);