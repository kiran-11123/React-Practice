"use strict";
function greet(user) {
    if ('name' in user && 'permissions' in user) {
        return `Admin name is : ${user.name} and permissions is ${user.permissions}`;
    }
    else {
        return `User name is : ${user.name} and age is ${user.age}`;
    }
}
const x = greet({
    name: "Kiran",
    age: 25
});
console.log(x);
