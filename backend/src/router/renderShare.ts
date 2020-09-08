import fs = require('fs-extra');
import express = require('express');
import createFile = require('../ults/generateGoblePath')
const router = express.Router();
import admin = require('firebase-admin');
const firestore = admin.firestore();
import fakeData = require('../../fakeData/temperData')
import evn = require('../../environment')
import path = require('path');
import { isBuffer } from 'util';
const fieldValue = admin.firestore.FieldValue;

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

router.post('/', async (res, resp) => {
    let { uuid, receiver, fileURL } = res.body;
    let fileName = fileURL.split('/');
    fileName = fileName[fileName.length - 1];

    try {
        let fileUrlExist = await fs.pathExists(evn.environment.warehouse + "/" + uuid + "/" + fileURL);
        let uuidExist = await fs.pathExists(evn.environment.warehouse + "/" + uuid);
        let receiverExist = await fs.pathExists(evn.environment.warehouse + "/" + receiver);
        if (receiver == uuid) {
            resp.send("False to shared");
        }

        else if (fileUrlExist && uuidExist && receiverExist) {
            let listDoc = await (await admin.firestore().collection("shareUser").doc(receiver).collection("whoShare").get()).docs.map(doc => doc.data());
            console.log(listDoc);
            resp.send({"massage":"get uuid success"});

        }



    } catch (e) {
        console.log(e);
    }
})
export = router