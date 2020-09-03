// import * as expressLib from "express";

import express = require('express');
import {HTTP_CODE} from '../models/HTTPCODE'
import createFile = require('../ults/generateGoblePath')
const router = express.Router();
import admin = require('firebase-admin');
const firestore = admin.firestore();
import fakeData = require('../../fakeData/temperData')

const FolderCollectionRef = firestore.collection("folders");

// Make a newFolder grab it uuid append it to parrent Folder

router.post('/',async (req,res)=>{
    const {currentFolder,useruuid,newFolder} = req.body;
    try {
        let newFolderPathRef = await FolderCollectionRef.add(newFolder); // RANDOM UUID FOR SURE
        let parentFolderPathRef = FolderCollectionRef.doc(currentFolder);
    
        // Add more [Field]
        let newFolderNode = Object.assign({},newFolder,
            {nodeLocation:newFolderPathRef.path,
            nodeParrent:parentFolderPathRef.path
        })

        if ((await parentFolderPathRef.get()).exists) {
            await newFolderPathRef.set(newFolderNode);
            await parentFolderPathRef.update(
                {'folders':admin.firestore.FieldValue.arrayUnion(newFolderNode)}
            )
        }else{
            res.send("[BAD REQUEST] : Parent Folder not exitst").status(HTTP_CODE.BAD_REQUEST)
            return;
        }
        console.log(currentFolder)
        res.send("OK").status(HTTP_CODE.OK);
    } catch (error) {
        res.send("Some things went wrong").status(HTTP_CODE.INTERNAL_SERVER_ERROR);

    }

})


export = router