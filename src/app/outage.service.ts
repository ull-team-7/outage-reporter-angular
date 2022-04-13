import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Outage } from './outage';

@Injectable({
  providedIn: 'root'
})
export class OutageService {

  restServerURL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public getOutages(): Observable<Outage[]> {
    return this.httpClient.get<Outage[]>(this.restServerURL + "/outages");
  }

  public getOutage(id: number) {
    return this.httpClient.get<Outage> (this.restServerURL + "/outages/" + id);
  }

   public addOutage(outage: any): Observable<Outage> {
     return this.httpClient.post<Outage>(
       this.restServerURL + "/outages", JSON.stringify(outage), this.httpOptions
     );
   }

   public deleteOutage(id: number) {
     return this.httpClient.delete<Outage>(this.restServerURL + "/outages/" + id);
   }
}
