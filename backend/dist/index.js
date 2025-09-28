"use strict";
//interfaces
const input = {
    emp_name: "Kiran",
    department: "SCB"
};
function greet(name) {
    return `Hello ${name.emp_name} , department ${name.department}`;
}
const result = greet(input);
console.log(result);
