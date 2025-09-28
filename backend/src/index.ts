// Arrays

interface User{
     firstName:string,
     lastName:string,
     age:number
}

function isLegal(user:User[]):User[]{

    let result =[];
       
    for(let i=0;i<user.length;i++){

        
        if(user[i].age > 18){
             result.push(user[i]);
        }


    

    
    }

    return result;
}

const users: User[] = [
    { firstName: "John", lastName: "Doe", age: 20 },
    { firstName: "Jane", lastName: "Smith", age: 16 },
    { firstName: "Bob", lastName: "Wilson", age: 25 }
];
console.log(isLegal(users));  // Same output as Fix 1
console.log(isLegal([])); 

