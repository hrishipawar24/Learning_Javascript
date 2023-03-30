/*
Problem-1 Rectangle Object
Create a rectangle object with length and width properties
Create two methods area and perimeter, that will return the area and perimeter of the rectangle*/
let obj={
  length : 20,
  width : 10,

  area: function(){
    return (this.length*this.width);
  },

  peri : function(){
  return (2*(this.length+this.width));
  }
}

let x= obj["area"]();
let y = obj["peri"]();

console.log("area is: ",x);
console.log("perimeter is: ",y);
