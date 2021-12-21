import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/CreateUserDto';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  name: string | undefined;
  login: string | undefined;
  password: string | undefined;
  status: string = 'user';
  private targetRoute: string = '/user-list';
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router) { }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  createNewUser(): void {
    if (this.name == undefined) {
      alert("Введите имя пользователя");
      return;
    }
    if (this.login == undefined) {
      alert("Введите логин");
      return;
    }
    if (this.password == undefined) {
      alert("Введите пароль");
      return;
    }
    var user = new CreateUserDto(this.name, this.login, this.password, this.status);
    this.userService.checkLogin(user.login).subscribe(data => {
      if (data != null) {
        alert("Пользователь уже есть с данным логином, введите другой логин");
        return;
      }
      this.router.navigateByUrl(this.targetRoute);
      this.userService.createUser(user).subscribe(x => {
        console.log(x);
      });
    });
  }

  ngOnInit(): void {
    this.getUser();
  }

}
