import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialog, DialogRole } from '@angular/material/dialog';


@Component({
  selector: 'app-new-folder',
  templateUrl: './new-folder.component.html',
  styleUrls: ['./new-folder.component.scss']
})
export class NewFolderComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewFolderComponent>) { }

  folderName = "";
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
