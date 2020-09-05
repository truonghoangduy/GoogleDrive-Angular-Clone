"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const firebaseSDK = require("../service_account_firebase");
const env = require("../environment");
const cors = require("cors");
const admin = require("firebase-admin");
admin.initializeApp({
    credential: admin.credential.cert(firebaseSDK.firebaseAdminSDK),
    databaseURL: "https://u-space-drive.firebaseio.com"
});
const server = express();
const logger = (req, res, next) => {
    if (env.environment.logging) {
        console.log(`${req.method} : ${req.url.toString()}`),
            next();
    }
    else {
        next();
    }
};
server.use(logger);
server.use(cors());
// server.use(bodyPraser());
server.use(express.json());
server.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Hello World");
}));
// Add route
server.use('/createFile', require('./router/createFile'));
server.use('/upload', require('./router/uploader'));
server.use('/remove', require('./router/removeFile'));
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});
// npm run start:watch
//# sourceMappingURL=server.js.map