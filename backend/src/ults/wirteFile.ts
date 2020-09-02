import fs = require('fs-extra')
import evn = require('../../environment')


export function writeFileToDir(uuidName:string,data,directory:string){
    fs.ensureDir(evn.environment.warehouse+'/'+directory).then(()=>{
        fs.writeFile(evn.environment.warehouse+'/'+uuidName,data).then((vaule)=>{
            console.log(`Done upload : ${uuidName}`)
            
        })
    })

}