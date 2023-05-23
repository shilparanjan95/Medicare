import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { ApiService } from '../api.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


constructor(private builder :FormBuilder,private router :Router, private service : ApiService ) {
  sessionStorage.clear();
 }
   users:User[];
   msg:string;
   loggedIn = false;
  ngOnInit(): void {
    
    this.loadUsers();

  }
  loadUsers()
  {
    this.service.getUsers().subscribe(
      data => {
        this.users = data;
      }
    );
  }
  loginForm = this.builder.group(
    {
      email: this.builder.control('',Validators.email),
      password: this.builder.control('',Validators.required)
    }
  )
  login()
  {
    
    

   for(let i = 0 ; i< this.users.length;i++)
   {
        if(this.users[i].email == this.loginForm.value.email 
          && this.users[i].password == this.loginForm.value.password)
        {
               //alert("logged in ");
               sessionStorage.setItem("userName",this.users[i].name);
               this.router.navigate(['manageProduct']);
               this.loggedIn = true;
        }
   }

   
   if(!this.loggedIn)
   {
    this.msg ="Please Enter Valid Details";
   }
    this.loginForm.reset();




  }

}
