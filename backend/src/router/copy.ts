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
        let sourceExist = await fs.pathExists(evn.environment.warehouse + "/"  + res.body["source"]);
        let pointHead = path.join(evn.environment.warehouse,res.body["source"])
        let pointTail = path.join(evn.environment.warehouse,res.body["destination"])
        console.log(evn.environment.warehouse + "/" + res.body["source"]);
        if (sourceExist) {
            let isFile = await fs.stat(pointHead);
            if (isFile.isFile()) {
                let pointTailThumbNail = path.join(pointTail,'.thumbnail')
                let thumbnailName = path.basename(pointHead)+".png"
                let pathToThumbNail = path.join(path.dirname(pointHead),".thumbnail",thumbnailName)
                fs.copySync(pathToThumbNail,path.join(pointTailThumbNail,thumbnailName))
                await fs.copySync("./warehouse/" + res.body["source"], "./warehouse/" + res.body["destination"] + "/" + fileName);
            }else{
                console.log(evn.environment.warehouse + "/" + res.body["source"], evn.environment.warehouse + "/" + res.body["destination"]);
                await fs.copySync("./warehouse/"  + res.body["source"], "./warehouse/"  + res.body["destination"] + "/" + fileName);
            }
            resp.send({result:"Folder/file " + res.body["destination"] + " is copy"});
        } else {
            resp.send({result:'Folder/file is not exist !!!'});
        }
    } catch (error) {
        resp.send(error);
    }

})


export = router