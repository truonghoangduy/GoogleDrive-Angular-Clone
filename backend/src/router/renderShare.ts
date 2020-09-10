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
    let { receiver } = res.body;
    try {

        let receiverExist = await fs.pathExists(evn.environment.warehouse + "/" + receiver);


        if (receiverExist) {
            let listDoc = await (await admin.firestore().collection("shareUser").doc(receiver).collection("whoShare").get()).docs.map(doc => doc.id);
            console.log(listDoc);
            let sharedPath = []
            for (let iterator of listDoc) {
                let File = await (await admin.firestore().collection("share").doc(iterator).collection("sharable").doc(receiver).listCollections()).map(doc => doc.id);
                sharedPath.push(File);
            }
            console.log(sharedPath);
            let doc = [];
            for (let j = 0; j < listDoc.length; j++) {
                for (let i = 0; i < sharedPath[j].length; i++) {
                    let path = await admin.firestore().collection("share").doc(listDoc[j]).collection("sharable").doc(receiver).collection(sharedPath[j][i]).doc(sharedPath[j][i]).get();
                    let test = path.data();
                    console.log(test);
                    doc.push(test);
                }
            }
            console.log(doc);
            resp.send(doc);
        }
    } catch (e) {
        console.log(e);
    }
})

router.post('/', async (req, res) => {
    let { receiver } = req.body;
    // let fileName = fileURL.split('/');
    // fileName = fileName[fileName.length - 1];

    try {
        // let fileUrlExist = await fs.pathExists(evn.environment.warehouse + "/" + uuid + "/" + fileURL);
        // let uuidExist = await fs.pathExists(evn.environment.warehouse + "/" + this.uuid);
        let receiverExist = await fs.pathExists(evn.environment.warehouse + "/" + receiver);
        // if (receiver == this.uuid) {
        //     resp.send("False to shared");
        // }
        let responeData = [];
        if (receiverExist) {
            let shareFromList: Array<string> = (await admin.firestore().collection('user').doc(receiver).get()).get('shareFrom');
            if (shareFromList!=undefined) {
                for (let shareSender of shareFromList) {
                    let shareRef = (await admin.firestore().collection('share').doc(shareSender).collection('sharable').doc(receiver).collection('shared').get())
                    let sharedFolderFromReciver = shareRef.docs.map(doc => {
                        return {
                            ...doc.data(),
                            id: doc.id,
                            owner: shareSender,
                        }
                    })

                    responeData.push(...sharedFolderFromReciver);
                }
                res.send({message:"render successful",responeData});
            }else{
                res.send({message:"Have not file to share"});
            }

        }else{
            res.send({message:"can't render file"});
        }



    } catch (e) {
        console.log(e);
    }
})
export = router