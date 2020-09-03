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
// import * as expressLib from "express";
const fs = require("fs-extra");
const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const firestore = admin.firestore();
const evn = require("../../environment");
router.post('/', (res, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { currentDirectory } = res.body;
    fs.mkdir(evn.environment.warehouse + "/" + currentDirectory);
}));
module.exports = router;
//# sourceMappingURL=createFile.js.map