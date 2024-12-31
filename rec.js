function fun(num){
    return num*num*num
  }
  let a =parseInt(prompt("entre a number"))
  let ans =fun(a)
  for(let r=1; r<=ans; r++){
    for(let c=1;c<=r;c++){
      document.write("*")
    }
    document.write("<br>")
  }