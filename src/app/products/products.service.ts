import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { Products } from './products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = "http://localhost:3001/api/articles";
  constructor(private httpClient: HttpClient) { }
  



  getAllProduct() : Observable<any> {

   return this.httpClient.get(this.apiURL)

   }
  
  createProduct(art: Products) {
    console.log(art)
    return this.httpClient.post(this.apiURL, art);
   }
  
  updateProduct(id: any, art: Products) {
    return this.httpClient.put(this.apiURL+"/"+id,art)
   }
  
  deleteProduct(id: any) { 
    return this.httpClient.delete(this.apiURL + "/" + id);
  }
  
  getProductById(id: any) : Observable<any> {
    return this.httpClient.get(this.apiURL+"/"+id)
  }
}
