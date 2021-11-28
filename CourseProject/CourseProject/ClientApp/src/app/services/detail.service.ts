import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Detail } from '../dto/detail';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private commonUrl: string = 'api/detail';

  constructor(private http: HttpClient) { }

  getDetails(): Observable<Detail[]>{
    return this.http.get<Detail[]>(`api/detail/all`);
  }
}
