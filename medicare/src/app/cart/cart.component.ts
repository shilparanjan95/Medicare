import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Medicine } from '../medicine';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service:ApiService,private router:Router) { }
  medicine:Medicine = null;
  qty:number= 0;
  total = 0;
     i =0;
  ngOnInit(): void {
  
   //alert
   this.service.getMedicineById(parseInt(sessionStorage.getItem("id"))).subscribe(
    data =>
    {
      this.medicine = data;
     

      ///alert("init "+JSON.stringify(this.medicine));
    }
   );
  }
  totalVal()
  {
    this.total  = this.qty * this.medicine.price;
  }

  next()
    
    {
      sessionStorage.setItem("name",this.medicine.name);
      sessionStorage.setItem("price",this.total+"");
      sessionStorage.setItem("brand",this.medicine.brand+"");
      this.router.navigate(['success']);


    }

    back()
    {
      this.router.navigate(['searchMed']);
    }
}

