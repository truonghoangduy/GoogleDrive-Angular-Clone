import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FunctionalService {

  constructor( private client: HttpClient ,private api: ApiService) { }
  clipboard = []
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
  
  public async copyOrMove(uid, token, source, destination, method) {
    try {
      let result = await this.client.post(this.api.root + "/file/copy-or-move", {
        uid: uid,
        token: token,
        source: source,
        destination: destination,
        method: method
      }).toPromise();
      return { ...result };
    }
    catch (e) {
      return { status: "failed", message: e };
    }
  }
  
  public addToClipboard(directory, isCopy = true) {
    let index = this.clipboard.findIndex((file) => file.directory == directory);
    if (index != -1) {
      this.clipboard[index].method = isCopy ? "copy" : "move";
    }
    else {
      this.clipboard.push({ directory: directory, method: isCopy ? "copy" : "move" });
    }
  }
  
  public removeFromClipboard(directory) {
    console.log(this.clipboard);
    let index = this.clipboard.findIndex((file) => file.directory == directory);
    if (index != -1) {
      this.clipboard = this.clipboard.splice(index, 1);
    }
  }
  
  public async share(uid, token, fileName, shareable, shortenUrl){
      let result = await this.client.post(this.api.root+"file/share",{
        uid:uid,
        token:token,
        fileName:fileName,
        shareable:shareable,
        shortenUrl:shortenUrl
      });
  }
}
