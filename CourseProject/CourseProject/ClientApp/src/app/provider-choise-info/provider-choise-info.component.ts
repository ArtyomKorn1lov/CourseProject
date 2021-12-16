import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from '../dto/provider';
import { ProviderService } from '../services/provider.service';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'app-provider-choise-info',
  templateUrl: './provider-choise-info.component.html',
  styleUrls: ['./provider-choise-info.component.css']
})
export class ProviderChoiseInfoComponent implements OnInit {

  private createProviderRoute: string = '/create-delivery';
  private updateProviderRoute: string = '/edit-delivery';
  public provider!: Provider;

  constructor(private router: Router, private providerService: ProviderService, private deliveryService: DeliveryService) { }

  choiseProvider(id: number): void{
    this.deliveryService.pushChoiseProviderId(id);
    if(sessionStorage.getItem('DeliveryPage') == 'create') {
      this.router.navigateByUrl(this.createProviderRoute);
      return;
    }
    this.router.navigateByUrl(this.updateProviderRoute);
  }

  ngOnInit(): void {
    this.providerService.getProviderById(this.providerService.getFromService()).subscribe(data => this.provider = data);
  }

}
