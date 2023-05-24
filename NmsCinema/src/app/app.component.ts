import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
 
  constructor(private router: Router)
  {

  }
  title = 'medicare';

  isHome = false;
  name ="";

  ngDoCheck(): void {
    this.name = sessionStorage.getItem("userName");
 //   alert(this.router.url);
    if(this.router.url=="/" )
    {
      this.isHome = true;
      console.log("inside"+this.isHome );
    }
    else{
      this.isHome = false;
      if(this.router.url=="/" )
      {
        
      }
    }
   // console.log(this.isHome );
  }
}
