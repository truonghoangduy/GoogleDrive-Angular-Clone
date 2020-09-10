import { Injectable } from '@angular/core';
import { ViewCurrentFolder, BreadCrumbState } from 'src/app/models/view.model';
import { ApiBrowseService} from '../browse/api-browse.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  currentViewFolder:BehaviorSubject<ViewCurrentFolder> = new BehaviorSubject<ViewCurrentFolder>({
    files:[],
    folders:[],
    requestPath:""
  });

  currentPath:string;

  fakeData:Array<ViewCurrentFolder> = [
    // {
    //   files:["123.txt"],
    //   folders:["ABC"],
    //   requestPath:"admin"
    // },
    // {
    //   files:["123.txt","1231234123124.txt",'hhsdfas.txt'],
    //   folders:[],
    //   requestPath:"admin/2"
    // },
    // {
    //   files:[],
    //   folders:[],
    //   requestPath:"admin/2/3"
    // }
  ]


  constructor(public browseApi:ApiBrowseService) { 
    // this.clearnBreadCrum()

  }

  clearnBreadCrum(){
    this.fakeData = [];
  }

  getBreadCrum(){
    return this.fakeData;
  }

  async removeAt(breadState:BreadCrumbState){
    // console.log("KK")
    console.log(this.fakeData)
    this.fakeData.slice(0,breadState.choosenPathIndex)
    console.log(this.fakeData)
    // toDo call Browes API
    this.currentPath = this.fakeData[this.fakeData.length-1].requestPath

    let newRequestForPath = await this.browseApi.getFolderV2(this.currentPath);
    this.currentViewFolder.next(newRequestForPath)

    
  }

  async refreshAfterAction(){
    console.log("CALL REFRESGGG")
    console.log(this.currentPath)

    let currentPath = await this.browseApi.getFolderV2(this.currentPath)
    console.log({
      currentPATHH : this.currentPath,
      log:currentPath
    })
    // console.log(currentPath)
    this.currentViewFolder.next(currentPath)
    // await this.requestPath(this.currentPath);
  }

  async requestPath(path:string){
    console.log(path)
    let requestValue = await this.browseApi.getFolderV2(path);
    // console.log(this.fakeData.length)
    this.fakeData.push(requestValue)
    this.currentPath = requestValue.requestPath

    this.currentViewFolder.next(requestValue)
    this.fakeData = [...this.fakeData]; // Imutaial [...] 0xDDD fakedata -> [ ... 1D] Ref : 0xXXXXX
    console.log("Update LENGHT "+this.fakeData.length)

  }
}
