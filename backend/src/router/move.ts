// import * as expressLib from "express";
import fs = require('fs-extra');
import express = require('express');
import createFile = require('../ults/generateGoblePath')
const router = express.Router();
import admin = require('firebase-admin');
import { VirtualFile } from '../../models/file.model';
const firestore = admin.firestore();
import fakeData = require('../../fakeData/temperData')
import evn = require('../../environment')
import path = require('path');
import { options } from './browse';



router.post('/', async (res, resp) => {
    const { currentDirectory, directoryMove, fileName} = res.body;

    try {
        let currentWantToMove = await fs.readdir(evn.environment.warehouse + "/" + currentDirectory)
        // let fileName = currentDirectory.split('/');
        // fileName = fileName[fileName.length - 1];
        let currentDirectoryExist = await fs.pathExists(evn.environment.warehouse + "/" + currentDirectory);
        let directoryMoveExist = await fs.pathExists(evn.environment.warehouse + "/" + directoryMove);
        if (currentDirectoryExist && directoryMoveExist) {
            console.log(evn.environment.warehouse + "/" + currentDirectory , evn.environment.warehouse + "/" + directoryMove);

            // for(let i = 0; i < currentWantToMove.length; i++){
            //     if( fileName == currentWantToMove[i]){
            //         return fileName;
            //     }
            // }

            await fs.copy(evn.environment.warehouse + "/" + currentDirectory + "/"+ fileName, evn.environment.warehouse + "/" + directoryMove );
            await fs.remove(evn.environment.warehouse + "/" + currentDirectory + "/" + fileName);

            // await fs.copyFile(evn.environment.warehouse + "/" + currentDirectory + "/"+ fileName, evn.environment.warehouse + "/" + directoryMove, 0 );

            // await fs.moveSync(evn.environment.warehouse + "/" + currentDirectory, evn.environment.warehouse + "/" + directoryMove + fileName)
            resp.send("Folder/file " + directoryMove + " is moved");
        } else {
            resp.send('Folder/file is not exist !!!');
        }
    } catch (error) {
        resp.send('error')
    }
    
})


export = router