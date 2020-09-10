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
import * as checkUser from '../ults/checkAuth';
import {BinInfo} from '../models/bin.model'
import { HTTP_CODE } from '../models/HTTPCODE';
import { fileSize } from '../ults/fileInfo';
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
const pathToWareHouse = path.join(__dirname, "..", "..", "warehouse")

function isFile(fileName:string,uuidFolder:string){
    if (fileName.includes(".")) {
        return path.join(uuidFolder,fileName);
    }else{
        return uuidFolder
    }
    
}

router.get("/",async (req, res)=>{
    const {uuid} = req.headers;
    console.log(req.query)
    let binRef = firestore.collection('bin').doc(<string>uuid).collection('binList');

    let binData = await binRef.get();
    if (binData.empty) {
        res.send({}).status(HTTP_CODE.BAD_REQUEST)
    }else{
       let bindataList =  binData.docs.map((data)=>{
            return <BinInfo>data.data()
        });

        
        let keys = Array.from(new Set(bindataList.map((doc)=>doc.moveFrom)))
        let responeData = new Array<Array<BinInfo>>();
        for (let iterator of bindataList) {
            let indexLocation = keys.indexOf(iterator.moveFrom)
            if ( responeData[indexLocation] == undefined) {
                responeData.push([])
            }
            responeData[indexLocation].push(iterator)
        }

        for (let index = 0; index < keys.length; index++) {
            // responeData[index] = [...responeData[index].sort((a,b)=>b.time.toDate() - a.time.toDate())]
            responeData[index] = [...responeData[index].sort((a,b)=>a.time.toDate()-b.time.toDate()).reverse()]

        }

        console.log(responeData)
        res.send(responeData);

    }

})


router.post('/', async (res, resp) => {
    let list = res.body["source"].split('/');
    let fileName = list[list.length - 1];
    let user = list[0];
    try {
        let sourceExist = await fs.pathExists(evn.environment.warehouse + "/" + res.body["source"]);
        let uuidExist = await fs.pathExists(evn.environment.warehouse + "/" + user);
        let isFolder = await fs.stat(path.join(evn.environment.warehouse,res.body["source"]))

        if (uuidExist && sourceExist) {

            let binPathRef = await admin.firestore().collection("bin").doc(user).collection('binList').add({});
            let makeSaveTobin = await binPathRef.set(<BinInfo>{
                binPath:binPathRef.id, // PATH TO UUID FOLDER
                fileName:res.body["source"],
                moveFrom:res.body["source"],
                info:{
                    mtime:isFolder.mtime,
                    size:fileSize(isFolder.size)
                },
                isFolder:isFolder.isDirectory(),
                name:fileName,
                time:fieldValue.serverTimestamp()
            }
            );
            
            let newFolderUUID = binPathRef.id
                // STEP 
                // GRAB FROM WAREHOUSE 
                // MAKE UUID FROM FS
                // ifFile => bin/UUID/file.extension
                await fs.moveSync(evn.environment.warehouse+ "/" + 
                res.body["source"], 
                evn.environment.recyclebin+ "/" + user + "/" +isFile(fileName,newFolderUUID),
                {
                    overwrite:false
                });

                console.log("REMOVE "+fileName)
                resp.send({result:"Folder/file " + fileName + " is move"});
        }
        else {
            resp.send('Folder/file is not exist !!!');
        }
    } catch (error) {
        resp.send(error);
    }
})

router.post('/', async (res, resp) => {

})





export = router