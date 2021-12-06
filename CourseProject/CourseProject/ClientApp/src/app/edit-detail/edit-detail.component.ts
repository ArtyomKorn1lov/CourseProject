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
  /*public name: string = "";
  public article: number = 0;
  public price: number = 0;
  public note: string = "";*/
  private targetRoute: string = '/detail-info';

  constructor(private router: Router, private detailService: DetailService) { }

  UpdateDetail(): void {
    /*if (this.name == null) {
      alert("Введите имя пользователя");
      return;
    }
    if (this.article == null) {
      alert("Введите артикль");
      return;
    }
    if (this.price == null) {
      alert("Введите цену");
      return;
    }
    this.detail.name = this.name;
    this.detail.articleNumber = this.article;
    this.detail.price = this.price;
    this.detail.note = this.note;*/
    this.detailService.updateDetail(this.detail).subscribe(x => console.log(x));
    this.router.navigateByUrl(this.targetRoute);
  }

  deleteDetail(id: number): void {
    this.detailService.deleteDetail(id).subscribe(x => console.log(x));
  }

  /*fillForm(): void
  {
    this.name = this.detail.name;
    this.article = this.detail.articleNumber;
    this.price = this.detail.price;
    if(this.detail.note != null) this.note = this.detail.note;
  }*/

  ngOnInit(): void {
    this.detailService.getDetailById(this.detailService.getFromService()).subscribe(data => this.detail = data);
    //this.fillForm();
  }

}
