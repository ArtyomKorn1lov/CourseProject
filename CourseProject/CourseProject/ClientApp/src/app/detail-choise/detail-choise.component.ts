import { Component, OnInit } from '@angular/core';
import { Detail } from '../dto/detail';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-detail-choise',
  templateUrl: './detail-choise.component.html',
  styleUrls: ['./detail-choise.component.css']
})
export class DetailChoiseComponent implements OnInit {

  public details: Detail[] = [];

  constructor(private detailService: DetailService) { }

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
