class UserDetails {
    name: string;
    email: string
    place:string=""//if u declare anything here it is madatory to use it so intialize it here 
    constructor(name: string, email: string) {
        this.email = email;
        this.name = name
    }
}

const salmanVaipees= new UserDetails("salman","salman@mail")
salmanVaipees.place="puthiyakavu"