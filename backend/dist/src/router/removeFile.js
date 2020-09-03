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
const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const firestore = admin.firestore();
// import uploader = require('../ults/wirteFile');
// import expressFileupload = require('express-fileupload');
const deleter = require("../ults/deleteFile");
const fileExist = require("../ults/fileInfo");
function nullChecker(key) {
    if (key == undefined) {
        return true;
    }
    return false;
}
// Todo JWT checker before delect
// [1] : Check for [] of file uuid
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let currentFolder = req.body['currentFolder'];
    let removeFile = req.body['removeFile'];
    if (nullChecker(removeFile)) {
        console.log("Canot file keys");
        res.status(501).send("Missing KEYS");
        return;
    }
    if (nullChecker(currentFolder)) {
        console.log("Canot file keys");
        res.status(501).send("Missing KEYS");
        return;
    }
    let comfromRemovedFile = [];
    for (let file of removeFile) {
        try {
            if (yield fileExist.fileExist(file)) {
                console.log(`Dose you run : DROP ${file}`);
                comfromRemovedFile.push(file);
                yield deleter.removeFile(file); // DEL
            }
        }
        catch (error) {
        }
    }
    res.send({
        requestRemove: removeFile,
        removed: comfromRemovedFile
    });
}));
module.exports = router;
//# sourceMappingURL=removeFile.js.map