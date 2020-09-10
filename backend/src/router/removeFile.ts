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

router.post('/', async (res, resp) => {
    const { uid, source, delDirectory } = res.body;

    try {
        let sourceExist = await fs.pathExists(evn.environment.recyclebin + "/" + uid + "/" + source);
        let delDirectoryExist = await fs.pathExists(evn.environment.recyclebin + "/" + uid + "/" + source + "/" + delDirectory);
        if (sourceExist && delDirectoryExist) {

            fs.rmdirSync(evn.environment.warehouse + "/" + uid + "/" + source + "/" + delDirectory, { recursive: true });
        } else {
            resp.send('Folder/file is not exist !!!');
        }
    } catch (error) {
        resp.send(error)
    }
    resp.send("Folder/file " + delDirectory + " is removed");
})


export = router