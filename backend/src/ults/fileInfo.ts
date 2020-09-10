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

export function fileSize(stat:number){
    let size = '';
    if (stat / 1024 / 1024 >= 1) {
        size = Math.round(stat / 1024 / 1024 * 100) / 100 + ' MB';
    } else if (stat / 1024 >= 1) {
        size = Math.round(stat / 1024 * 100) / 100 + ' KB';
    } else if (stat >= 0) {
        size = Math.round(stat * 100) / 100 + ' Byte';
    }
    return size
    
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