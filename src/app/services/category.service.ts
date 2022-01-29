import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable,throwError } from "rxjs"
import { tap, catchError } from "rxjs/operators"
import { Category } from '../category/category';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:3000/categories"

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );

  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = ""
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata olustu" + err.error.message
    } else {
      errorMessage = "Sistemsel bir hata"
    }
    return throwError(errorMessage)
  }
}
