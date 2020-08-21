import { Injectable } from '@angular/core';
import {ApiService} from '../services/api.service'
import { HttpClient } from '@angular/common/http';
import {File} from '../models/file.model'


@Injectable({
  providedIn: 'root'
})
export class FunctionalService {

  constructor(private api: ApiService, private client: HttpClient) { }
//   public async Sort(pictureURL,volume,createDate,owner,icon,name:string) {
//     try {
//       let result = await this.client.post(this.api.root + "/user/sort", {
//         pictureURL: URL,
//         volume: volume,
//         createDate: Date,
//         name : name,
//       }).toPromise();
//       return { ...result };

//     }
//     catch (e) {
//       return { status: "failed", message: e };
//     }
//   }
//

public async createFolder(uid, token, location, folderName) {
  try {
    let result = await this.client.post(this.api.root + "/folder/create", {
      uid: uid,
      token: token,
      location: location,
      folderName: folderName
    }).toPromise();
    return { ...result };
  }
  catch (e) {
    return { status: "failed", message: e };
  }
}
public async deleteDir(uid, token, location, forFolder = false) {
  console.log(location);
  try {
    let body = {
      uid: uid,
      token: token,
      location: location
    };
    if (forFolder) {
      body["forFolder"] = true;
    }
    let result = await this.client.post(this.api.root + "/file/delete", body).toPromise();
    return { ...result };
  }
  catch (e) {
    return { status: "failed", message: e };
  }
}
}


