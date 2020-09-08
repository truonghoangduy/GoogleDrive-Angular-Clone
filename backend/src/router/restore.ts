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

import {BinInfo, RestoreOperation} from '../models/bin.model'
import { HTTP_CODE } from '../models/HTTPCODE';

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}



async function findPath(user:string,uuidFolderPath:string):Promise<RestoreOperation>{
    let queryRef = await admin.firestore().collection('bin').doc(user).collection('binList').doc(uuidFolderPath)
    let query = await queryRef.get();
    if (query.exists) {
        let queryData = <BinInfo>query.data();
        await queryRef.delete()
        return {
            pathToBin:queryData.binPath,
            pathToResotre:queryData.moveFrom
        };
    }else{
        return null
    }
}



router.post('/', async (req, res) => {
    const {folderUUID,onwerUUID} = req.body
    try {
        let restoreDetail = await findPath(onwerUUID,folderUUID)    
        if (restoreDetail != null) {
            let binsourceExistPath = path.join(evn.environment.recyclebin,onwerUUID,restoreDetail.pathToBin);
            let sourceExist = await fs.pathExists(binsourceExistPath);
            let uuidExist = await fs.pathExists(evn.environment.recyclebin + "/" + onwerUUID);
            
    
            if (uuidExist && sourceExist) {

                    // HOW THE FUCK THIS WOKR
                    await fs.copy(binsourceExistPath , evn.environment.warehouse+ "/" + restoreDetail.pathToResotre ,{
                        overwrite:true
                    });
                    await fs.remove(binsourceExistPath)
                    res.send("Folder/file " + restoreDetail.pathToResotre + " is Restored");
            }
            else {
                res.send('Folder/file is not exist !!!');
            }
        }else{
            res.send("not exites").status(HTTP_CODE.BAD_REQUEST)
        }   

 
    } catch (error) {
        res.send(error).status(HTTP_CODE.INTERNAL_SERVER_ERROR);
    }
})

// API FOR SAME FOLDER BUT MULTIHPLE OF DELETATION


// FUTURE TODO pagingnate ?
router.post('/recent/:number', async (res, resp) => {
    
})


export = router


// let query = await admin.firestore().collection("bin").doc(user).collection("binList")
// .where('fileName','==',pathToRestore).get();
// for (let doc of query.docs) {

//     // TO DO HAS TIME TO ENCOUNTER DUPLICATE FILE NAME
//     if (doc.exists) {
//         let docData = <BinInfo>doc.data() // Casting
//         reStoreToPath = docData.fileName;
//         pathToBin = docData.binPath;
//         console.log(doc.get('time'))
//         await doc.ref.delete()
//     }
// }