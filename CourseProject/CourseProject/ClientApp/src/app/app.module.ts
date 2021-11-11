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

@NgModule({
  declarations: [
    AppComponent,
    FootbarComponent,
    HeadbarComponent,
    MainpageComponent,
    ProductListComponent,
    DialogAuthComponent,
    DialogRegComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: MainpageComponent },
      { path: 'product-list', component: ProductListComponent },
    ]),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
