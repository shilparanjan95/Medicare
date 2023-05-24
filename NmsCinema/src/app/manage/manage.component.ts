import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { Movie } from '../movie';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private service:ApiService,private router:Router) { }
  medicines :Movie[];
  ngOnInit(): void {
    this.getMedicines();
  }

  getMedicines()
  {   
    console.log("get med is called");
    this.service.getMovie().subscribe(
      data => {
        this.medicines = data;
      }
    )
    
  }

  deletMed(id:number)
  {    alert("Medicine Deleted !");
      this.service.deleteMovie(id).subscribe(
        data => {
          
        }
      );
      this.getMedicines();
  }

   activate(id:number,med:Movie)
  {
    alert("Medicine Activated/Deactivated !");
    this.service.activateMovie(id,med).subscribe(
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
