"use strict";
const input = {
    emp_name: "Kiran",
    age: 24,
    address: {
        city: "bengaluru",
        country: "India",
        pincode: 251100
    }
};
function greet(details) {
    if (details.age > 18 && details.address.country === 'India') {
        return `${details.emp_name} is Eligible to Vote in ${details.address.city}`;
    }
    else {
        return `${details.emp_name} is not Eligible to Vote in ${details.address.city}`;
    }
}
const result = greet(input);
console.log(result);
