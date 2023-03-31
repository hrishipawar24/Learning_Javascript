/* Problem 1 :
Given an array find the unique items in the array
*/

let arr=[1,1,2,2,3,3,4,4,5,6,6,7,7];
let obj={};
for(let i=0; i<=arr.length-1; i++){
  if(obj[arr[i]]==undefined){
    obj[arr[i]]=1
  }else{
    obj[arr[i]]++
  }
}
for(let key in obj){
  if(obj[key]==1){ //its use for object key
    console.log(key,"number is unique")
  }
