import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router : Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let urlmap = route.url[0].path;
     
      
      if(urlmap.length>0)
        {
            
            //console.log("Bye " + urlmap);
            if(urlmap=="searchMed" || urlmap=='cart'|| urlmap=='success')
            {
              if(sessionStorage.getItem("userName")!=null)
              {
                return true;
              }
                 alert("Login First to Proceed !");
                 this.router.navigate(['login']);
              return false;
            }
              
        }
     
      //isearchMed

    return true;
  }
  
}
