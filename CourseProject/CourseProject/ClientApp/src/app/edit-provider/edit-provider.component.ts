import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from '../dto/provider';
import { ProviderService } from '../services/provider.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-provider',
  templateUrl: './edit-provider.component.html',
  styleUrls: ['./edit-provider.component.css']
})
export class EditProviderComponent implements OnInit {

  public provider!: Provider;
  private targetRoute: string = '/provider-info';
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private providerService: ProviderService) { }

  UpdateProvider(): void {
    if (this.provider.name == null) {
      alert("Введите наименование поставщика");
      return;
    }
    if (this.provider.address == null) {
      alert("Введите адрес");
      return;
    }
    if (this.provider.phone == null) {
      alert("Введите телефон");
      return;
    }
    this.providerService.updateProvider(this.provider).subscribe(x => console.log(x));
    this.router.navigateByUrl(this.targetRoute);
  }

  deleteProvider(id: number): void{
    this.providerService.deleteProvider(id).subscribe(x => console.log(x));
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.providerService.getProviderById(this.providerService.getFromService()).subscribe(data => this.provider = data);
  }
}
