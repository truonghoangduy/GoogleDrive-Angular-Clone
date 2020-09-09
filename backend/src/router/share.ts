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
router.post('/test', async (res, resp) => {
    let { uuid, receiver, fileURL, enable } = res.body;
    let fileName = fileURL.split('/');
    fileName = fileName[fileName.length - 1];

    try {
        let fileUrlExist = await fs.pathExists(evn.environment.warehouse + "/" + uuid + "/" + fileURL);
        let uuidExist = await fs.pathExists(evn.environment.warehouse + "/" + uuid);
        let receiverExist = await fs.pathExists(evn.environment.warehouse + "/" + receiver);
        if (receiver == uuid) {
            resp.send("False to shared");
        }
        else {
            if (fileUrlExist && uuidExist && receiverExist) {
                await admin.firestore().collection("share").doc(uuid).collection("sharable").doc(receiver).collection(fileName).doc(fileName).set({ [fileName]: uuid + "/" + fileURL, "permission": enable });
                await admin.firestore().collection("shareUser").doc(receiver).collection("whoShare").doc(uuid).set({ "uuid": uuid });
                if (enable == "enable") {
                    resp.send(fileName + " is shared !!!!");
                }
                else if (enable = "disable") {
                    await admin.firestore().collection("share").doc(uuid).collection("sharable").doc(receiver).collection(fileName).doc(fileName).delete();
                    await admin.firestore().collection("shareUser").doc(receiver).collection("whoShare").doc(uuid).delete();
                    resp.send(fileName + " is not for share !!!!");
                }

            }
            else {
                resp.send("Can't share it !!!!!!!!");
            }
        }



    } catch (e) {
        console.log(e);
    }
})

async function addToReciverShareList(reciverUUID: string, senderUUID: string) {
    let reciverRef = await admin.firestore().collection('user').doc(reciverUUID).set({ 'shareFrom': fieldValue.arrayUnion(senderUUID) }, {
        merge: true,
    });


}


router.post('/', async (res, resp) => {
    let { uuid, receiver, fileURL, enable } = res.body;
    let fileName = fileURL.split('/');
    fileName = fileName[fileName.length - 1];

    try {
        let fileUrlExist = await fs.pathExists(evn.environment.warehouse + "/" + fileURL);
        let uuidExist = await fs.pathExists(evn.environment.warehouse + "/" + uuid);
        let receiverExist = await fs.pathExists(evn.environment.warehouse + "/" + receiver);
        if (receiver == uuid) {
            resp.send("False to shared");
        }
        else {
            if (fileUrlExist && uuidExist && receiverExist) {
                let shareRef = admin.firestore().collection('share').doc(uuid).collection('sharable').doc(receiver).collection('shared');
                let query = await shareRef.where('path', '==', fileURL).get();
                if (enable == "enable") {
                    if ((await query).empty) {
                        shareRef.add({
                            path: fileURL,

                        })
                        await admin.firestore().collection('user').doc(receiver).set({ 'shareFrom': fieldValue.arrayUnion(uuid) }, {
                            merge: true,
                        });
                        
                        resp.send('OK');
                    } else {

                        resp.send({
                            message: "It's already exists",
                        });
                    }
                } else {
                    let doc = [];
                    if (query.empty) {
                        (await admin.firestore().collection('user').doc(receiver)).delete();

                        let sharedFolderFromReciver = await query.docs.map(doc => doc.id)
                        for (let i of sharedFolderFromReciver) {

                            (await shareRef.doc(i).delete());
                        }
                        resp.send("delete successful all");
                    }
                    else{
                        let sharedFolderFromReciver = await query.docs.map(doc => doc.id)
                        for (let i of sharedFolderFromReciver) {

                            (await shareRef.doc(i).delete());
                        }
                        resp.send("delete successful");
                    }

                }

            }
            else {
                resp.send("Can't share it !!!!!!!!");
            }
        }



    } catch (e) {
        console.log(e);
    }
})
export = router