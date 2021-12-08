import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detail } from '../dto/detail';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.css']
})
export class DetailInfoComponent implements OnInit {

  private targetRoute: string = '/detail-list';
  public detail!: Detail;

  constructor(private router: Router, private detailService: DetailService) { }

  deleteDetail(id: number): void {
    this.detailService.deleteDetail(id).subscribe(x => console.log(x));
    this.router.navigateByUrl(this.targetRoute);
  }

  ngOnInit(): void {
    this.detailService.getDetailById(this.detailService.getFromService()).subscribe(data => this.detail = data);
  }

}
