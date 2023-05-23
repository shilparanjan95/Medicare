import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { ApiService } from '../api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


constructor(private builder:FormBuilder,private router:Router,private service :ApiService) { }

  ngOnInit(): void {
  }
  regForm =  this.builder.group (
    {

      name: this.builder.control('',Validators.required),
      address: this.builder.control('',Validators.required),
      email: this.builder.control('',Validators.email),
      password: this.builder.control('',Validators.required),
      dob: this.builder.control('',Validators.required)
    }
  )

  addUser()
  {  
     this.service.addUser(this.regForm.value).subscribe(
      data => {
        console.log("user added");
        this.regForm.reset();
        alert("User Registered !");
        this.router.navigate(['login']);
      }
     )
  }

}
