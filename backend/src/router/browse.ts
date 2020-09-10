// import * as expressLib from "express";

import express = require('express');
import createFile = require('../ults/generateGoblePath')
import fs = require('fs-extra');
const router = express.Router();
import path = require('path');

import admin = require('firebase-admin');
import evn = require('../../environment');



router.post('/', async (res, resp) => {
    const { currentDirectory } = res.body;
    try {
        let readDirectory = path.join(evn.environment.warehouse,currentDirectory)
        // let abc = path.dirname(readDirectory)
        let current = await fs.readdir(readDirectory)
        // let fakkk = await fs.s
        let files = [];
        let folders = [];
        for (let i = 0; i < current.length; i++) {
            if (current[i] != ".thumbnail") {
                let isFolderPath = path.join(readDirectory,current[i])
                let isFolder = fs.statSync(isFolderPath)
                if (isFolder.isFile()) {
                    files.push(current[i])
                }else if(isFolder.isDirectory()){
                    folders.push(current[i])
                }
            }
        }
        resp.send({
            requestPath:currentDirectory,
            files,
            folders
        })
    } catch (err) {
        resp.send(err);
    }

})


export = router
