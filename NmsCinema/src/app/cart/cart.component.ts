import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../movie';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service:ApiService,private router:Router) { }
  movie:Movie = null;
  qty:number= 0;
  total = 0;
     i =0;
  ngOnInit(): void {
  
   //alert
   this.service.getMovieById(parseInt(sessionStorage.getItem("id"))).subscribe(
    data =>
    {
      this.movie = data;
     

      ///alert("init "+JSON.stringify(this.Movie));
    }
   );
  }
  totalVal()
  {
    this.total  = this.qty * this.movie.price;
  }

  next()
    
    {
      sessionStorage.setItem("name",this.movie.name);
      sessionStorage.setItem("price",this.total+"");
      sessionStorage.setItem("brand",this.movie.duration+"");
      this.router.navigate(['success']);


    }

    back()
    {
      this.router.navigate(['searchMed']);
    }
}

