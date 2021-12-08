import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateDetailDto } from '../dto/CreateDetailDto';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-create-detail',
  templateUrl: './create-detail.component.html',
  styleUrls: ['./create-detail.component.css']
})
export class CreateDetailComponent implements OnInit {

  name: string | undefined;
  article: number | undefined;
  price: number | undefined;
  note: string = "";
  private targetRoute: string = '/detail-list';

  constructor(private router: Router, private detailService: DetailService) { }

  CreateDetail(): void {
    if (this.name == null) {
      alert("Введите наименование товара");
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
    var detail = new CreateDetailDto(this.name, this.article, this.price, this.note);
    this.detailService.createDetail(detail).subscribe(x => console.log(x));
    this.router.navigateByUrl(this.targetRoute);
  }

  ngOnInit(): void {
  }

}
