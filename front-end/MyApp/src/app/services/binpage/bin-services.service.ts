import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BinInfo, BinModel } from 'src/app/models/bin.model';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class BinServicesService {

  currentViewBin: BehaviorSubject<BinModel> = new BehaviorSubject<BinModel>({
    files: [],
    folders: []
  });

  constructor(private apiServices: ApiService) {}

  async getBinList() {
    try {
      this.apiServices.getBinList().subscribe((data)=>{
        // console.log(data.keys)
        if (data.keys != null) {
          const prasefiles = [...this.getFiles(data)];
          const prasefolders = [...this.getFolders(data)];
          this.currentViewBin.next({
            files: prasefiles,
            folders: prasefolders
          })
        }else{
          this.currentViewBin.next({
            files: [],
            folders: []
          })
        }

      })
    } catch (error) {
      console.log(error)
    }

  }

  // async getData(){
  //   this.binListFromAPI = [];
  //   this.folders = [];
  //   this.files = [];
  //   console.log("RELOAD DATA"
  //   )
  //   const binList = await this.apiServices.getBinList();
  //   this.binListFromAPI = [...binList];
  //   // Flatten :))
  //   this.folders = [...this.getFolders(binList).filter(bin => bin != undefined)];
  //   this.files = [...this.getFiles(binList).filter(bin_1 => bin_1 != undefined)];
  //   this.binSortedWithCommonPath = Array(binList.length).fill(0).map((x, i) => i);
  //   console.log(this.folders);
  // }


  getFiles(data: Array<Array<BinInfo>>) {
    return data.map(binInfo => {
      if (!binInfo[0].isFolder) {
        return binInfo
      }
    });
  }

  getFolders(data: Array<Array<BinInfo>>) {
    return data.map(binInfo => {
      if (binInfo[0].isFolder) {
        return binInfo
      }
    });
  }

}
