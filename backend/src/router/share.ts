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
    let { sender, receiver, fileURL } = res.body;
    let fileShare = [];
    let fileUrlExist = await fs.pathExists(fileURL);
    if (fileUrlExist) {
        fileShare.push(fileURL);
        await admin.firestore().collection("Share").doc(sender).collection("Receiver").doc(receiver).set(fileShare);
        resp.send("OK");
    }
    else{
        resp.send("File is not available !!!");
    }


})


export = router