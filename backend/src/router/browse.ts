// import * as expressLib from "express";

import express = require('express');
import createFile = require('../ults/generateGoblePath')
import fs = require('fs-extra');
import admin = require('firebase-admin');
import evn = require('../../environment');
import path = require('path');
const router = express.Router();


import { HTTP_CODE } from '../models/HTTPCODE';

router.post('/', async (res, resp) => {
    const { currentDirectory } = res.body;
    try {

        let pathToUser =path.join(evn.environment.warehouse,currentDirectory)
        if (!await fs.pathExists(pathToUser)) {
            await fs.ensureDir(pathToUser)
        }
        let current = await fs.readdir(evn.environment.warehouse + "/" + currentDirectory)
        let files = [];
        let folders = [];

            for (let i = 0; i < current.length; i++) {
                if (current[i] != '.thumbnail') {
                    let isFolderPath = await path.join(pathToUser, current[i]);
                    let isFolder = await fs.statSync(isFolderPath);
                    if (isFolder.isFile()) {
                        files.push(current[i]);
                    } else if (isFolder.isDirectory()) {
                        folders.push(current[i])
                    }
                }
            }
            resp.send({
                requestPath: currentDirectory,
                files:files,
                folders:folders
            })
        
    } catch (err) {
        resp.send(err);
    }

});

router.post('/share', async (res, resp) => {
    let { pathUUID, owner, sharedUUID } = res.body;
    let files = [];
    let folders = [];
    let currentHead = (<string>pathUUID).split("/")[0]
    let continousPath = false;
    let lastIndex = (<string>pathUUID).split("/");
    if (lastIndex.length > 0) {
        continousPath = true
    }

    try {
        let pathtoOwnerRef = await admin.firestore().collection('share').doc(owner).collection('sharable').doc(sharedUUID).collection('shared').doc(currentHead).get();
        if (pathtoOwnerRef.exists) {
            let decodedPathToOwner = <string>pathtoOwnerRef.get('path')
            if (continousPath) {
                let pathToContunous = (<string>pathUUID).slice(currentHead.length,(<string>pathUUID).length)
                decodedPathToOwner = path.join(decodedPathToOwner,pathToContunous)
            }
            
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

                    resp.send({
                        requestPath: pathUUID,
                        files: files,
                        folders: folders
                    })
                } else {
                    let parrentPathToOnwer = path.dirname(pathToOnwer)
                    let parrentPathToOnwerDir = await fs.readdir(parrentPathToOnwer)
                    for (let iterator of parrentPathToOnwerDir) {
                        if (path.join(parrentPathToOnwer, iterator) == path.join(pathToOnwer)) {
                            console.log(iterator)
                            files.push(iterator)
                            break;
                        }
                        // let isFile = (fs.stat(path.join(parrentPathToOnwer,iterator)))
                    }

                }


                resp.send({
                    requestPath: pathUUID,
                    files: files,
                    folders: folders
                })

            }else{
                resp.status(HTTP_CODE.BAD_REQUEST).send({
                    result:false
                })
            }
        }


    } catch (e) {
        console.log(e);
        resp.send(e)
    }
})



export = router
