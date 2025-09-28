//interfaces

interface Employee {
   emp_name:String;
   department:String;


}

const input = {
 emp_name : "Kiran",
 department :"SCB"
}



function greet(name:Employee):String{
     return `Hello ${name.emp_name} , department ${name.department}`
}

const result:String = greet(input);
console.log(result);