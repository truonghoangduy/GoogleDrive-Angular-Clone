import { Injectable } from '@angular/core';
import { Folder } from '../models/folder.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service'
@Injectable({
  providedIn: 'root'
})
export class FolderService {
  folderBD: Array<Folder> = [
    { name: "Folder test" },
    { name: "Folder-test" },
  ];

  // newFolder(name:string){
  //   this.folderBD.push(
  //     {name:name},
  //     );
  // }
  // folderBD:Array<Folder>=[];
  constructor(public apiService:ApiService, public httpClient:HttpClient) { }
  
  // constructor() { }
  newFolder(name:string){
    this.folderBD.push(
      {name:name},
      )};
  // folderBD:Array<Folder>=[];

  public async browse(uid, token, directory: string) {
    try {
      let result = await this.httpClient.post(this.apiService.root + "/browse", {
        uid: uid,
        token: token,
        currentDirectory: directory

      }).toPromise();
      return { ...result };

    }
    catch (e) {
      return { status: "failed", message: e };
    }
  }
}
