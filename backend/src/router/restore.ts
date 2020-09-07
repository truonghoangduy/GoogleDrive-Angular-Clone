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
    let list = res.body["source"].split('/');
    let fileName = list[list.length - 1];
    let user = list[0];
    try {
        let sourceExist = await fs.pathExists(evn.environment.recyclebin  + "/" + res.body["source"]);
        let uuidExist = await fs.pathExists(evn.environment.recyclebin + "/" + user);
        

        if (uuidExist && sourceExist) {
            let path = await (await admin.firestore().collection("bin").doc(user).collection(fileName).doc(fileName).get()).data();
            
                console.log(evn.environment.recyclebin + "/" + res.body["source"], evn.environment.warehouse  + "/" + path);
                await fs.moveSync(evn.environment.recyclebin  + "/" + res.body["source"], evn.environment.warehouse+ "/" + path );
                await admin.firestore().collection("bin").doc(user).collection(fileName).doc(fileName).delete();
                resp.send("Folder/file " + fileName + " is move");
        }
        else {
            resp.send('Folder/file is not exist !!!');
        }
    } catch (error) {
        resp.send("error");
    }
})


export = router