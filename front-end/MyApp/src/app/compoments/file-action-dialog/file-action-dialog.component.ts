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
      icon: "https://www.svgrepo.com/show/126178/question-mark.svg", text: "Info", handler: () => {
        this._bottomSheetRef.dismiss();
      }
    }, {
      icon: "https://icon-library.com/images/cut-icon/cut-icon-8.jpg", text: "Move", handler: () => {
        this.drive.addToClipboard(this.data.location, false);
        this._bottomSheetRef.dismiss();
      }
    }, {
      icon: "https://icon-library.com/images/copy-icon-vector/copy-icon-vector-20.jpg", text: "Copy", handler: () => {
        this.drive.addToClipboard(this.data.location, true);
        this._bottomSheetRef.dismiss();
      }
    },
    {
      icon:"", text:"Share",handler:()=>{

      }
    },
    {
      icon: "https://image.flaticon.com/icons/svg/1214/1214428.svg", text: "Delete", handler: async () => {
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
        icon: "https://www.svgrepo.com/show/126178/question-mark.svg", text: "Info", handler: () => {

        }
      },
      {
        icon: "https://icon-library.com/images/cut-icon/cut-icon-8.jpg", text: "Move", handler: () => {
          this.drive.addToClipboard(this.data.location, false);
          this._bottomSheetRef.dismiss();
        }
      }, {
        icon: "https://www.netclipart.com/pp/m/168-1682622_svg-icon-free-clone-icon-png.png", text: "Clone", handler: () => {
          this.drive.addToClipboard(this.data.location, true);
          this._bottomSheetRef.dismiss();
        }
      }, {
        icon: "https://image.flaticon.com/icons/svg/1214/1214428.svg", text: "Delete", handler: async () => {
          let result = await this.drive.deleteDir(this.data.uid, this.data.token, this.data.location, true);
          this._bottomSheetRef.dismiss();
        }
      },
    ]
  }

}
