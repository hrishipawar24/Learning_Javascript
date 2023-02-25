/*
Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
*/

let username = "hrishi";
let password = "pawar";
let input_username = "hrishi";
let input_password = "pawar";
if (username == input_username) {
  if (password == input_password) {
    console.log("You are Login Successfully");
  } else {
    console.log("Your password is wrong \n you can not login");
  }
}
else {
  console.log("Your username is wrong\n you can not login");
}
