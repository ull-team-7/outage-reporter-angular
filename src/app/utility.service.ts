import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utility } from './utility';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  restServerURL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public getUtility(): Observable<Utility[]> {
    return this.httpClient.get<Utility[]>(this.restServerURL + "/utility");
  }

   public addUtility(utility: any): Observable<Utility> {
     return this.httpClient.post<Utility>(
       this.restServerURL + "/utility", JSON.stringify(utility), this.httpOptions
     );
   }
}
