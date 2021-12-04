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
    CreateDetailComponent
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
      { path: 'detail-list', component: DetailListComponent },
      { path: 'create-detail', component: CreateDetailComponent },
      { path: 'orders', component: OrdersComponent },
    ]),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
