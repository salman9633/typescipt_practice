let user = {
    name: "salman",
    mail: 's@g.com',
    active: true
}
console.log(user.mail)

//object as params
// function createUser({ names: string, isPaid: boolean }) { }

// let newUser={ names: "salman", isPaid: true }

// createUser(newUser)

//returning object
// function objReturn(): { name: string, price: number } {
//     return { name: "salman", price: 100 }
// }


//type aliasis
type User = {//setting type 
    readonly _id: string;//only read it can't make changes on it
    name: string;
    email: string;
    active: boolean
}

function userDetails(user: User): User {
    return { _id: "", name: "", email: "", active: false }
}
userDetails({ _id: "", name: "", email: "", active: false })
