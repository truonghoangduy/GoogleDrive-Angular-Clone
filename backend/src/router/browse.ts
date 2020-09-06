// import * as expressLib from "express";

import express = require('express');
import createFile = require('../ults/generateGoblePath')
import fs = require('fs-extra');
const router = express.Router();
import admin = require('firebase-admin');
import evn = require('../../environment');
const path = require('path');



router.post('/', async (res, resp) => {
    const { currentDirectory } = res.body;
    try {
        let current = await fs.readdir(evn.environment.warehouse + "/" + currentDirectory)
        let files = [];
        let folders = [];
        for (let i = 0; i < current.length; i++) {
            if (current[i].includes('.')) {
                files.push(current[i]);
            } else {
                folders.push(current[i])

            }
        }
        resp.send({
            files,
            folders
        })
    } catch (err) {
        resp.send(err);
    }

})


export = router
