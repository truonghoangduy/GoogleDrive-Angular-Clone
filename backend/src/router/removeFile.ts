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
const fieldValue = admin.firestore.FieldValue;

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
});

router.post('/removeFromBin', async (res, resp) => {
    const { owner, listOfVersion } = res.body;

    try {
        let fireStoreBatch = admin.firestore().batch()

        for (let eachVersion  of listOfVersion) {
            let pathToBin = path.join(evn.environment.recyclebin,owner,eachVersion)
            if (await fs.pathExists(pathToBin)) {
                fs.remove(pathToBin)
                let docRefToBin = admin.firestore().collection('bin').doc(owner).collection('binList').doc(eachVersion)
                fireStoreBatch.delete(docRefToBin)
            }
        }
        await fireStoreBatch.commit()

        resp.send({ message: "delete successful all" });

        // if (sourceExist && delDirectoryExist) {

        //     // fs.rmdirSync(evn.environment.warehouse + "/" + uid + "/" + source + "/" + delDirectory, { recursive: true });
        // } else {
        //     resp.send('Folder/file is not exist !!!');
        // }
    } catch (error) {
        resp.send(error)
    }
})
// et listBin = (await admin.firestore().collection("bin").doc(uid).collection("binList").where("path", "==", source).get()).docs.map(doc => doc.id);
//             for (let i of listBin) {
//                 await admin.firestore().collection("bin").doc(uid).collection("binList").doc(i).delete();
//             }
//             resp.send({ message: "delete successful all" });


export = router