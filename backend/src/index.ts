//types have unions and intersections

type User = {
    name:string;
    age:number;
}
type Student ={
    grade:string
}

type CollegeStudent = User & Student



const user ={

    name:"Kiran",
    age:23,
    grade:"A"

}

function User(user:CollegeStudent):string{
      return `Student name is ${user.name} and Grade is ${user.grade}`
}


const x = User(user);

console.log(x);


