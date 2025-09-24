type sumInput = string | number;

function sum(a:sumInput , b:sumInput){
      
    const A = typeof(a)==='string' ? parseFloat(a):a;
    const B = typeof(b)==='string' ? parseFloat(b):b;

    return A+B;
}

let res:number = sum(10,20);
console.log(res);