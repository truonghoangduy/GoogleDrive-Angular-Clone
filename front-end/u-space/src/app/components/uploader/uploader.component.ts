import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FunctionalService} from '../../services/functional.service'
import { DataService } from 'src/app/services/data/data.service';



@Component({
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploadComponent implements OnInit {


  constructor( public async :FunctionalService,
    public dialogRef: MatDialogRef<UploadComponent>,
    public dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

  }

}
