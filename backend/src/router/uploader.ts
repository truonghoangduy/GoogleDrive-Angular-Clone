import express = require('express');
import expressFileupload = require('express-fileupload');
import createFile = require('../ults/generateGoblePath')
const router = express.Router();
import admin = require('firebase-admin');
const firestore = admin.firestore();
import fakeData = require('../../fakeData/temperData')
import uploader = require('../ults/wirteFile');
import generateFile = require('../ults/generateGoblePath');
import { VirtualFile } from '../models/file.model';
router.use(expressFileupload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles:false,
    debug:true,
}))


function createFileFromJSON(uuid:string,fileName:string,owneruuid:string,size:string,pictureURL:string,parrentNode:string){
    return {
        uuid:uuid,
        pictureURL:'',
        name:fileName,
        volume:size,
        owner:"",
        createDate:"",
        parrentNode:parrentNode
    }
}
// This Router only for upload File in paricific Folder

router.post('/',async (req,res)=>{
    const {parrentNode} = req.body;
    // console.log(currentFolder);
    let uploadedFile = []
    for (let fileKey of Object.keys(req.files)) { // GET the files form the FORM-DATA
        let fileRef = await generateFile.createFileRef()

        // Hmmm
        let file = <expressFileupload.UploadedFile>req.files[fileKey];
        let fileType = '.'+file.name.split('.')[1];;

        // CALL FILE SYSTEM TO UPLOAD ( PRMOISE BASE ) Hmmm need fix ?
        uploadedFile.push(await uploader.writeFileToDirV2(fileRef.id+fileType,file.data));

        let createFileMetaData = createFileFromJSON("",file.name,"",file.size.toString(),"",parrentNode);
       
        await generateFile.addFileToFolderRef(parrentNode,createFileMetaData)
        await fileRef.set(createFileMetaData)


    }

    res.send({
        payload:{
            uploaded:uploadedFile,
            uploadLocation:parrentNode
        }
    })
})


export = router