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
import { env } from 'process';
// import fp = require('filepath');

router.post('/', async (res, resp) => {
    let { oldname, newname,uid } = res.body;
    // let before = oldname.split("/").length - 1;
    // before = before
    // stat.size = Math.round(stat.size / 1024 / 1024 * 100) / 100;

    try {

        // let stat = await fs.renameSync(evn.environment.warehouse + "/" + oldname, evn.environment.warehouse + "/" + newname);


        //set a reference to the folder structure that leads up to the current file, add a trailing slash
        
        //set a reference to the old file path
        // let newFilePath = evn.environment.warehouse+"/" +uid+ (fs.existsSync(evn.environment.warehouse+"/" +uid+"/"+ oldname) ? oldname : newname);
        // //set a reference to the new file path
        // let oldFilePath = evn.environment.warehouse+"/" +uid+"/" +(fs.existsSync(evn.environment.warehouse+"/" +uid+"/"+ oldname) ? newname : oldname);
        let oldpathWithWearhouse = path.join(evn.environment.warehouse,oldname)
        let updatedpathWithWearhouse = path.join(evn.environment.warehouse,newname)

        //use the fs object's rename method to re-name the file
        fs.rename(oldpathWithWearhouse, updatedpathWithWearhouse, function (err) {
            if (err) { console.log(err); return; }
        });
        resp.send({
            message: "rename success"
        });

    } catch (error) {
        resp.send(error);
    }

})


export = router