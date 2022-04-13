import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilityArea } from './utility-area';

@Injectable({
  providedIn: 'root'
})
export class UtilityAreaService {

  restServerURL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public getUtilityArea(utilityId: number): Observable<UtilityArea[]> {
    return this.httpClient.get<UtilityArea[]>(this.restServerURL + "/utility/" + utilityId + "/area");
  }

   public addUtilityArea(utilityId: number, utilityArea: any): Observable<UtilityArea> {
     return this.httpClient.post<UtilityArea>(
       this.restServerURL + "/utility/" + utilityId + "/area", JSON.stringify(utilityArea), this.httpOptions
     );
   }
}
