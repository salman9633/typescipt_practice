let value: string = "gdgdfd";
console.log(value);
let user = { name: "salman", age: 21 }

console.log(user.name);
let id = 121212
const cap = "run"
var len = cap.length
console.log(id, user, cap, len);


//function
function add(num: number) {
    return num + 5
}

function stringFn(val: string) {
    return val.toUpperCase
}

function userSignIn(name: string, mail: string, status: boolean): number {
    return 0;//multiple params
}

let userCheck = (name: string, status: boolean = true) => {//giving defaul params 
    let abc = console.log("user can login");

    return abc
}

const hello = (): string => {//arrow functionil function data type specify cheyyumbo retun nirbandham aanu
    let name = 123 + "salman"
    console.log(name);
    return ""
}

function consoleError(err:string):void{//it's not going to return anything ever bcoz of void datatype
    console.log(err);
}

function handleError(err:string):never{//this function also not going to return anything bcoz of never datatype used but this mostly user to handle error
    throw new Error(err)
}

add(2)
stringFn('saLman')
userSignIn('salman', "s@gmail.com", true)
userCheck("salman")
hello()


//array

const marvel= ['IronMan', 'spiderMan', 'Thor']

marvel.map((marvel):string=>{
    console.log(`hero is ${marvel}`);
    return marvel
     
})



/*************************REST PARAMETER********************************************************************************************/


function addn(a:number,...rest:number[]){
    return rest.reduce((p,c)=>
        p+c,0
    )
}

console.log(addn(1,2,3,5));

/*****************************CASTING***************************************************************/
//A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

let a:unknown="salman"

console.log((a as string).length);//by using as we can override type or datatype
//most cases used with unknown

//another way
let x: unknown = 'hello';
console.log((<string>x).length);

//forced CASTING
let l = 'hello';
console.log(((x as unknown) as string).length);


export { }
