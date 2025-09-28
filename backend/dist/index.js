"use strict";
// Arrays
function isLegal(user) {
    return user.filter((a) => a.age > 18);
}
const users = [
    { firstName: "John", lastName: "Doe", age: 20 },
    { firstName: "Jane", lastName: "Smith", age: 16 },
    { firstName: "Bob", lastName: "Wilson", age: 25 }
];
console.log(isLegal(users)); // Same output as Fix 1
console.log(isLegal([]));
