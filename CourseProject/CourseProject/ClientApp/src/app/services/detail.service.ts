import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Detail } from '../dto/detail';
import { CreateDetailDto } from '../dto/CreateDetailDto';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private commonUrl: string = 'api/detail';

  constructor(private http: HttpClient) { }

  getDetails(): Observable<Detail[]>{
    return this.http.get<Detail[]>(`${this.commonUrl}/all`);
  }

  createDetail(detail: CreateDetailDto): Observable<object>{
    return this.http.post<Detail>(`${this.commonUrl}`, detail);
  }

  deleteDetail(id: number): Observable<object>{
    return this.http.delete<Detail>(`${this.commonUrl}/${id}`);
  }
}
