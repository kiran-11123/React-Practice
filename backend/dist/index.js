"use strict";
//types have unions and intersections
const user = {
    name: "Kiran",
    age: 23,
    grade: "A"
};
function User(user) {
    return `Student name is ${user.name} and Grade is ${user.grade}`;
}
const x = User(user);
console.log(x);
