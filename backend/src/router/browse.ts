// import * as expressLib from "express";

import express = require('express');
import createFile = require('../ults/generateGoblePath')
import fs = require('fs-extra');
const router = express.Router();
import admin = require('firebase-admin');
import evn = require('../../environment');
import path = require('path');

import { ShareInfo, ShareOperation } from '../models/share.model'

async function findPath(userOwner: string, uuidFolderPath: string, receiver: string): Promise<ShareOperation> {
    let queryRef = await admin.firestore().collection('share').doc(userOwner).collection('sharable').doc(receiver).collection('shared').doc(uuidFolderPath)
    let query = await queryRef.get();
    if (query.exists) {
        let queryData = <ShareInfo>query.data();
        await queryRef.delete()
        return {
            pathOfShare: queryData.path,
            ownerId: queryData.id
        };
    } else {
        return null
    }
}



router.post('/', async (res, resp) => {
    const { currentDirectory } = res.body;
    try {
        let currentPath = await path.join(evn.environment.warehouse, currentDirectory)
        let current = await fs.readdir(currentPath)
        let files = [];
        let folders = [];

        if (currentPath) {
            for (let i = 0; i < current.length; i++) {
                if (current[i] != '.thumbnail') {
                    let isPath = await path.join(currentPath, current[i]);
                    let isType = await fs.statSync(isPath);
                    if (isType.isFile()) {
                        files.push(current[i]);
                    } else if (isType.isDirectory()) {
                        folders.push(current[i])
                    }
                }
            }
            resp.send({
                requestPath: currentDirectory,
                files,
                folders
            })
        } else {
            resp.send("Folder/File does not exist.")
        }
    } catch (err) {
        resp.send(err);
    }

});

router.post('/share', async (res, resp) => {
    let { pathUUID, owner, sharedUUID } = res.body;
    let files = [];
    let folders = [];

    try {
        let pathtoOwnerRef = await admin.firestore().collection('share').doc(owner).collection('sharable').doc(sharedUUID).collection('shared').doc(pathUUID).get();
        if (pathtoOwnerRef.exists) {
            let decodedPathToOwner = <string>pathtoOwnerRef.get('path')
            let pathToOnwer = path.join(evn.environment.warehouse, decodedPathToOwner)
            let systemToOwnerPath = await fs.pathExists(pathToOnwer);
            if (systemToOwnerPath) {
                let isFolder = await fs.stat(pathToOnwer);
                if (isFolder.isDirectory()) {
                    let ownerDirectory = await fs.readdir(pathToOnwer)
                    if (ownerDirectory) {
                        for (let i = 0; i < ownerDirectory.length; i++) {
                            if (ownerDirectory[i] != '.thumbnail') {
                                let isPath = await path.join(pathToOnwer, ownerDirectory[i]);
                                let isType = await fs.statSync(isPath);
                                if (isType.isFile()) {
                                    files.push(ownerDirectory[i]);
                                } else if (isType.isDirectory()) {
                                    folders.push(ownerDirectory[i])
                                }
                            }
                        }
                    }
                }else{
                    let parrentPathToOnwer = path.dirname(pathToOnwer)
                    let parrentPathToOnwerDir = await fs.readdir(parrentPathToOnwer)
                    for (let iterator of parrentPathToOnwerDir) {
                        if (path.join(parrentPathToOnwer,iterator)==path.join(pathToOnwer)) {
                            console.log(iterator)
                            files.push(iterator)
                            break;
                        }
                        // let isFile = (fs.stat(path.join(parrentPathToOnwer,iterator)))
                    }
                    
                }


                resp.send({
                    requestPath: pathUUID,
                    files:files,
                    folders:folders
                })

            }
        }


    } catch (e) {
        console.log(e);
    }



    // try {
    //     let restoreDetail = await findPath(pathUUID, receiver)    
    //     if (restoreDetail != null) {
    //         let binsourceExistPath = path.join(evn.environment.recyclebin,onwerUUID,restoreDetail.pathToBin);
    //         let sourceExist = await fs.pathExists(binsourceExistPath);
    //         let uuidExist = await fs.pathExists(evn.environment.recyclebin + "/" + onwerUUID);


    //         if (uuidExist && sourceExist) {

    //                 // HOW THE FUCK THIS WOKR
    //                 await fs.copy(binsourceExistPath , evn.environment.warehouse+ "/" + restoreDetail.pathToResotre ,{
    //                     overwrite:true
    //                 });
    //                 await fs.remove(binsourceExistPath)
    //                 resp.send("Folder/file " + restoreDetail.pathToResotre + " is Restored");
    //         }
    //         else {
    //             resp.send('Folder/file is not exist !!!');
    //         }
    //     }else{
    //         resp.send("not exites").status(HTTP_CODE.BAD_REQUEST)
    //     }   


    // } catch (error) {
    //     resp.send(error).status(HTTP_CODE.INTERNAL_SERVER_ERROR);
    // }
})



export = router
