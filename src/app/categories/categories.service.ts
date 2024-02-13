import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Categorie } from './categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {



  private apiUrl="http://localhost:3001/api/categories/"
  constructor(private http: HttpClient) { }
  


  getAllCategories(): Observable<any> {
    
    return this.http.get(this.apiUrl);
  }


  createCategorie(cat: Categorie) {
    return this.http.post(this.apiUrl , cat);
  }


  updateCategorie(id: any, cat: Categorie) {
    return this.http.put(this.apiUrl +id,cat)
  }


  deleteCategorie(id: any) {
    return this.http.delete(this.apiUrl + id);
  }


  getCategorieById(id: any) {
    return this.http.get(this.apiUrl + id)
  }


}
