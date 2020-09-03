import fs = require('fs-extra')
import evn = require('../../environment')
import { FileUploadState } from '../models/fileState.model';



export function writeFileToDir(uuidName:string,data){
    fs.writeFile(evn.environment.warehouse+'/'+uuidName,data).then((vaule)=>{
        console.log(`Done upload : ${uuidName}`)
    })
}
// TO DO NEED FIX
export function writeFileToDirV2(uuidName:string,data):Promise<FileUploadState>{
    return new Promise<FileUploadState>((resolve, reject)=>{
        fs.writeFile(evn.environment.warehouse+'/'+uuidName,data).then((vaule)=>{
            resolve({
                fileName:uuidName,
                uploadState:true,
            })
        }).catch(()=>reject("Fail to upload"))
    });
}