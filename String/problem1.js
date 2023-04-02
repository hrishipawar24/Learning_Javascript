/*Problem 1 : 
Given a string count the number of words in that string
*/

let str="I am best in the world";

let count=0;
for(let i=0; i<=str.length-1; i++){
  
  if(str[i]==" "){
    count=count+1;
    
  }
 
} console.log("Total words:-",count+1)

