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

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
router.post('/', async (res, resp) => {
    let { sender, receiver, fileURL } = res.body;


    let fileUrlExist = await fs.pathExists(evn.environment.warehouse + "/" + fileURL);
    try {

        if (fileUrlExist) {
            let checkForExistedShare = (await admin.firestore().collection("Share").doc(sender).collection("Receiver").doc(receiver).get()).data();
            if (isEmpty(checkForExistedShare)) {
                await admin.firestore().collection("Share").doc(sender)
                    .collection("Receiver")
                    .doc(receiver).set({ [fileURL]: fileURL });

            } else {
                console.log({
                    [fileURL]: fileURL
                })

                await admin.firestore().collection("Share").doc(sender)
                    .collection("Receiver").doc(receiver).set({
                        [fileURL]: fieldValue.delete()
                    }, {
                        merge: true
                    })

                // await admin.firestore().collection("Share").doc(sender).collection("Receiver").doc(receiver).set({[fileURL]:fileURL},{
                //     merge:true
                // })

            }
            resp.send("File is shared ");
        }
        else {
            resp.send("File is not available !!!");
        }

    } catch (e) {
        console.log(e);
    }

})


export = router