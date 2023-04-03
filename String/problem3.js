/*Problem 3 : 
Given an array of string count the overall total number of characters
*/

let arr=["chuunu","mannu","pannu","kunnu"];
let bag=0;
let count=0;
for(let i=0; i<=arr.length-1; i++){
  
  bag=bag+arr[i].length;
  //bag use store i
}
console.log("In this string thair are Character:-",bag);
