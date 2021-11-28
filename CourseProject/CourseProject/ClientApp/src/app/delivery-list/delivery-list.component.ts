import { Component, OnInit } from '@angular/core';
import { Detail } from '../dto/detail';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {

  public details: Detail[] = [];

  constructor(private detailService: DetailService) { }

  getDetails(): void {
    this.detailService.getDetails().subscribe(data => this.details = data);  
  }

  ngOnInit(): void {
    this.getDetails();
    console.log(this.details[0]);
  }

}
