import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootbarComponent } from './footbar/footbar.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogAuthComponent } from './dialog-auth/dialog-auth.component';
import { DialogRegComponent } from './dialog-reg/dialog-reg.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { CreateDeliveryComponent } from './create-delivery/create-delivery.component';
import { OrdersComponent } from './orders/orders.component';
import { DetailListComponent } from './detail-list/detail-list.component';
import { CreateDetailComponent } from './create-detail/create-detail.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderInfoComponent } from './provider-info/provider-info.component';
import { CreateProviderComponent } from './create-provider/create-provider.component';
import { EditProviderComponent } from './edit-provider/edit-provider.component';
import { DetailChoiseComponent } from './detail-choise/detail-choise.component';
import { DetailChoiseInfoComponent } from './detail-choise-info/detail-choise-info.component';
import { ProviderChoiseComponent } from './provider-choise/provider-choise.component';
import { ProviderChoiseInfoComponent } from './provider-choise-info/provider-choise-info.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { EditDeliveryComponent } from './edit-delivery/edit-delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    FootbarComponent,
    HeadbarComponent,
    MainpageComponent,
    ProductListComponent,
    DialogAuthComponent,
    DialogRegComponent,
    DeliveryListComponent,
    CreateDeliveryComponent,
    OrdersComponent,
    DetailListComponent,
    CreateDetailComponent,
    DetailInfoComponent,
    EditDetailComponent,
    ProviderListComponent,
    ProviderInfoComponent,
    CreateProviderComponent,
    EditProviderComponent,
    DetailChoiseComponent,
    DetailChoiseInfoComponent,
    ProviderChoiseComponent,
    ProviderChoiseInfoComponent,
    DeliveryInfoComponent,
    EditDeliveryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: MainpageComponent },
      { path: 'delivery-list', component: DeliveryListComponent },
      { path: 'create-delivery', component: CreateDeliveryComponent },
      { path: 'delivery-info', component: DeliveryInfoComponent },
      { path: 'edit-delivery', component: EditDeliveryComponent },
      { path: 'detail-choise', component: DetailChoiseComponent },
      { path: 'detail-choise-info', component: DetailChoiseInfoComponent },
      { path: 'provider-choise', component: ProviderChoiseComponent },
      { path: 'provider-choise-info', component: ProviderChoiseInfoComponent },
      { path: 'detail-list', component: DetailListComponent },
      { path: 'create-detail', component: CreateDetailComponent },
      { path: 'detail-info', component: DetailInfoComponent },
      { path: 'edit-detail', component: EditDetailComponent },
      { path: 'provider-list', component: ProviderListComponent},
      { path: 'provider-info', component: ProviderInfoComponent},
      { path: 'create-provider', component: CreateProviderComponent},
      { path: 'edit-provider', component: EditProviderComponent},
      { path: 'orders', component: OrdersComponent },
    ]),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
