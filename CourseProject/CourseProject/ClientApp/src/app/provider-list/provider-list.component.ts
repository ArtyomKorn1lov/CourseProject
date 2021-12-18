import { Component, OnInit } from '@angular/core';
import { Provider } from '../dto/provider';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  search: string | undefined;
  public providers: Provider[] = [];

  constructor(private providerService: ProviderService) { }

  getProviders(): void {
    this.providerService.getProviders().subscribe(data => this.providers = data);
  }

  getProvidersByName(): void {
    if(this.search != undefined){
      this.providers = [];
      this.providerService.getByName(this.search).subscribe(data => this.providers = data);
    }
  }

  reloadList(): void {
    this.search = '';
    this.providers = [];
    this.getProviders();
  }

  pushDataInService(id: number): void {
    this.providerService.pushInService(id);
  }

  ngOnInit(): void {
    this.getProviders();
  }

}
