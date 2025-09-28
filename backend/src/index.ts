interface User{
    id:string
    name:string
    age:number
    email:string
    password:string
}

type UpdateProps = Pick<User , 'name' | 'email' > //only pick these 2 

type UpdateProps2 = Partial<UpdateProps> // optional we can take

//readonly we cannot modify it

type User1={
     readonly name:string;
     readonly age:number;
}

const user:User1={
    name:"Kiran",
    age:21
}
