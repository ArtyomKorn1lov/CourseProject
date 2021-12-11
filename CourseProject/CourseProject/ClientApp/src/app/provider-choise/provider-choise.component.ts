import { Component, OnInit } from '@angular/core';
import { Provider } from '../dto/provider';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-provider-choise',
  templateUrl: './provider-choise.component.html',
  styleUrls: ['./provider-choise.component.css']
})
export class ProviderChoiseComponent implements OnInit {

  public providers: Provider[] = [];

  constructor(private providerService: ProviderService) { }

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
