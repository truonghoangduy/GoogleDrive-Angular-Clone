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
async function getDirectorySize(root) {
    let size = 0;
    try {
        let files = await fs.readdirSync(root);
        for (let i = 0; i < files.length; i++) {
            let stats = await fs.statSync(root + "/" + files[i]);
            size += stats.size;
            size += await getDirectorySize(root + "/" + files[i]);
        }
        return size;
    }
    catch{
        try {
            size = (await fs.statSync(root)).size;
            return size;
        }
        catch{
            return 0;
        }
    }
}
router.post('/sizeUsed', async (res, resp) => {
    let  {root} = res.body;
    try {
        let result=parseInt((await getDirectorySize(root)).toString());
        let num ={
            "num": result,
        };
           
        resp.send(num);
        
    }catch(e){
        resp.send(e);
    }

});
router.post('/', async (res, resp) => {
    let fileName = res.body["source"].split('/');
    let owner = fileName[2];
    let stat = await fs.stat(res.body["source"]);
    // stat.size = Math.round(stat.size / 1024 / 1024 * 100) / 100;
    fileName = fileName[fileName.length - 1];
    try {
        let size = '';
        if (stat.size / 1024 / 1024 >= 1) {
            size = Math.round(stat.size / 1024 / 1024 * 100) / 100 + ' MB';
        } else if (stat.size / 1024 >= 1) {
            size = Math.round(stat.size / 1024 * 100) / 100 + ' KB';
        } else if (stat.size >= 0) {
            size = Math.round(stat.size * 100) / 100 + ' Byte';
        }


        resp.send({
            "fileName": fileName,
            "Owner": owner,
            "size": size,
            "Create day": stat.birthtime,
        });

    } catch (error) {
        resp.send(error);
    }

})


export = router