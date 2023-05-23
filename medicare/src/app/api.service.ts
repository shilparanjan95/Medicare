import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Medicine } from './medicine';
import { Observable } from 'rxjs';
import { Category } from './category';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient :HttpClient) { 
   // this.httpClient = httpClient;
  }
  
  Caturl:string = "http://localhost:9090/medicine/category"

  Medurl:string = "http://localhost:9090/medicine/medicine"
  Searchurl:string = "http://localhost:9090/medicine/search/"
  Userurl:string = "http://localhost:9090/medicine/user"

  saveMedicine(med:Medicine) : Observable<Medicine>
  {
    return this.httpClient.post<Medicine>(this.Medurl,med);
}
deleteMedicine(id:number) :Observable<String>
{
  return this.httpClient.delete<String>(this.Medurl+"/"+id);
}

getMedicine() : Observable<Medicine[]>
{
  return this.httpClient.get<Medicine[]>(this.Medurl);
}
getMedicineById(id:number) : Observable<Medicine>
{
  return this.httpClient.get<Medicine>(this.Medurl+"/"+id);
}
activateMedicine(id:number,med:Medicine): Observable<string>
{
  return this.httpClient.put<string>(this.Medurl+"/"+id,med);
}
saveCat(cat:Category)
{
  return this.httpClient.post<Medicine>(this.Caturl,cat);
}
getCategory() : Observable<Category[]>
{
  return this.httpClient.get<Category[]>(this.Caturl);
}


addUser(usr : User) :Observable<User>

{
    return this.httpClient.post<User>(this.Userurl,usr);
}
getUsers() :Observable<User[]>

{
    return this.httpClient.get<User[]>(this.Userurl);
}
search(param:string) : Observable<Medicine[]>
{
  return this.httpClient.get<Medicine[]>(this.Searchurl+param);
}
}