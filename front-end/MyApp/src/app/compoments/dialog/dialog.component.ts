import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Folder } from 'src/app/models/folder.model';
import { FolderService } from 'src/app/services/folder.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent{
  constructor(){}
  //   public dƠialogRef: MatDialogRef<DialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: Folder,public folderService:FolderService) {}
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}
