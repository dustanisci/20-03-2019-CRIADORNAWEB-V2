import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PortfolioService {

  constructor(private http: HttpClient) {
  }

  public getService(url: string): Observable<any> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.get(url, { headers: headers });
  }

}
