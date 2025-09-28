// with interfaces we can define object as well as class

// creating a class that imlements interface


interface People{
     name :string,
     age:number;
     //greet:()=>string
}

class Manager implements People{

    name:string;
    age:number
      constructor(name:string , age:number){
           this.name=name;
           this.age =age;
      }


}

let user = new Manager("kiran" ,23);

console.log(user.name)
