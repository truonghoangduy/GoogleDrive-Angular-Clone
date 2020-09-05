"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFileToDir = void 0;
const fs = require("fs-extra");
const evn = require("../../environment");
function writeFileToDir(uuidName, data) {
    fs.writeFile(evn.environment.warehouse + '/' + uuidName, data).then((vaule) => {
        console.log(`Done upload : ${uuidName}`);
    });
}
exports.writeFileToDir = writeFileToDir;
//# sourceMappingURL=wirteFile.js.map