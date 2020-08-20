import express = require('express');
import createFile = require('../ults/generateGoblePath')
const router = express.Router();
import admin = require('firebase-admin');
import { VirtualFile } from '../../models/file.model';
const firestore = admin.firestore();
import fakeData = require('../../fakeData/temperData')
import { Folder } from '../../models/folder.model';
// import uploader = require('../ults/wirteFile');
// import expressFileupload = require('express-fileupload');
import deleter = require('../ults/deleteFile');
import fileExist = require('../ults/fileInfo');
function nullChecker(key): boolean {
    if (key == undefined) {
        return true
    }
    return false;
}

// Todo JWT checker before delect
// [1] : Check for [] of file uuid
router.post('/', async (req, res) => {

    let currentFolder = req.body['currentFolder'];
    let removeFile = req.body['removeFile'] as Array<string>;

    if (nullChecker(removeFile)) {
        console.log("Canot file keys");
        res.status(501).send("Missing KEYS");
        return;
    }
    if (nullChecker(currentFolder)) {
        console.log("Canot file keys");
        res.status(501).send("Missing KEYS");
        return;
    }


    // Not Safety
    let comfromRemovedFile: any = [];
    removeFile.forEach(async (file) => {
        return new Promise(async (res, rej) => {
            try {
                if (await fileExist.fileExist(file)) {
                    console.log(`Dose you run : DROP ${file}`)
                    res(comfromRemovedFile.push(file));
                    await deleter.removeFile(file); // DEL
                }
                console.log(comfromRemovedFile.length);

            } catch (error) {
                rej(error);
            }
        })
    })
    res.send({
        requestRemove: removeFile,
        removed: comfromRemovedFile
    })
})


export = router