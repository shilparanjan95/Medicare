import { Category } from "./category";

export class Medicine {

    name : string;
    id:string;
    brand:string;
    quantity:number;
    qty:number;
    price:number;
    activate:boolean;
    description:string;
    category:Category;
    sb:number;

    
    constructor(name:string,brand:string,quantity:number,price:number,activate:boolean,description:string,category:Category)
    {


        this.name  = name;
        this.brand = brand;
        this.quantity = quantity;
        this.price = price;
        this.activate = activate;
        this.description = description;
        this.category = category;
    }
}

