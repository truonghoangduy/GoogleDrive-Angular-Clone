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
        let currentPath = await path.join(evn.environment.warehouse, currentDirectory)
        let current = await fs.readdir(currentPath)
        let files = [];
        let folders = [];
        
        if(currentPath){
            for (let i = 0; i < current.length; i++) {
                if(current[i] != '.thumbnail'){
                    let isPath = await path.join(currentPath, current[i]);
                    let isType = await fs.statSync(isPath);
                    if (isType.isFile()) {
                        files.push(current[i]);
                    }else if(isType.isDirectory()){
                        folders.push(current[i])
                    }
                }
            }
            resp.send({
                requestPath:currentDirectory,
                files,
                folders
            })
        }else{
            resp.send("Folder/File does not exist.")
        }     
    } catch (err) {
        resp.send(err);
    }

});

router.post('/browse/share', async (res, resp) => {
    const { currentDirectory } = res.body;
    try {
        let currentPath = await path.join(evn.environment.warehouse, currentDirectory)
        let current = await fs.readdir(currentPath)
        let files = [];
        let folders = [];

        // let fileShare = await 
        
        if(currentPath){
            for (let i = 0; i < current.length; i++) {
                if(current[i] != '.thumbnail'){
                    let isPath = await path.join(currentPath, current[i]);
                    let isType = await fs.statSync(isPath);
                    if (isType.isFile()) {
                        files.push(current[i]);
                    }else if(isType.isDirectory()){
                        folders.push(current[i])
                    }
                }  
            }
            resp.send({
                requestPath:currentDirectory,
                files,
                folders
            })
        }else{
            resp.send("Folder/File does not exist.")
        }

    } catch (err) {
        resp.send(err);
    }
})


export = router
