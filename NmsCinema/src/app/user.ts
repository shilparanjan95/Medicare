export class User {

    id : number;
    name : string;
    dob : string;
    address :string;
    email :string;
    password : string;

    constructor(name:string,dob : string,address :string,email :string,password : string)
    {

        this.name = name;
        this.dob = dob;
        this.address = address;
        this.email = email;
        this.password = password;
    }
}


