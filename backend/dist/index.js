"use strict";
//types
function isLegal(user) {
    return user.age > 18;
}
const x = isLegal({ name: "Kiran", age: 25 });
console.log(x);
