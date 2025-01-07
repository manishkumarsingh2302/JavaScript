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