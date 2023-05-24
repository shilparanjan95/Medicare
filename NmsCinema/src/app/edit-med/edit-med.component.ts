import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Movie } from '../movie';
@Component({
  selector: 'app-edit-med',
  templateUrl: './edit-med.component.html',
  styleUrls: ['./edit-med.component.css']
})
export class EditMedComponent implements OnInit {

  constructor(private builder:FormBuilder,private router:Router, private aRoute:ActivatedRoute,
    private service:ApiService) { }
   id:number;
   medicine:Movie ;
   name:string;
   brand:string;
   price:string;
   description:string;
   quantity:string;
  ngOnInit(): void {

   this.id = this.aRoute.snapshot.params['id'];
   //alert
   this.service.getMovieById(this.id).subscribe(
    data =>
    {
      this.medicine = data;
      alert("init "+JSON.stringify(this.medicine));
    }
   );

    
  }

  editMed  = this.builder.group(
    { 'medicine.name' : this.builder.control('',Validators.required),
    'medicine.brand' : this.builder.control('',Validators.required),
    'medicine.description' : this.builder.control('',Validators.required),
    'medicine.quantity' : this.builder.control('',Validators.required),
    'medicine.price' : this.builder.control('',Validators.required)}
  )

  
  editMedicine()
  {   

      alert(JSON.stringify(this.editMed.value));
      this.service.saveMovie(this.editMed.value).subscribe(
        data => {
          alert("Movie Details Updated");
          this.router.navigate(['manageProduct']);
        }
      )
  }
}
