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

router.get('/', async (req, res) => {

    // optional arg.
    let doc=[];
    // admin.auth().listUsers().then((userRecords) => {
    //     userRecords.users.forEach((user)=>console.log(user.email));
        
    // }).catch((error) => console.log(error));

    let listOfUSer = (await admin.auth().listUsers()).users.map((usr)=>usr.email)
    console.log(listOfUSer);
    res.send({
        result:listOfUSer
    })
})
export = router