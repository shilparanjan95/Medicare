import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {
  userName:string;
   name:string;
   brand:string;
   price:string;
   cast:string;
  constructor() { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem("name");
    this.price = sessionStorage.getItem("price");
    this.brand = sessionStorage.getItem("duration");
    this.cast = sessionStorage.getItem("cast");
    this.userName = sessionStorage.getItem("userName");
  }

}
