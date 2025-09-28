"use strict";
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isLegael() {
        if (this.age > 18) {
            return true;
        }
        else {
            return false;
        }
    }
}
const m = new Manager("kiran", 23);
let k = m.isLegael();
console.log(k);
