import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Medicine } from '../medicine';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private service:ApiService,private router:Router) { }
  medicines :Medicine[];
  ngOnInit(): void {
    this.getMedicines();
  }

  getMedicines()
  {   
    console.log("get med is called");
    this.service.getMedicine().subscribe(
      data => {
        this.medicines = data;
      }
    )
    
  }

  deletMed(id:number)
  {    alert("Medicine Deleted !");
      this.service.deleteMedicine(id).subscribe(
        data => {
          
        }
      );
      this.getMedicines();
  }

   activate(id:number,med:Medicine)
  {
    alert("Medicine Activated/Deactivated !");
    this.service.activateMedicine(id,med).subscribe(
      data => {
        this.getMedicines();
      }
    );
    this.getMedicines();
  }

  sort(val:string)
  {
    alert(val);
  }
 
}
