// import * as expressLib from "express";
import fs = require('fs-extra');
import express = require('express');
import createFile = require('../ults/generateGoblePath')
const router = express.Router();
import admin = require('firebase-admin');
import { VirtualFile } from '../models/file.model';
const firestore = admin.firestore();
import fakeData = require('../../fakeData/temperData')
import evn = require('../../environment')
import path = require('path');
import { options } from './browse';

router.post('/', async (res, resp) => {
    let fileName = res.body["source"].split('/');
    fileName = fileName[fileName.length - 1];
    try {
        let sourceExist = await fs.pathExists(evn.environment.warehouse + "/" + res.body["uid"] + "/" + res.body["source"]);
        console.log(evn.environment.warehouse + "/" + res.body["source"]);
        if (sourceExist) {
            console.log(evn.environment.warehouse + "/" + res.body["source"], evn.environment.warehouse + "/" + res.body["destination"]);
            await fs.copySync("./warehouse/" + res.body["uid"] + "/" + res.body["source"], "./warehouse/" + res.body["uid"] + "/" + res.body["destination"] + "/" + fileName);
            resp.send("Folder/file " + res.body["destination"] + " is copy");
        } else {
            resp.send('Folder/file is not exist !!!');
        }
    } catch (error) {
        resp.send(error);
    }

})


export = router