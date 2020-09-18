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

router.post('/', async (res, resp) => {
    const { currentDirectory, makeDirectory } = res.body;

    try {
        let currentDirectoryExist = await fs.pathExists(evn.environment.warehouse + "/" + currentDirectory);
        let makeDirectoryExist = await fs.pathExists(evn.environment.warehouse + "/" + currentDirectory + "/" + makeDirectory);
        if (currentDirectoryExist && !makeDirectoryExist) {

            await fs.mkdir(evn.environment.warehouse + "/" + currentDirectory + "/" + makeDirectory);
            await fs.ensureDir(evn.environment.warehouse + "/" + currentDirectory + "/" + makeDirectory+'/.thumbnail')

        } else {
            resp.send({result:'Folder is already exists !!!'});
        }

        // let doc = await fs.readdir(evn.environment.warehouse + "/" +"admin");
        // let adsad = fs.readdir()
    } catch (error) {
        resp.send(error)
    }
    resp.send(path.posix.join(currentDirectory, makeDirectory));
})

router.post('/createUserFolder', async (res, resp) => {
    const input = res.body;

    try {
        let doc =  admin.firestore().collection('user').doc(input.email);
        if ((await (doc.get())).exists) {
            resp.send({
                result:"Already Created"
            })
        } else {
            await fs.mkdir(evn.environment.warehouse + "/" + input.email);
            resp.send({
                result:"ok"
            });
        }
    } catch (error) {
        resp.send(error)
    }
    // resp.send(path.posix.join(currentDirectory, makeDirectory));
})


export = router