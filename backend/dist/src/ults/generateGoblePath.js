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
exports.generateGobleFolderPath = exports.generateGobleFilePath = void 0;
const admin = require("firebase-admin");
const firestore = admin.firestore();
function checkExits(checkArea, UUID) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield firestore.collection(checkArea).doc(UUID).get();
        if (data.exists) {
            return true;
        }
        return false;
    });
}
function generateGobleFilePath(fileUUID, file) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield checkExits('files', fileUUID))) {
            let roomRef = yield firestore.collection("files").doc(fileUUID).set(file);
        }
    });
}
exports.generateGobleFilePath = generateGobleFilePath;
function generateGobleFolderPath(folderUUID, file) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield checkExits('folders', folderUUID))) {
            // Folder "A" -> 'a.txt':'a.txt'
            let roomRef = yield firestore.collection("files").doc(folderUUID).set(file.files);
        }
    });
}
exports.generateGobleFolderPath = generateGobleFolderPath;
//# sourceMappingURL=generateGoblePath.js.map