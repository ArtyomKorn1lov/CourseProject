import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateDetailDto } from '../dto/CreateDetailDto';
import { Detail } from '../dto/detail';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {

  public detail!: Detail;
  private targetRoute: string = '/detail-info';

  constructor(private router: Router, private detailService: DetailService) { }

  UpdateDetail(): void {
    if (this.detail.name == null) {
      alert("Введите имя пользователя");
      return;
    }
    if (this.detail.articleNumber == null) {
      alert("Введите артикль");
      return;
    }
    if (this.detail.price == null) {
      alert("Введите цену");
      return;
    }
    this.detailService.updateDetail(this.detail).subscribe(x => console.log(x));
    this.router.navigateByUrl(this.targetRoute);
  }

  deleteDetail(id: number): void {
    this.detailService.deleteDetail(id).subscribe(x => console.log(x));
  }

  ngOnInit(): void {
    this.detailService.getDetailById(this.detailService.getFromService()).subscribe(data => this.detail = data);
  }

}
