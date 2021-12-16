import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateDeliveryDto } from '../dto/CreateDeliveryDto';
import { Detail } from '../dto/detail';
import { Provider } from '../dto/provider';
import { DeliveryService } from '../services/delivery.service';
import { DetailService } from '../services/detail.service';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})
export class CreateDeliveryComponent implements OnInit {

  detailId: number | undefined;
  providerId: number | undefined;
  count: number | undefined;
  public provider!: Provider;
  public detail!: Detail;

  constructor(private router: Router, private deliveryService: DeliveryService, private detailService: DetailService, private providerService: ProviderService) { }

  getDetail(): void {
    this.detailId = this.deliveryService.getChoiseDetailId();
    if (this.detailId == -1 || this.detailId == undefined) {
      this.detailId = undefined;
    }
    else this.detailService.getDetailById(this.detailId).subscribe(data => this.detail = data);
  }

  getProvider(): void {
    this.providerId = this.deliveryService.getChoiseProviderId();
    if (this.providerId == -1 || this.providerId == undefined) {
      this.providerId = undefined;
    }
    else this.providerService.getProviderById(this.providerId).subscribe(data => this.provider = data);
  }

  detailClick(): void{
    sessionStorage.setItem('DeliveryPage', 'create');
    this.router.navigateByUrl('/detail-choise');
  }

  providerClick(): void{
    sessionStorage.setItem('DeliveryPage', 'create');
    this.router.navigateByUrl('/provider-choise');
  }

  createDelivery(): void {
    if (this.providerId == undefined) {
      alert("Выберете поставщика");
      return;
    }
    if (this.detailId == undefined) {
      alert("Выберете деталь");
      return;
    }
    if (this.count == null) {
      alert("Введите количество");
      return;
    }
    var date = new Date();
    var delivery = new CreateDeliveryDto(this.providerId, this.detailId, this.count, date, this.detail.price*this.count);
    this.deliveryService.createDelivery(delivery).subscribe(x => console.log(x));
    this.router.navigateByUrl('/delivery-list');
  }

  ngOnInit() {
    this.getDetail();
    this.getProvider();
    sessionStorage.setItem('DetailPage', '');
  }

}
