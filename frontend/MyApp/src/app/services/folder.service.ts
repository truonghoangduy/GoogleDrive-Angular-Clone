import { Injectable } from '@angular/core';
import {Folder} from '../models/folder.model';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  folderBD:Array<Folder>=[];
  constructor() { }
  newFolder(name:string){
    this.folderBD.push(
      {name:name},
      );
  }
}
