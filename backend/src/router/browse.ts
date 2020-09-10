// import * as expressLib from "express";

import express = require('express');
import createFile = require('../ults/generateGoblePath')
import fs = require('fs-extra');
const router = express.Router();

import admin = require('firebase-admin');
import evn = require('../../environment');
import path = require('path');



router.post('/', async (res, resp) => {
    const { currentDirectory } = res.body;
    try {

        let pathToUser =path.join(evn.environment.warehouse,currentDirectory)
        if (!await fs.pathExists(pathToUser)) {
            await fs.ensureDir(pathToUser)
        }
        let current = await fs.readdir(evn.environment.warehouse + "/" + currentDirectory)
        let files = [];
        let folders = [];
        for (let i = 0; i < current.length; i++) {
            if (current[i] != ".thumbnail") {
                let isFolderPath = path.join(pathToUser, current[i])
                let isFolder = fs.statSync(isFolderPath)
                if (isFolder.isFile()) {
                    files.push(current[i])
                } else if (isFolder.isDirectory()) {
                    folders.push(current[i])
                }
            }
        }
        resp.send({
            requestPath: currentDirectory,
            files: files,
            folders: folders
        })
    } catch (err) {
        resp.send(err);
    }

})


export = router
