import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class PortfolioService {

  constructor(private http: HttpClient) {
  }

  public getProjects(): Observable<any> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.get(environment.apiPortfolio, { headers: headers });
  }

}
