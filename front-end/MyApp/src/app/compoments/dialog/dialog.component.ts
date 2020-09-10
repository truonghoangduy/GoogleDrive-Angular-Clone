import {Component, Inject,OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { FolderService } from 'src/app/services/folder.service';
import {Folder } from '../../models/folder.model';
import { ApiBrowseService } from 'src/app/services/browse/api-browse.service';
import { BreadcrumbService } from 'src/app/services/breadcrumb/breadcrumb.service';
import { ApiService } from 'src/app/services/api.service';

import {FormGroup,FormControl, FormBuilder} from '@angular/forms'
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const API_CREATEFOLDER="createFolder"
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {


  createform = this.fb.group({
    makeDirectory: new FormControl(''),
    currentDirectory:this.breadcrumbService.currentPath
  })

 async onsubmitForm(){
 await this.createFolderD(this.createform.value)
  console.log(this.createform.value);
  
 }

  
  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,public folderService :FolderService, public apiBrowser: ApiBrowseService,
     public breadcrumbService: BreadcrumbService, public apiService:ApiService,
     public http:HttpClient, public matdialog:MatDialog) {
     }
    onNoClick(): void {
      this.dialogRef.close();
    }

    ngOnInit(): void {
    
    }

    async save(){
      this.dialogRef.close(this.createform.value)
      console.log(this.createform.value)
      await this.onsubmitForm();
      this.breadcrumbService.refreshAfterAction()
    }

    close(){
      this.dialogRef.close();
    }
    async createFolderD(folder){
      try {
       console.log( await this.http.post(environment.endpoint+API_CREATEFOLDER,folder).toPromise());
      } catch (error) {
        console.log(error)
      }
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
