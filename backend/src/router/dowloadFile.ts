import express = require('express');
import evn = require('../../environment')
import fileInfo = require('../ults/fileInfo');
import path = require("path");
import { HTTP_CODE } from '../models/HTTPCODE';

const router = express.Router();

function nullChecker(key): boolean {
    if (key == undefined) {
        return true
    }
    return false;
}
router.get("", async (req, res) => {

    const { requestfile, uuid } = req.headers
    if (!nullChecker(requestfile) && !nullChecker(uuid)) {
        try {
            var pathToWareHouse = path.join(__dirname, "..", "..", "warehouse")
            var requestedPath = path.join(pathToWareHouse, <string>uuid, <string>requestfile)
            if (await fileInfo.fileExistFromRoot(requestedPath)) {
                res.sendFile(requestedPath)
            } else {
                res.send("File not exits").status(HTTP_CODE.BAD_REQUEST)
            }
        } catch (error) {
            res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).send(HTTP_CODE.INTERNAL_SERVER_ERROR)
        }
    } else {
        res.send("File not exits").status(HTTP_CODE.BAD_REQUEST)
    }
});
export = router