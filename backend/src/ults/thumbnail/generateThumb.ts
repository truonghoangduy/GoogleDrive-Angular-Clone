import fs = require('fs-extra')
import imageMagick = require('gm');

import path = require('path');
const gm = imageMagick.subClass({imageMagick: true})
import evn = require('../../../environment');
import admin = require('firebase-admin');
const auth = admin.auth()





async function generatethumbnailPath(filepath:string){
    let index = filepath.split('/');
    let fileName = index[index.length-1]; 

    let hiddenFolder = path.join(filepath,'..',".thumbnail")
    await fs.ensureDir(hiddenFolder)
    let thumbnailPath = path.join(hiddenFolder,fileName);

    return thumbnailPath;
}
export async function generateThumbnail(path:string){
    let thumbnailPath = await generatethumbnailPath(path);
    let getFristPic = "";
    let pdfFlag = false
    let fileExtension = (/\.(gif|jpe?g|tiff?|png|webp|bmp|pdf)$/i).exec(thumbnailPath);
    if (fileExtension[1].includes("pdf")) {
        getFristPic="[0]"
        pdfFlag = true
    }
    gm(path+getFristPic).resize(500,500).write(pdfFlag?thumbnailPath+".png":thumbnailPath,function (err) {
        if (!err) {console.log('done')};
      }
    );
}

