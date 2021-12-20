import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogAuthComponent } from '../dialog-auth/dialog-auth.component';
import { CreateUserDto } from '../dto/CreateUserDto';
import { HeadbarComponent } from '../headbar/headbar.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dialog-reg',
  templateUrl: './dialog-reg.component.html',
  styleUrls: ['./dialog-reg.component.css']
})
export class DialogRegComponent implements OnInit {

  name: string | undefined;
  login: string | undefined;
  password: string | undefined;
  confirm_password: string | undefined;
  public result: any | undefined;

  constructor(public dialogRef: MatDialogRef<DialogRegComponent>, public dialog: MatDialog, private userService: UserService, private router: Router) { }

  async registrateNewUser(): Promise<void> {
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
    if (this.confirm_password == undefined) {
      alert("Подтвердите пароль");
      return;
    }
    if (this.confirm_password != this.password) {
      alert("Пароли не совпадают, проверьте пароли");
      return;
    }
    var user = new CreateUserDto(this.name, this.login, this.password, "user");
    this.userService.checkLogin(user.login).subscribe(data => {
      if(data != null)
      {
        alert("Пользователь уже есть с данным логином, введите другой логин");
        return;
      }
      this.dialogRef.close();
      this.userService.pushRegDataInService(user);
      location.reload();
      this.userService.createUser(user).subscribe(x =>{
        console.log(x);
      });
    });
  }

  openAuthDialog() {
    this.dialogRef.close();
    const newDialog = this.dialog.open(DialogAuthComponent);
  }

  ngOnInit(): void {
  }

}

