import { Injectable } from '@angular/core';
import {Folder} from '../../models/folder.model'
import {VirtualFile} from '../../models/file.model'
@Injectable({
  providedIn: 'root'
})
export class VirtualFileService {
  fileDicrectory:Folder=
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
      ],
      folder:[
          <Folder>{
            uuid:"SubFolder1",
            name:"SubFolder1",
            files:[
              <VirtualFile>{
                uuid:"SubFolder1File1",
                name:"SubFolder1File1File1",
                pictureURL:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
                createDate: new Date().toUTCString(),
                volume:"10KB",
                owner:"TH1305"
              },
            ]
          },
          <Folder>{
            uuid:"SubFolder122",
            name:"SubFolder122",
            files:[
              <VirtualFile>{
                uuid:"SubFolder1File1",
                name:"SubFolder1File1File1",
                pictureURL:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
                createDate: new Date().toUTCString(),
                volume:"10KB",
                owner:"TH1305"
              },
            ],
            folder:[
              <Folder>{
                uuid:"SubFolder22",
                name:"SubFolder222",
                files:[
                  <VirtualFile>{
                    uuid:"SubFolder1File1",
                    name:"SubFolder1File1File1",
                    pictureURL:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
                    createDate: new Date().toUTCString(),
                    volume:"10KB",
                    owner:"TH1305"
                  },
                ],
                
              }
            ]
            
          }
      ],
          volume:"10KB",
          createDate:"",
          owner:"TH1305"
    }


    //   traverse(o, fn, scope = []) {
    //   for (let i in o) {
    //     if (i == "folder") {
    //       // console.log(o[i].lenght)
    //       fn.apply(this, [i, o[i], scope]);
    //       if (o[i].lenght != undefined) {
    //         this.traverse(o[i], fn, scope.concat(i));
    //       }
    //     }
    //   }
    // }



  // makeSreachable(){

  //   // let listOfFile = [];
  //   let listOfableFolder = [];
  //   this.traverse(this.fileDicrectory, (key, value, scope) => {
  //     // console.log(value)
  //     listOfableFolder.push(value)
  //     // if (value === 'Some Value') {
  //       console.log(`Position: myObject[${scope.concat(key).map(k => isNaN(k) ? `'${k}'` : k).join('][')}]`);
  //     // }
  //   });
  //   console.log(...listOfableFolder)
      
  //   }
  
  // traverse(o, fn, scope = []) {
  //     for (let i in o) {
  //       fn.apply(this, [i, o[i], scope]);
  //       if (o[i] !== null && typeof o[i] === "object") {
  //         this.traverse(o[i], fn, scope.concat(i));
  //       }
  //     }
  //   }
    
  constructor() {

   }
}
// fileDicrectory:Array<Folder>=[
//   {
//     uuid:"Folder1",
//     name:"Folder1",
//     files:[
//       <VirtualFile>{
//         uuid:"File1",
//         name:"File1",
//         pictureURL:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
//         createDate: new Date().toUTCString(),
//         volume:"10KB",
//         owner:"TH1305"
//       },
//       <Folder>{
//         uuid:"SubFolder1",
//         name:"SubFolder1",
//         files:[
//           {
//             uuid:"SubFolder1",
//             name:"SubFolder1",
//             pictureURL:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
//             createDate: new Date().toUTCString(),
//             volume:"10KB",
//             owner:"TH1305"
//           },
  
//         ],
//         volume:"10KB",
//         createDate:"",
//         owner:"TH1305"
//       }
//     ],
//     volume:"10KB",
//     createDate:"",
//     owner:"TH1305"
//   }
// ]