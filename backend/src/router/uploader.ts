import express = require('express');
import expressFileupload = require('express-fileupload');
import createFile = require('../ults/generateGoblePath')
const router = express.Router();
import admin = require('firebase-admin');
const firestore = admin.firestore();
import fakeData = require('../../fakeData/temperData')
import uploader = require('../ults/wirteFile');
import generateFile = require('../ults/generateGoblePath');
import path = require('path')
router.use(expressFileupload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles:false,
    debug:true,
}))

router.post('/', async (req, res) => {
    console.log(req)
    const { uploadDir } = req.body


    for (let fileKey of Object.keys(req.files)) {
        let file = <expressFileupload.UploadedFile>req.files[fileKey];
        // let hashName = uuid();
        //ts-ignore
        
        let fileLocation = path.join(uploadDir,file.name);

        await uploader.writeFileToDirV3(fileLocation, file.data, uploadDir)


    }

    res.send({
        result:"ok"
        // payload:{
        //     uploaded:uploadedFile,
        //     uploadLocation:parrentNode
        // }
    })
})



export = router