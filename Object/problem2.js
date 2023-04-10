/
Problem 2 :
Given a string print, the number of times each character appears
*/

let arr="hrishikesh";
let obj={};
for(let i=0; i<=arr.length-1; i++){
  if(obj[arr[i]]==undefined){
    obj[arr[i]]=1
  }else{
    obj[arr[i]]++
  }
}console.log(obj);
