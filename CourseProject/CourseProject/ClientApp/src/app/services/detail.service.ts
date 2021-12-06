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
  
  private id: number = 0;

  constructor(private http: HttpClient) { }

  public pushInService(id: number): void {
    this.id = id;
  }

  public getFromService(): number {
    return this.id;
  }

  getDetails(): Observable<Detail[]>{
    return this.http.get<Detail[]>(`${this.commonUrl}/all`);
  }

  createDetail(detail: CreateDetailDto): Observable<object>{
    return this.http.post<Detail>(`${this.commonUrl}`, detail);
  }

  deleteDetail(id: number): Observable<object>{
    return this.http.delete<Detail>(`${this.commonUrl}/${id}`);
  }

  getDetailById(id: number): Observable<Detail>{
    return this.http.get<Detail>(`${this.commonUrl}/${id}`);
  }

  updateDetail(detail: Detail): Observable<object>{
    return this.http.put<Detail>(`${this.commonUrl}`, detail);
  }
}
