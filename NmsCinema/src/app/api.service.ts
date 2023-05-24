import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';
import { Category } from './category';
import { User } from './user';
import { Movie } from './movie';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient :HttpClient) { 
   // this.httpClient = httpClient;
  }
  
  Caturl:string = "http://localhost:9090/movie/category"

  Medurl:string = "http://localhost:9090/movie/movie"
  Searchurl:string = "http://localhost:9090/movie/search/"
  Userurl:string = "http://localhost:9090/movie/user"

  saveMovie(med:Movie) : Observable<Movie>
  {
    return this.httpClient.post<Movie>(this.Medurl,med);
}
deleteMovie(id:number) :Observable<String>
{
  return this.httpClient.delete<String>(this.Medurl+"/"+id);
}

getMovie() : Observable<Movie[]>
{
  return this.httpClient.get<Movie[]>(this.Medurl);
}
getMovieById(id:number) : Observable<Movie>
{
  return this.httpClient.get<Movie>(this.Medurl+"/"+id);
}
activateMovie(id:number,med:Movie): Observable<string>
{
  return this.httpClient.put<string>(this.Medurl+"/"+id,med);
}
saveCat(cat:Category)
{
  return this.httpClient.post<Movie>(this.Caturl,cat);
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
search(param:string) : Observable<Movie[]>
{
  return this.httpClient.get<Movie[]>(this.Searchurl+param);
}
}