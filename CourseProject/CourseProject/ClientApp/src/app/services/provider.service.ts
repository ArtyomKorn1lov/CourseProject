import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Provider } from '../dto/provider';
import { CreateProviderDto } from '../dto/CreateProviderDto';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private commonUrl: string = 'api/provider';
  private id: number = 0;

  constructor(private http: HttpClient) { }

  public pushInService(id: number): void {
    this.id = id;
  }

  public getFromService(): number {
    return this.id;
  }

  getProviders(): Observable<Provider[]>{
    return this.http.get<Provider[]>(`${this.commonUrl}/all`);
  }

  createProvider(provider: CreateProviderDto): Observable<object>{
    return this.http.post<Provider>(`${this.commonUrl}`, provider);
  }

  deleteProvider(id: number): Observable<object>{
    return this.http.delete<Provider>(`${this.commonUrl}/${id}`);
  }

  getProviderById(id: number): Observable<Provider>{
    return this.http.get<Provider>(`${this.commonUrl}/${id}`);
  }

  updateProvider(provider: Provider): Observable<object>{
    return this.http.put<Provider>(`${this.commonUrl}`, provider);
  }
}
