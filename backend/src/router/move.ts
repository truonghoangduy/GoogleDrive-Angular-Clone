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
import { options } from './browse';




router.post('/', async (res, resp) => {
    let fileName = res.body["source"].split('/');
    fileName = fileName[fileName.length - 1];
    try {
        let pointHead = path.join(evn.environment.warehouse,res.body["source"])
        let pointTail = path.join(evn.environment.warehouse,res.body["destination"])
        let sourceExist = await fs.pathExists(evn.environment.warehouse + "/" + res.body["source"]);
        console.log(evn.environment.warehouse + "/" + res.body["source"]);
        if (sourceExist) {
            let isFile = await fs.stat(pointHead);
            if (isFile.isFile()) {
                let pointTailThumbNail = path.join(pointTail,'.thumbnail')
                let thumbnailName = path.basename(pointHead)+".png"
                let pathToThumbNail = path.join(path.dirname(pointHead),".thumbnail",thumbnailName)
                fs.moveSync("./warehouse/" + res.body["source"], "./warehouse/" + res.body["destination"] + "/" + fileName);

                // Move Thumb
                fs.moveSync(pathToThumbNail,path.join(pointTailThumbNail,thumbnailName))
            }else{
                console.log(evn.environment.warehouse + "/" + res.body["source"], evn.environment.warehouse + "/" + res.body["destination"]);
                await fs.moveSync("./warehouse/" + res.body["source"], "./warehouse/" + res.body["destination"] + "/" + fileName);
            }

            resp.send({result:"Folder/file " + res.body["destination"] + " is move"});
        } else {
            resp.send({result:'Folder/file is not exist !!!'});
        }
    } catch (error) {
        resp.send(error);
    }

})


export = router