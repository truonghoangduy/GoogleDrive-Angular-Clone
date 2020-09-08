import fs = require('fs-extra')
import evn = require('../../environment')
import * as fsrealLib from 'fs'

export async function fileExist(uuidName:string): Promise<boolean>{

    try {
        await fs.access(evn.environment.warehouse+"/"+uuidName);
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export async function fileExistFromRoot(uuidName:string): Promise<boolean>{

    try {
        // to send Dowload path Nodejs require path from root
        await fs.access(uuidName);
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}