/* Problem 1
Given a square matrix print both the diagonals
*/
let arr=[
  [1,2,3,0],
  [4,5,6,8],
  [7,8,9,9],
  [9,9,9,7]
];
let rows=arr.length;
let cols=arr[0].length;
let left="";
let right="";
for (let i=0;i<=rows-1;i++){
  for (let j=0;j<=cols-1;j++){
    if(i==j){
      left=left+arr[i][j]+" ";
    }
    if(i+j==rows-1){
      right=right+arr[i][j]+" ";
    }
  }
}
console.log("Left diagonal is", left); //1597
console.log("Right diagonal is", right); //0689
