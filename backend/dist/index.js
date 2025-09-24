"use strict";
const greet = (data) => {
    console.log("The Employee name is " + data.name);
    console.log("The Age of the Employee is " + data.age);
    console.log("The Department is " + data.department);
};
const details = {
    name: "Kiran",
    age: 25,
    department: "SCB"
};
greet(details);
