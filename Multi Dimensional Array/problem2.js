/* Problem 2
Given a matrix print it in the form of a snake
*/
let arr=[
  [1,2,3,4],     //==>0 (0-3)
  [5,6,7,8],     //==>1 (3-0)
  [9,10,11,12],  //==>2 (0-3)
  [13,14,15,16]  //==>3 (3-0)
];

let rows=arr.length;
let cols=arr[0].length;

for (let i=0;i<=rows-1;i++){
  if(i%2==0){
    for (let j=0;j<=cols-1;j++){
      console.log(arr[i][j]);
    }
  } else {
    for (let j=cols-1;j>=0;j--){
      console.log(arr[i][j]);
    }
  }
}
