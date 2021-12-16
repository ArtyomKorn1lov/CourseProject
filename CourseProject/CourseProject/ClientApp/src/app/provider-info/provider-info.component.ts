import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from '../dto/provider';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-provider-info',
  templateUrl: './provider-info.component.html',
  styleUrls: ['./provider-info.component.css']
})
export class ProviderInfoComponent implements OnInit {

  private targetRoute: string = '/provider-list';
  public provider!: Provider;

  constructor(private router: Router, private providerService: ProviderService) { }
  
  ngOnInit(): void {
    this.providerService.getProviderById(this.providerService.getFromService()).subscribe(data => this.provider = data);
  }

}
