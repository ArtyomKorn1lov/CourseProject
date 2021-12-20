import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../dto/User';
import { CreateUserDto } from '../dto/CreateUserDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private commonUrl: string = 'api/user';

  constructor(private http: HttpClient) { }

  pushRegDataInService(user: CreateUserDto) {
    sessionStorage.setItem("UserName", user.name);
    sessionStorage.setItem("UserLogin", user.login);
    sessionStorage.setItem("UserPassword", user.password);
    sessionStorage.setItem("UserStatus", user.status);
  }

  pushAuthDataInService(user: User) {
    sessionStorage.setItem("UserName", user.name);
    sessionStorage.setItem("UserLogin", user.login);
    sessionStorage.setItem("UserPassword", user.password);
    sessionStorage.setItem("UserStatus", user.status);
  }

  getDataFromService(): User {
    var name = sessionStorage.getItem("UserName");
    var login = sessionStorage.getItem("UserLogin");
    var password = sessionStorage.getItem("UserPassword");
    var status = sessionStorage.getItem("UserStatus");
    if(name != null && login != null && password != null && status != null &&
      name != '' && login != '' && password != '' && status != '')
    {
      return new User(1, name, login, password, status);
    }
    return new User(0, '', '', '', '');
  }

  clearUserService(): void {
    sessionStorage.setItem("UserName", '');
    sessionStorage.setItem("UserLogin", '');
    sessionStorage.setItem("UserPassword", '');
    sessionStorage.setItem("UserStatus", '');
  }

  checkLogin(login: string): Observable<User> {
    return this.http.get<User>(`${this.commonUrl}/check-log/${login}`);
  }

  createUser(user: CreateUserDto): Observable<object> {
    return this.http.post<CreateUserDto>(`${this.commonUrl}`, user);
  }

  authorise(login: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.commonUrl}/authorise/${login}/${password}`);
  }
}
