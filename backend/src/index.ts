interface User{
    name:string;
    age:number;
    isLegael():boolean;
}
class Manager implements User{
      
    name:string;
    age:number;


    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    
    isLegael(): boolean {
        
        if(this.age>18){
            return true;
        }
        else{
            return false;
        }
    }
}

const m = new Manager("kiran" , 23);
let k :boolean = m.isLegael();
console.log(k);