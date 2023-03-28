/*Problem -
Create an object with the following functionality
Ability to add student details and 3 subject marks
Methods to find the student with the least and highest total
*/

let details = {
  arr: [],
  addData: function(name, math, eng, phy) {
    let obj = {};
    obj["name"] = name;
    obj["math"] = math;
    obj["eng"] = eng;
    obj["phy"] = phy;
    this.arr.push(obj);
  },
  least: function() {
    let min = Infinity;
    let name;
    for (let i = 0; i <= this.arr.length - 1; i++) {
      let total = this.arr[i]["math"] + this.arr[i]["eng"] + this.arr[i]["phy"];
      if (total < min) {
        min = total;
        name = this.arr[i]["name"];
      }
    }
    console.log(name);
  },
  max: function() {
    let max = -Infinity;
    let name;
    for (let i = 0; i <= this.arr.length - 1; i++) {
      let total = this.arr[i]["math"] + this.arr[i]["eng"] + this.arr[i]["phy"];
      if (total > max) {
        max = total;
        name = this.arr[i]["name"];
      }
    }
    console.log(name);
  }
};
details["addData"]("Hrishi", 34, 45, 77);
details["addData"]("Ram", 88, 56, 76);
details["addData"]("Sita", 45, 54, 67);
details["least"]();
details["max"]();

