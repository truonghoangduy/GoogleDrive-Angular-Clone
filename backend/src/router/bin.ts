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
const fieldValue = admin.firestore.FieldValue;
import * as checkUser from '../ults/checkAuth';

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

router.post('/', async (res, resp) => {
    let user = res.body["uid"];
    let fileName = res.body["source"].split('/');
    fileName = fileName[fileName.length - 1];
    try {
        let bin = await admin.firestore().collection('bin').doc(user);
        let sourceExist = await fs.pathExists(evn.environment.warehouse + "/" + user + "/" + res.body["source"]);
        
        console.log(evn.environment.warehouse + "/" + res.body["source"]);
        if (sourceExist) {
            console.log(evn.environment.warehouse + "/" + res.body["source"], evn.environment.recyclebin + "/" + user);
            await fs.moveSync("./warehouse/" + user + "/" + res.body["source"], evn.environment.recyclebin+ "/" + user + "/" + fileName);
            resp.send("Folder/file " + fileName + " is move");
        } else {
            resp.send('Folder/file is not exist !!!');
        }
    } catch (error) {
        resp.send(error);
    }
})


export = router