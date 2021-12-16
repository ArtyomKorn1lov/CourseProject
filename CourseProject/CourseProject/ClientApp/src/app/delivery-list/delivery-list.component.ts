import { Component, OnInit } from '@angular/core';
import { Delivery } from '../dto/delivery';
import { Detail } from '../dto/detail';
import { DeliveryService } from '../services/delivery.service';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {

  public deliveries: Delivery[] = [];
  public details: Detail[] = [];

  constructor(private deliveryService: DeliveryService, private detailService: DetailService) { }

  clearDeliverySessionStorage(): void{
    this.deliveryService.clearSessionStorage();
  }

  getDeliveries(): void{
    this.deliveryService.getDeliveries().subscribe(data => this.deliveries = data);
  }

  pushDataInService(id: number, providerId: number, detailId: number): void {
    this.deliveryService.pushInService(id, providerId, detailId);
  }

  ngOnInit(): void {
    this.clearDeliverySessionStorage();
    this.getDeliveries();
  }
}
