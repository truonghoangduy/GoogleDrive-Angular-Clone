// import * as expressLib from "express";
import fs = require('fs-extra');
import express = require('express');
import createFile = require('../ults/generateGoblePath')
const router = express.Router();
import admin = require('firebase-admin');
const firestore = admin.firestore();
import fakeData = require('../../fakeData/temperData')
import evn = require('../../environment')
import path = require('path');
const fieldValue = admin.firestore.FieldValue;
import * as checkUser from '../ults/checkAuth';
import {BinInfo} from '../models/bin.model'
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function isFile(fileName:string,uuidFolder:string){
    if (fileName.includes(".")) {
        return path.join(uuidFolder,fileName);
    }else{
        return uuidFolder
    }
    
}


router.post('/', async (res, resp) => {
    let list = res.body["source"].split('/');
    let fileName = list[list.length - 1];
    let user = list[0];
    try {
        let sourceExist = await fs.pathExists(evn.environment.warehouse + "/" + res.body["source"]);
        let uuidExist = await fs.pathExists(evn.environment.warehouse + "/" + user);
        

        if (uuidExist && sourceExist) {

            let binPathRef = await admin.firestore().collection("bin").doc(user).collection('binList').add({});
            let makeSaveTobin = await binPathRef.set(<BinInfo>{
                binPath:binPathRef.id, // PATH TO UUID FOLDER
                fileName:res.body["source"],
                moveFrom:res.body["source"],
                time:fieldValue.serverTimestamp()
            }
            );
            
            let newFolderUUID = binPathRef.id
                // STEP 
                // GRAB FROM WAREHOUSE 
                // MAKE UUID FROM FS
                // ifFile => bin/UUID/file.extension
                await fs.moveSync(evn.environment.warehouse+ "/" + 
                res.body["source"], 
                evn.environment.recyclebin+ "/" + user + "/" +isFile(fileName,newFolderUUID),
                {
                    overwrite:false
                });


                resp.send("Folder/file " + fileName + " is move");
        }
        else {
            resp.send('Folder/file is not exist !!!');
        }
    } catch (error) {
        resp.send(error);
    }
})

router.post('/', async (res, resp) => {

})





export = router