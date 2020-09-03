import fs = require('fs-extra')
import evn = require('../../environment')


export function writeFileToDir(uuidName:string,data,directory:string){ 
    fs.ensureDir(evn.environment.warehouse+'/'+directory).then(()=>{ // If dicrectory not exits then created and append the file
        fs.writeFile(evn.environment.warehouse+'/'+uuidName,data).then((vaule)=>{
            console.log(`Done upload : ${uuidName}`)
            
        })
    })

}