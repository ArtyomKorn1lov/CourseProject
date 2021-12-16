import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detail } from '../dto/detail';
import { DeliveryService } from '../services/delivery.service';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-detail-choise-info',
  templateUrl: './detail-choise-info.component.html',
  styleUrls: ['./detail-choise-info.component.css']
})
export class DetailChoiseInfoComponent implements OnInit {

  private createDetailRoute: string = '/create-delivery';
  private updateDetailRoute: string = '/edit-delivery';
  public detail!: Detail;

  constructor(private router: Router, private detailService: DetailService, private deliveryService: DeliveryService) { }

  choiseDetail(id: number): void {
    this.deliveryService.pushChoiseDetailId(id);
    if(sessionStorage.getItem('DeliveryPage') == 'create')
    {
      this.router.navigateByUrl(this.createDetailRoute);
      return;
    }
    this.router.navigateByUrl(this.updateDetailRoute);
  }

  ngOnInit(): void {
    this.detailService.getDetailById(this.detailService.getFromService()).subscribe(data => this.detail = data);
  }

}
