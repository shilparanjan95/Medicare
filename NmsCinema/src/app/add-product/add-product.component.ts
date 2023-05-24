import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Category } from '../category';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private builder :FormBuilder,private service:ApiService,private router:Router) { }
  categories:Category[];
  cat:Category;
  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories()
  {
     this.service.getCategory().subscribe(
      data => {
        this.categories = data;
      }
     )
   
  }

  addMed = this.builder.group(
    {name : this.builder.control('',Validators.required),
    duration : this.builder.control('',Validators.required),
    starCast : this.builder.control('',Validators.required),
    quantity : this.builder.control('',Validators.required),
    price : this.builder.control('',Validators.required),
    category : this.builder.control('',Validators.required)
  }
  )

  addMedicine()
  {  
    
       for(let i =0;i<this.categories.length;i++)
       {
        if( this.categories[i].name == this.addMed.value.category)
        {
          this.cat = new Category(this.categories[i].categoryId,this.addMed.value.category);
          this.addMed.value.category = this.cat;
        }
       }
    
    //alert(this.addMed.value.category);
    //this.addMed.value.category = new Category();
     this.service.saveMovie(this.addMed.value).subscribe(
      data => {
        this.addMed.reset();
        console.log("saving medicines");
        this.router.navigate(['manageProduct']);

      }
     );
  }
}
