let mark: number | string = 55//the value of mark can either be a number or string both will accept

mark = 9
mark = "5"

/***********************************TYPE*******************************/
type user = {
    name: string
    id: number
}

type admin = {
    username: string
    id: number
}

let salman: user | admin = {//the value can either be a user or admin type
    name: "salman",
    id: 555
}

salman = {//we used union so we can either give name or reassign/set username
    username: "salman",
    id: 121
}

/******************************************FUNCTION****************************************************/

function fetching(id: number | string) {
    console.log(`coming data is ${id}`);
    //id.toLowerCase()   u can't do this 
    if (typeof id === "number") {
        console.log(id.toFixed());
    } else {
        console.log(id.toUpperCase());
    }

}

fetching(3.9)
fetching("here it is")

/******************************ARRAY***************************************************************************/

//1st method
const data: string[] | number[] = [1, 2, 3]//in this case the array elemnts can either be string type or number can't be both

const data2: string[] | number[] = ["1", "2", "3"]

//another method
const data3:(string|number|boolean)[] =["1",true,2,3] //in this it is possible to arrange array elemts with both  type if you want you can add more type too