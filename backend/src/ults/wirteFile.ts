import fs = require('fs-extra')
import evn = require('../../environment')


export function writeFileToDir(uuidName:string,data){
    fs.writeFile(evn.environment.warehouse+'/'+uuidName,data).then((vaule)=>{
        console.log(`Done upload : ${uuidName}`)
    })
}