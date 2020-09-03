import express = require('express');
import createFile = require('../ults/generateGoblePath')
const router = express.Router();
import admin = require('firebase-admin');
const firestore = admin.firestore();
import fakeData = require('../../fakeData/temperData')
// import uploader = require('../ults/wirteFile');
// import expressFileupload = require('express-fileupload');
import deleter = require('../ults/deleteFile');
import fileExist = require('../ults/fileInfo');
import {HTTP_CODE} from '../models/HTTPCODE'

const FolderCollectionRef = firestore.collection("folders");
const FileCollectionRef = firestore.collection("files");



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
        res.status(HTTP_CODE.BAD_REQUEST).send("Missing KEYS");
        return;
    }
    if (nullChecker(currentFolder)) {
        console.log("Canot file keys");
        res.status(HTTP_CODE.BAD_REQUEST).send("Missing KEYS");
        return;
    }
    let comfromRemovedFile:Array<string> = [];
    for (let file of removeFile) {
         try {
            if (await fileExist.fileExist(file)) {
                console.log(`Dose you run : DROP ${file}`)
                comfromRemovedFile.push(file);
                await deleter.removeFile(file); // DEL
            }
        } catch (error) {
        }
    }
    res.send({
        requestRemove: removeFile,
        removed: comfromRemovedFile
    })
})


export = router