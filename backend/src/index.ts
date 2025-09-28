//interfaces
interface Address{
    city:String;
    country:String,
    pincode :number
}


interface Employee {
   emp_name:String | number;
   department:String;
   age:number;
   address:Address


}

const input = {
 emp_name : 123,
 department :"SCB",
 age:24,
 address:{
    city:"bengaluru",
    country:"India",
    pincode :251100
 }
}



function greet(details:Employee):String{
     
    if(details.age >18 && details.address.country==='India'){
        return `${details.emp_name} is Eligible to Vote in ${details.address.city}`;
    }
    else{
        return `${details.emp_name} is not Eligible to Vote in ${details.address.city}`
    }
}

const result:String = greet(input);
console.log(result);