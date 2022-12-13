class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    get age(){
        return this._age
    }

    set age(age:number){
        if(age<0){
            console.log("invalid");
            
        }
        this._age=age
    }

}

const sal=new Person()
