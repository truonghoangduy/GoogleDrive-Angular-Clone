import fs = require('fs-extra')
import evn = require('../../environment')


export async function removeFile(uuidName:string):Promise<void>{
    return await fs.remove(evn.environment.warehouse+'/'+uuidName)
}