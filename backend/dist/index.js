"use strict";
//types have unions and intersections
const user = {
    name: "Kiran",
    age: 23,
};
function User(user) {
    if ('name' in user && 'age' in user) {
        // Inside here, TypeScript knows it's a User – safe to access!
        return `Student name is ${user.name} and age is ${user.age}`;
    }
    // Fallback if it's just a Student
    return `This is a student with grade ${user.grade}`;
}
const x = User(user);
console.log(x);
