import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { FunctionalService } from '../../services/functional.service'

@Component({
  templateUrl: './file-action-dialog.component.html',
  styleUrls: ['./file-action-dialog.component.scss']
})
export class FileActionDialogComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<FileActionDialogComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any, public drive: FunctionalService) {
    if (data.forFolder) {
      this.buildMenuForFolder();
    }
  }

  menu = [
    {
      icon: "https://image.flaticon.com/icons/svg/189/189665.svg", text: "Info", handler: () => {
        this._bottomSheetRef.dismiss();
      }
    }, {
      icon: "https://image.flaticon.com/icons/svg/124/124818.svg", text: "Move", handler: () => {
        this.drive.addToClipboard(this.data.location, false);
        this._bottomSheetRef.dismiss();
      }
    }, {
      icon: "https://image.flaticon.com/icons/svg/2270/2270591.svg", text: "Copy", handler: () => {
        this.drive.addToClipboard(this.data.location, true);
        this._bottomSheetRef.dismiss();
      }
    },
    {
      icon:"", text:"Share",handler:()=>{

      }
    },
    {
      icon: "https://image.flaticon.com/icons/svg/1632/1632602.svg", text: "Delete", handler: async () => {
        let result = await this.drive.deleteDir(this.data.uid, this.data.token, this.data.location);
        this._bottomSheetRef.dismiss();
      }
    }
  ]

  ngOnInit() {
  }

  buildMenuForFolder() {
    this.menu = [
      {
        icon: "https://image.flaticon.com/icons/svg/189/189665.svg", text: "Info", handler: () => {

        }
      },
      {
        icon: "https://cdn4.iconfinder.com/data/icons/materia-database-vol-1/24/037_026_copy_move_folder_information_into-512.png", text: "Move", handler: () => {
          this.drive.addToClipboard(this.data.location, false);
          this._bottomSheetRef.dismiss();
        }
      }, {
        icon: "https://image.flaticon.com/icons/svg/1087/1087547.svg", text: "Clone", handler: () => {
          this.drive.addToClipboard(this.data.location, true);
          this._bottomSheetRef.dismiss();
        }
      }, {
        icon: "https://image.flaticon.com/icons/svg/1632/1632602.svg", text: "Delete", handler: async () => {
          let result = await this.drive.deleteDir(this.data.uid, this.data.token, this.data.location, true);
          this._bottomSheetRef.dismiss();
        }
      },
    ]
  }

}
