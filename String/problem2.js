/*Problem 2 :
Given a string in lower case convert it to upper case
*/
let name="ramakantaacharekar";

let lower="abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let bag="";

for(let i=0; i<=name.length-1; i++){
for(let j=0;j<=lower.length-1; j++){
  if(name[i]==lower[j]){
      bag=bag+upper[j];
    } } } console.log(bag)

