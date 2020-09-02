import express = require('express');
import expressFileupload = require('express-fileupload');
import createFile = require('../ults/generateGoblePath')
const router = express.Router();
import admin = require('firebase-admin');
import { VirtualFile } from '../../models/file.model';
const firestore = admin.firestore();
import fakeData = require('../../fakeData/temperData')
import uploader = require('../ults/wirteFile');

router.use(expressFileupload({
    limits: { fileSize: 50 * 1024 * 1024 },
}))

router.post('/',async (req,resp)=>{
    console.log(req)
    const {uploadDir} = req.body


    for (let fileKey of Object.keys(req.files)) {
        let file = <expressFileupload.UploadedFile>req.files[fileKey];
        // let hashName = uuid();
        //ts-ignore
        let fileLocation = uploadDir+file.name;



        uploader.writeFileToDir(fileLocation,file.data,uploadDir)


    }
    console.log(req.files);

    // console.log(req.headers.f)

    resp.send("OK")
})


export = router