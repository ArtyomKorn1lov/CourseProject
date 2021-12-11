import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Delivery } from '../dto/delivery';
import { CreateDeliveryDto } from '../dto/CreateDeliveryDto';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  private commonUrl: string = 'api/delivery';

  constructor(private http: HttpClient) { }

  public pushInService(providerId: number, detailId: number): void {
    sessionStorage.setItem('DeliveryProviderKey', providerId.toString());
    sessionStorage.setItem('DeliveryDetailKey', detailId.toString());
  }

  public getProviderIdFromService(): number {
    var providerKey = sessionStorage.getItem('DeliveryProviderKey');
    if(providerKey == null)
    {
      return -1;
    }
    var currentProviderId = parseInt(providerKey);
    return currentProviderId;
  }

  public getDetailIdFromService(): number {
    var detailKey = sessionStorage.getItem('DeliveryDetailKey');
    if(detailKey == null)
    {
      return -1;
    }
    var currentDetailId = parseInt(detailKey);
    return currentDetailId;    
  }

  public pushChoiseDetailId(id: number): void{
    sessionStorage.setItem('DeliveryCreateDetailKey', id.toString());
  }

  public getChoiseDetailId(): number{
    var detailKey = sessionStorage.getItem('DeliveryCreateDetailKey');
    if(detailKey == null)
    {
      return -1;
    }
    var currentDetailId = parseInt(detailKey);
    return currentDetailId; 
  }

  public pushChoiseProviderId(id: number): void{
    sessionStorage.setItem('DeliveryCreateProviderKey', id.toString());
  }

  public getChoiseProviderId(): number{
    var providerKey = sessionStorage.getItem('DeliveryCreateProviderKey');
    if(providerKey == null)
    {
      return -1;
    }
    var currentProviderId = parseInt(providerKey);
    return currentProviderId;
  }

  getDeliveries(): Observable<Delivery[]>{
    return this.http.get<Delivery[]>(`${this.commonUrl}/all`);
  }

  createDelivery(delivery: CreateDeliveryDto): Observable<object>{
    return this.http.post<Delivery>(`${this.commonUrl}`, delivery);
  }

  deleteDelivery(id: number): Observable<object>{
    return this.http.delete<Delivery>(`${this.commonUrl}/${id}`);
  }

  getDeliveryById(id: number): Observable<Delivery>{
    return this.http.get<Delivery>(`${this.commonUrl}/${id}`);
  }

  updateDelivery(delivery: Delivery): Observable<object>{
    return this.http.put<Delivery>(`${this.commonUrl}`, delivery);
  }

}
