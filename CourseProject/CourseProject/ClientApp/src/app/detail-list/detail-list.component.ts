import { Component, OnInit } from '@angular/core';
import { Detail } from '../dto/detail';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {

  public details: Detail[] = [];

  constructor(private detailService: DetailService) { }

  getDetails(): void {
    this.detailService.getDetails().subscribe((data: Detail[]) => this.details = data);  
  }

  deleteDetail(id: number): void {
    console.log(id);
    this.detailService.deleteDetail(id).subscribe(x => console.log(x));
  }

  ngOnInit(): void {
    this.getDetails();
  }

}
