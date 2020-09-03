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
const expressFileupload = require("express-fileupload");
const router = express.Router();
const admin = require("firebase-admin");
const firestore = admin.firestore();
const uploader = require("../ults/wirteFile");
router.use(expressFileupload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));
router.post('/', (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    for (let fileKey of Object.keys(req.files)) {
        let file = req.files[fileKey];
        // let hashName = uuid();
        //ts-ignore
        uploader.writeFileToDir(file.name, file.data);
    }
    console.log(req.files);
    // console.log(req.headers.f)
    resp.send("OK");
}));
module.exports = router;
//# sourceMappingURL=uploader.js.map