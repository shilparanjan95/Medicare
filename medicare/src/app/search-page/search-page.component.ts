import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private builder:FormBuilder,private router:Router,private service :ApiService) { }

  ngOnInit(): void {
  }
 
  medicines:Medicine[];
  q:string;
  qty=0;
  search()
  {
    // alert("search by "+this.searchForm.value.param);

     this.service.search(this.searchForm.value.param).subscribe(
      data =>
      {
        this.medicines = data;
        //alert(JSON.stringify(data));
      }
     )

    

  }
  searchForm = this.builder.group(
    {param : this.builder.control('',Validators.required)}
  )

 
  AddToCart(med : Medicine)
  {
 

    sessionStorage.setItem("id",med.id);
    this.router.navigate(['cart']);
    
   
    
  }

}
