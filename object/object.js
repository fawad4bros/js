//  object

// <<< 1  object literal >>>
const user = {
  name: "fawad",
  scoure: 3,
  increment: function () {
    user.scoure++;
  },
};
user.increment();
// console.log(user);

// <<< 2  dot notation >>>
const user1 = {};
user1.name = "fawad";
user1.scoure = 3;
user1.increment = function () {
  user1.scoure++;
};
user1.increment();
// console.log(user1);

// <<< 3  Bracket notation >>>
user2 = {};
user2["@name"] = "fawad";
var n = "@";
// console.log(user2["name"]);
// console.log(user2[n + "name"]);
// console.log(user2.@name); // throw an error

// <<< 4  Object.create >>>
const user3 = Object.create(null);
/*whatever we pass in, it will return an empty object even if a object with properties*/
user3.name = "fawad";
user3.scoure = 3;
user3.increment = function () {
  user3.scoure++;
};
user3.increment();
// console.log(user3);

// <<< 5 function objects >>>
function userCreator(name, scoure) {
  const user4 = {};
  user4.name = name;
  user4.scoure = scoure;
  user4.increment = function () {
    user4.scoure++;
  };
  return user4;
}
const newUser = userCreator("fawad", 3);
newUser.increment();
// console.log(newUser);
/* problem: Each time we create a new object 
the data and functions take memory and functions 
are just copies */

// 6 <<< prototype chain/functionStore >>>

function userCreator1(name, scoure) {
  const newUser1 = Object.create(functionStore);
  /* returns empty object but a special bound 
  is created __proto__:functionStore */
  newUser1.name = name;
  newUser1.scoure = scoure;
  return newUser1;
}
const functionStore = {
  increment: function () {
    this.scoure++;
  },
};
const newUser1 = userCreator1("fawad", 3);
newUser1.increment();
/* built-in prototype chain feature first look at the object if 
it does not find the function it will check at the __proto__:functionStore*/
// console.log(newUser1);

/* problem: we are creating the special bound, 
return and Object.create() manually* new keyword solve the problem/

// <<< 7 prototype >>>

/* !! functions are both objects and functions
function functionName(){
  [f]
  {prototype:{
    [f],
    [f]
  }}
}
function multi(num){return num*2}
multi.store = 5
multi(2)

all functions have a default property on their object version
'prototype', which is itself an object - to replace our functionStore object
*/

function UserCreator2(name, scoure) {
  this.name = name;
  this.scoure = scoure;
}
UserCreator2.prototype.increment = function () {
  this.scoure++;
};
const newUser2 = new UserCreator2("fawad", 3);
// new keyword = create an empty object and binds the proto referance this{__proto__:prototype}
/* 
1st
this = Object.create(UserCreator2.prototype)
local memory
  name: "fawad"
  scoure: 3
2nd
  this:{
    name:"fawad"
    scoure: 3
    __proto__:UserCreator2.prototype
  }
3rd
  return this
*/
/*  if we dont use the new keyword here the 'this' will get bound to window object
we capitalize the first letter of function name to indicate that new keyword 
is needed while calling the function
*/
newUser2.increment();
// console.log(newUser2);

// <<< 8 class >>>
// Best practice es6
class UserCreator3 {
  constructor(name, scoure) {
    this.name = name;
    this.scoure = scoure;
  }
  increment() {
    this.scoure++;
  }
}
const newUser3 = new UserCreator3("fawad", 3);
newUser3.increment();
console.log(newUser3);
/* function UserCreator3(name, scoure){
  constructor[f]
  {prototype:{
    increment[f]
  }}
} */
