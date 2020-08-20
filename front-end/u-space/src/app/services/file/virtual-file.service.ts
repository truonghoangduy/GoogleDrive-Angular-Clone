import { Injectable } from '@angular/core';
import {Folder} from '../../models/folder.model'
import {VirtualFile} from '../../models/file.model'
@Injectable({
  providedIn: 'root'
})
export class VirtualFileService {
  fileDicrectory:Array<Folder>=[
    {
      uuid:"Folder1",
      name:"Folder1",
      files:[
        <VirtualFile>{
          uuid:"File1",
          name:"File1",
          pictureURL:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
          createDate: new Date().toUTCString(),
          volume:"10KB",
          owner:"TH1305"
        },
        <Folder>{
          uuid:"SubFolder1",
          name:"SubFolder1",
          files:[
            {
              uuid:"SubFolder1",
              name:"SubFolder1",
              pictureURL:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
              createDate: new Date().toUTCString(),
              volume:"10KB",
              owner:"TH1305"
            },
    
          ],
          volume:"10KB",
          createDate:"",
          owner:"TH1305"
        }
      ],
      volume:"10KB",
      createDate:"",
      owner:"TH1305"
    }
  ]
  constructor() { }
}
