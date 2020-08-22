// import * as expressLib from "express";

import express = require('express');
import createFile = require('../ults/generateGoblePath')
const router = express.Router();
import admin = require('firebase-admin');
import { VirtualFile } from '../../models/file.model';
const firestore = admin.firestore();
import fakeData = require('../../fakeData/temperData')


router.get('/',async (res,resp)=>{
    let filePath = await firestore.collection("user").add(fakeData);

    await createFile.generateGobleFilePath(filePath.id,fakeData.files[0])
    resp.send("OK")
})


export = router