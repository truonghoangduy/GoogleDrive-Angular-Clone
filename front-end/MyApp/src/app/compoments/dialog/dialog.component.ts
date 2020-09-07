import {Component, Inject,OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FolderService } from 'src/app/services/folder.service';
import {Folder } from '../../models/folder.model';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  name:string;


  
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Folder,public folderService :FolderService) {}
    onNoClick(): void {
      this.dialogRef.close();
    }
    ngOnInit(): void {
    }
}

// =======
// export class DialogComponent{
//   constructor(){}
//   //   public dƠialogRef: MatDialogRef<DialogComponent>,
//   //   @Inject(MAT_DIALOG_DATA) public data: Folder,public folderService:FolderService) {}
//   // onNoClick(): void {
//   //   this.dialogRef.close();
//   // }
// }
