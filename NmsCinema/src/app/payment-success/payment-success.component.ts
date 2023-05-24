import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {
   name:string;
   brand:string;
   price:string;
  constructor() { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem("name");
    this.price = sessionStorage.getItem("price");
    this.brand = sessionStorage.getItem("brand");
  }

}
