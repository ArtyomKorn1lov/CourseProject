import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogAuthComponent } from '../dialog-auth/dialog-auth.component';

@Component({
  selector: 'app-dialog-reg',
  templateUrl: './dialog-reg.component.html',
  styleUrls: ['./dialog-reg.component.css']
})
export class DialogRegComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogRegComponent>, public dialog: MatDialog) { }

  openAuthDialog() {
    this.dialogRef.close();
    const newDialog = this.dialog.open(DialogAuthComponent);
  }

  ngOnInit(): void {
  }

}
