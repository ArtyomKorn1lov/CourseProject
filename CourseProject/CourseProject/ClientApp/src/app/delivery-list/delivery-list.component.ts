import { Component, OnInit } from '@angular/core';
import { Delivery } from '../dto/delivery';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {

  public deliveries: Delivery[] = [];

  constructor(private deliveryService: DeliveryService) { }

  clearDeliverySessionStorage(): void{
    sessionStorage.setItem('DeliveryCreateDetailKey', '');
    sessionStorage.setItem('DeliveryCreateProviderKey', '');
  }

  getDeliveries(): void{
    this.deliveryService.getDeliveries().subscribe(data => this.deliveries = data);
  }

  pushDataInService(providerId: number, detailId: number): void {
    this.deliveryService.pushInService(providerId, detailId);
  }

  ngOnInit(): void {
    this.clearDeliverySessionStorage();
    this.getDeliveries();
  }
}
