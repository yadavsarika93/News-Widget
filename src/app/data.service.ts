import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inews } from './inews';
import { mergeMap, groupBy, reduce } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService 
{
 public  article :object;

  private _url='https://newsapi.org/v2/top-headlines?language=en&apiKey=d948c11e91b04de9bbcd5bb0065a395c';
  private apiKey='d948c11e91b04de9bbcd5bb0065a395c'
  constructor(private http: HttpClient) { }

  getinfo():Observable<Inews[]>
  {
    this.article=this.http.get<Inews[]>(this._url)
    
    /* to convert the json object */
  //   const values = Object.keys(this.article).map(it => this.article[it])
  //  console.log("Inside service data" +values)
  //  //for returning data from API

    return this.http.get<Inews[]>(this._url);
   

   } 
  
   

  }
