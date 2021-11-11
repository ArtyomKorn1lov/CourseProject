import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogRegComponent } from '../dialog-reg/dialog-reg.component';

@Component({
  selector: 'app-dialog-auth',
  templateUrl: './dialog-auth.component.html',
  styleUrls: ['./dialog-auth.component.css']
})
export class DialogAuthComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogAuthComponent>, public dialog: MatDialog) { }

  openRegDialog() {
    this.dialogRef.close();
    const newDialog = this.dialog.open(DialogRegComponent);
  }

  ngOnInit(): void {
  }

}
