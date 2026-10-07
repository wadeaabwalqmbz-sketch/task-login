let name = prompt("enter yore name");
let age = Number(prompt("enter youer age"));

let user = {
  name: name,
  age: age,
  hasAccess: age >= 20 
};

console.log(user);