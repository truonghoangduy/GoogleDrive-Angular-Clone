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

router.post('/', async (res, resp) => {
    const { currentDirectory, delDirectory } = res.body;

    try {
        let currentDirectoryExist = await fs.pathExists(evn.environment.warehouse + "/" + currentDirectory);
        let delDirectoryExist = await fs.pathExists(evn.environment.warehouse + "/" + currentDirectory+"/" +delDirectory);
        if (currentDirectoryExist && delDirectoryExist) {

            await fs.rmdirSync(evn.environment.warehouse + "/" + currentDirectory + "/" + delDirectory,{ recursive: true });
        } else {
            resp.send('Folder/file is not exist !!!');
        }
    } catch (error) {
        resp.send(error)
    }
    resp.send("Folder/file " +delDirectory+ " is removed");
})


export = router