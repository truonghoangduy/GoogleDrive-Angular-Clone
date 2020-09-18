import express = require('express');
import evn = require('../../environment')
import fileInfo = require('../ults/fileInfo');
import path = require("path");
import { HTTP_CODE } from '../models/HTTPCODE';

const router = express.Router();
const pathToWareHouse = path.join(__dirname, "..", "..", "warehouse")

function nullChecker(key): boolean {
    if (key == undefined) {
        return true
    }
    return false;
}
router.get("/", async (req, res) => {

    const { requestfile, uuid } = req.headers
    if (!nullChecker(requestfile) && !nullChecker(uuid)) {
        try {

            // TODO CHECK AUTH
            var requestedPath = path.join(pathToWareHouse,<string>requestfile)
            if (await fileInfo.fileExistFromRoot(requestedPath)) {
                res.download(requestedPath)
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

/**
 * 
 * @api {GET} /file/share Get user data
 * @apiName GET SHARE FORM KEY
 * 
 * @apiHeader  {String} uid Logged-in user id
 *             {requestfile} path -> to File
 *             {sharkey} shareKey from the owner
 * @apiRespone HTTP_CODE.BAD_REQUEST 400 missing Key
 *             HTTP_CODE.INTERNAL_SERVER_ERROR I/O write Error
 * */
router.get("/share", async (req, res) => {

    const { requestfile, uuid, sharekey } = req.headers
    if (!nullChecker(requestfile) && !nullChecker(uuid) && !nullChecker(sharekey)) {
        try {

            // TODO CHECK AUTH
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
        res.send("BAD_REQUEST").status(HTTP_CODE.BAD_REQUEST)
    }
});

router.get("/thumbnail", async (req, res) => {

    const { requestfile, uuid } = req.headers
    if (!nullChecker(requestfile) && !nullChecker(uuid)) {
        try {

            // TODO CHECK AUTH
            var requestedPath = path.join(pathToWareHouse,<string>requestfile)
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