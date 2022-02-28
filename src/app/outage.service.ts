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
      'Content-Type': 'applications/json',
    }),
  };

  public getOutages(): Observable<Outage[]> {
    return this.httpClient.get<Outage[]>(this.restServerURL + "/outages");
  }
}
