interface People{
    name :string;
    age:number;
    greet:()=> string;

    greet2?():string;
}

const Person : People ={
      name:"Kiran",
      age:24,
      greet(){
         return `Hi ${name}`
      }
}

console.log(Person);
