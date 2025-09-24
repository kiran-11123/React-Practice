"use strict";
function sum(a, b) {
    const A = typeof (a) === 'string' ? parseFloat(a) : a;
    const B = typeof (b) === 'string' ? parseFloat(b) : b;
    return A + B;
}
let res = sum(10, 20);
console.log(res);
