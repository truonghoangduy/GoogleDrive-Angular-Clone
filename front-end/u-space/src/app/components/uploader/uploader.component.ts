import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

  }

}
