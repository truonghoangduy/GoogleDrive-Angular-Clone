import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialog, DialogRole } from '@angular/material/dialog';
import {FunctionalService} from '../../services/functional.service'
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-new-folder',
  templateUrl: './new-folder.component.html',
  styleUrls: ['./new-folder.component.scss']
})
export class NewFolderComponent implements OnInit {

  constructor(
    public async :FunctionalService,
    public dialogRef: MatDialogRef<NewFolderComponent>,
    public dataService: DataService) { }

  folderName = "";
  createFolder(): void {
    this.dataService.db.push({
      name: this.folderName
    });
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
