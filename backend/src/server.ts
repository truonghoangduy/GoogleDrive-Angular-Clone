import express = require('express');
import firebaseSDK = require('../service_account_firebase')
import env = require('../environment')
import fakeData = require('../fakeData/temperData')
import cors = require('cors')
import bodyPraser = require('body-parser')
import admin = require('firebase-admin');

let firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(firebaseSDK.firebaseAdminSDK),
    databaseURL: "https://u-space-drive.firebaseio.com"
})
let auth = firebaseApp.auth();
const server = express();
const logger = (req, res, next) => {
    if (env.environment.logging) {
        console.log(`${req.method} : ${req.url.toString()}`),
            next();
    } else {
        next();
    }
};

server.use(logger);
server.use(cors());
// server.use(bodyPraser());
server.use(express.json());

server.get("/", async (req, res) => {
    res.send("Hello World")
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

//create new Folder
server.use('/createFolder', require('./router/createFolder'));
//upload
server.use('/upload', require('./router/uploader'));
//delete File/Folder
server.use('/remove', require('./router/removeFile'));
//browser 
server.use('/browse', require('./router/browse'));

server.use('/user', require('./router/user'));
//share File
server.use('/share', require('./router/share'));
//move file
server.use('/move', require('./router/move'));
//copy file
server.use('/copy', require('./router/copy'))

server.use('/info',require('./router/info'));
server.use('/renderShare',require('./router/renderShare'));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})
// npm run start:watch