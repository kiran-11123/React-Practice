//types have unions and intersections

type User = {
    name:string;
    age:number;
}
type Student ={
    grade:string
}

type CollegeStudent = User | Student;



const user ={

    name:"Kiran",
    age:23,
    
   

}

function User(user:CollegeStudent):string{
      if ('name' in user && 'age' in user) {
        // Inside here, TypeScript knows it's a User – safe to access!
        return `Student name is ${user.name} and age is ${user.age}`;
    }
    // Fallback if it's just a Student
    return `This is a student with grade ${(user as Student).grade}`;

}

const x = User(user);

console.log(x);


