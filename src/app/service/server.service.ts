import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { CustomResponse } from '../interface/custom-response';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private readonly apiURL = 'http://localhost:8080'


  constructor(private http: HttpClient) { }


  servers$ = <Observable<CustomResponse>>
  this.http.get<CustomResponse>(`${this.apiURL}/servers/list`)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );


  handleError(handleError: any): Observable<never> {
    return throwError('Method not implemented.');
  }

}
