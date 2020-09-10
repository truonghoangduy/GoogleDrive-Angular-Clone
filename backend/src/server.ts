import express = require('express');
import firebaseSDK = require('../service_account_firebase')
import env = require('../environment')
// import fakeData = require('../fakeData/temperData')
import cors = require('cors')
import bodyPraser = require('body-parser')
import admin = require('firebase-admin');
import fakedata = require('./temp')

import cookiePraser = require('cookie-parser');
import { Folder } from './models/folder.model';
admin.initializeApp({
    credential: admin.credential.cert(firebaseSDK.firebaseAdminSDK),
    databaseURL: "https://u-space-drive.firebaseio.com"
})
let auth = admin.auth();
const server = express();
const logger = (req, res, next) => {
    if (env.environment.logging) {
        console.log(`${req.method} : ${req.url.toString()}`),
            next();
    } else {
        next();
    }
};

server.use(cookiePraser())
server.use(logger);
server.use(cors());
// server.use(bodyPraser());
server.use(express.json());

function listATree(node:Folder){
    let output =[];

    if (node.folder != undefined) {
        for (let index = 0; index < node.folder.length; index++) {
            let foldes = node.uuid;
            return output.concat(listATree(node.folder[index]),[foldes])
        }
    }
}

server.get("/", async (req, res) => {
    let fullTree = listATree(fakedata.fakedata);
    res.send("Hello World" + fullTree);
})
// async function checkAuth(uid, token) {
//     try {
//         let decodedIdToken = await auth.verifyIdToken(token);
//         return uid == decodedIdToken.uid;
//     }
//     catch {
//         return null;
//     }
// }


// Add route

server.use('/createFolder', require('./router/createFolder'));
//upload
server.use('/upload', require('./router/uploader'));
//delete File/Folder
server.use('/remove', require('./router/removeFile'));
server.use('/auth', require('./router/authjwt'));

server.use('/file',require('./router/dowloadFile'));

server.use('/createFolder', require('./router/createFolder'));
server.use('/browse',require('./router/browse'));
//browser 
server.use('/browse', require('./router/browse'));

server.use('/user', require('./router/user'));
//share File
server.use('/share', require('./router/share'));
//move file
server.use('/move', require('./router/move'));
server.use('/bin', require('./router/bin'));
server.use('/restore', require('./router/restore'));
//copy file
server.use('/copy', require('./router/copy'));

server.use('/info',require('./router/info'));
server.use('/renderShare',require('./router/renderShare'));
server.use('/searchUser',require('./router/searchGmail'));
server.use('/rename',require('./router/rename'));
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})
// npm run start:watch