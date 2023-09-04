import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { list } from '../interfaces/listing-details.interface';


@Injectable({
  providedIn: 'root'
})
export class ListingDetailsService {

  constructor(private _http: HttpClient) { }
  public baseUrl = 'http://localhost:3000/listings';
  
  getListService(){
    return this._http.get<list[]>(this.baseUrl);
  }
}
