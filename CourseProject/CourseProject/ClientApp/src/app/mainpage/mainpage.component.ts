import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogAuthComponent } from '../dialog-auth/dialog-auth.component';
import { DialogRegComponent } from '../dialog-reg/dialog-reg.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openRegDialog() {
    const dialogRef = this.dialog.open(DialogRegComponent);
  }

  openAuthDialog() {
    const dialogRef = this.dialog.open(DialogAuthComponent);
  }

  ngOnInit(): void {
  }

}
