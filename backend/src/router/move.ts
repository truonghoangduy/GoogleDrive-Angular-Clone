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
import { options } from './browse';

router.post('/', async (res, resp) => {
    const { currentDirectory, directoryMove } = res.body;

    try {
        let currentDirectoryExist = await fs.pathExists(evn.environment.warehouse + "/" + currentDirectory);
        let directoryMoveExist = await fs.pathExists(evn.environment.warehouse + "/" + directoryMove);
        if (currentDirectoryExist && directoryMoveExist) {
            console.log(evn.environment.warehouse + "/" + currentDirectory , evn.environment.warehouse + "/" + directoryMove);
            
            await fs.copy(evn.environment.warehouse + "/" + currentDirectory , evn.environment.warehouse + "/" + directoryMove);
            await fs.remove(evn.environment.warehouse + "/" + currentDirectory);
            resp.send("Folder/file " + directoryMove + " is moved");
        } else {
            resp.send('Folder/file is not exist !!!');
        }
    } catch (error) {
        resp.send(error)
    }
    
})


export = router