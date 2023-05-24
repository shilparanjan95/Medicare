import { Category } from "./category";

export class Movie {

    name : string;
    id:string;
    duration:string;
    quantity:number;
    qty:number;
    price:number;
    activate:boolean;
    description:string;
    category:Category;
    starCast:string;

    
    constructor(name:string,duration:string,quantity:number,price:number,activate:boolean,description:string,starCast:string,category:Category)
    {


        this.name  = name;
        this.duration = duration;
        this.quantity = quantity;
        this.price = price;
        this.activate = activate;
        this.description = description;
        this.category = category;
        this.starCast = starCast;
    }
}

