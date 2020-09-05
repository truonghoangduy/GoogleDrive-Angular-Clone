import { Component, OnInit } from '@angular/core';
import { FolderService } from 'src/app/services/folder.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  name: string;
  constructor(public folderService: FolderService) { }

  ngOnInit(): void {
  }
<<<<<<< HEAD
=======


  //   public dƠialogRef: MatDialogRef<DialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: Folder,public folderService:FolderService) {}
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
>>>>>>> 40b6e065a4457bb5757d81f8f0230896e27e7ed3
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
