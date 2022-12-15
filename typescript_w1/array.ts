const superHeros: string[] = []//declaration
const power: number[] = []

const powerRank: Array<number> = []//another way of declaring array 

superHeros.push("IronMan")
power.push(20, 30)
powerRank.push(1, 2)

/******************************************/
type User = {
    name: string
    isActive: boolean
}

const allUser: User[] = []

allUser.push({ name: "salman", isActive: true })

/******************************************/

const MLModels: number[][] = [
    [1, 2, 3], [9, 5, 3], [6, 0]
]

console.log(MLModels[1][0]);//op=>9
console.log(allUser[0].name);//op=>salman
console.log(powerRank);//op=>[ 1, 2 ]
console.log(MLModels);//op=>[ [ 1, 2, 3 ], [ 9, 5, 3 ], [ 6, 0 ] ]
console.log(MLModels[0]);//op=>[ 1, 2, 3 ]

/*************************FILTER************************************************************************************/

const b: number[] = [1, -1, 2, 3,4]

let a = b.filter(function (value: number) {
    return value >= 0
}
)

let c=b.filter(elem=>elem%2==0)
console.log(c);
let ar=b.map(elem=>elem%2==0)
console.log(ar);


console.log(a);

export { }

