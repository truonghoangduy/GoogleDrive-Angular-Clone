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
<<<<<<< HEAD
  public newFolder(name: string) {
    this.folderBD.push(
      { name: name }
    );
  }

  // folderBD:Array<Folder>=[];
  constructor(public apiService: ApiService, public httpClient: HttpClient) { }

=======
  // constructor() { }
  // newFolder(name:string){
  //   this.folderBD.push(
  //     {name:name},
  //     );
  // folderBD:Array<Folder>=[];
  constructor(public apiService:ApiService, public httpClient:HttpClient) 
  {}
>>>>>>> 40b6e065a4457bb5757d81f8f0230896e27e7ed3
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
