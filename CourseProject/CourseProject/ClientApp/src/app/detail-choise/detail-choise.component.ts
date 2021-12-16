import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detail } from '../dto/detail';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-detail-choise',
  templateUrl: './detail-choise.component.html',
  styleUrls: ['./detail-choise.component.css']
})
export class DetailChoiseComponent implements OnInit {

  private createDetailRoute: string = '/create-delivery';
  private updateDetailRoute: string = '/edit-delivery';
  public details: Detail[] = [];

  constructor(private detailService: DetailService, private router: Router) { }

  routerBack(): void{
    if(sessionStorage.getItem('DeliveryPage') == 'create')
    {
      this.router.navigateByUrl(this.createDetailRoute);
      return;
    }
    this.router.navigateByUrl(this.updateDetailRoute);
  }

  getDetails(): void {
    this.detailService.getDetails().subscribe((data: Detail[]) => this.details = data);  
  }

  pushDataInService(id: number): void {
    this.detailService.pushInService(id);
  }

  ngOnInit(): void {
    this.getDetails();
  }
}
