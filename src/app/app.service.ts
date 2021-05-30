import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private route = 'https://api.github.com/repositories';

  constructor(private http: HttpClient) { }
  getRepositories():Observable<any>{
    return this.http.get(this.route);
  }
}
