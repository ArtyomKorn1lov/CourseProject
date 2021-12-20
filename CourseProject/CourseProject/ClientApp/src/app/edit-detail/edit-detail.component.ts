import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detail } from '../dto/detail';
import { DetailService } from '../services/detail.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {

  public detail!: Detail;
  private targetRoute: string = '/detail-info';
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private detailService: DetailService) { }

  UpdateDetail(): void {
    if (this.detail.name == null) {
      alert("Введите наименование товара");
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

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.detailService.getDetailById(this.detailService.getFromService()).subscribe(data => this.detail = data);
  }

}
