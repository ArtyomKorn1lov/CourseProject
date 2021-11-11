import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogAuthComponent } from '../dialog-auth/dialog-auth.component';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openAuthDialog() {
    const dialogRef = this.dialog.open(DialogAuthComponent);
  }

  ngOnInit(): void {
  }

}
