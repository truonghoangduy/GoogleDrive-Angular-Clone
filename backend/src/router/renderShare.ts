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
    let { receiver } = res.body;
    // let fileName = fileURL.split('/');
    // fileName = fileName[fileName.length - 1];

    try {
        // let fileUrlExist = await fs.pathExists(evn.environment.warehouse + "/" + uuid + "/" + fileURL);
        // let uuidExist = await fs.pathExists(evn.environment.warehouse + "/" + this.uuid);
        let receiverExist = await fs.pathExists(evn.environment.warehouse + "/" + receiver);
        // if (receiver == this.uuid) {
        //     resp.send("False to shared");
        // }

        if (receiverExist) {
            let listDoc = await (await admin.firestore().collection("shareUser").doc(receiver).collection("whoShare").get()).docs.map(doc => doc.id);
            // let doc=listDoc.find(p=>p.uuid===uuid);
            console.log(listDoc);
            let sharedPath = []
            for (let iterator of listDoc) {
                let File = await (await admin.firestore().collection("share").doc(iterator).collection("sharable").doc(receiver).listCollections()).map(doc => doc.id);

                sharedPath.push(File);

            }
            console.log(sharedPath);
            let doc = [];

            
                // for (let j = 0; j < listDoc.length;) {
                //     for (let i = 0; i < sharedPath.length; i++) {
                //         let path = await admin.firestore().collection("share").doc(listDoc[j]).collection("sharable").doc(receiver).collection(sharedPath[i][j]).doc(sharedPath[i][j]);

                //         doc.push(path);
                //     }
                //     j++;
                // }
                // console.log(doc);
            
            resp.send(doc);
        }



    } catch (e) {
        console.log(e);
    }
})
export = router