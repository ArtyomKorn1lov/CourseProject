import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from '../dto/provider';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-provider-choise',
  templateUrl: './provider-choise.component.html',
  styleUrls: ['./provider-choise.component.css']
})
export class ProviderChoiseComponent implements OnInit {

  private createProviderRoute: string = '/create-delivery';
  private updateProviderRoute: string = '/edit-delivery';
  public providers: Provider[] = [];

  constructor(private router: Router, private providerService: ProviderService) { }

  routerBack(): void{
    if(sessionStorage.getItem('DeliveryPage') == 'create')
    {
      this.router.navigateByUrl(this.createProviderRoute);
      return;
    }
    this.router.navigateByUrl(this.updateProviderRoute);
  }

  getProviders(): void {
    this.providerService.getProviders().subscribe(data => this.providers = data);
  }

  pushDataInService(id: number): void {
    this.providerService.pushInService(id);
  }

  ngOnInit(): void {
    this.getProviders();
  }

}
