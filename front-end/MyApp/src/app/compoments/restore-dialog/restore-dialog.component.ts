import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BinInfo } from 'src/app/models/bin.model';
import {Timestamp} from  '@firebase/firestore-types'

@Component({
  selector: 'app-restore-dialog',
  templateUrl: './restore-dialog.component.html',
  styleUrls: ['./restore-dialog.component.scss']
})
export class RestoreDialogComponent implements OnInit {
  selectedTab='';
  constructor(@Inject(MAT_DIALOG_DATA) public data:Array<BinInfo>,
  public dialogRef: MatDialogRef<RestoreDialogComponent>) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  public getTime(timeStamp){
    return new Date(timeStamp._seconds*1000);
  }

  seletedIndex(event,uuidName:string){
    console.log(event)
    this.selectedTab = uuidName
  }

  closeDialog(flag:boolean){
    this.dialogRef.close(
      flag?(this.selectedTab.length > 0?this.selectedTab:null):null
    )
  }
  



}
