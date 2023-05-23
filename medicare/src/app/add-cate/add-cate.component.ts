import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-add-cate',
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.css']
})
export class AddCateComponent implements OnInit {

  constructor(private builder:FormBuilder,private service:ApiService) { }

  ngOnInit(): void {
  }
  catForm =  this.builder.group(
    {name: this.builder.control('',Validators.required)
   }
  )

  addCategory()
  {
      this.service.saveCat(this.catForm.value).subscribe(
        data => {
          alert("Category Added !");
          this.catForm.reset();
        }
      )
  }

}
