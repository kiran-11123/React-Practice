"use strict";
// with interfaces we can define object as well as class
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let user = new Manager("kiran", 23);
console.log(user.name);
