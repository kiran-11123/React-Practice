//types

type User = {
    name:string;
    age:number;
}

function isLegal(user:User):boolean{
       
    return user.age>18;
}

const x = isLegal({name:"Kiran" , age:25}) ;
console.log(x);

