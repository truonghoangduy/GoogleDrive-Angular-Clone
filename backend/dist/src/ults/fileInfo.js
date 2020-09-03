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
exports.fileExist = void 0;
const fs = require("fs-extra");
const evn = require("../../environment");
function fileExist(uuidName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fs.access(evn.environment.warehouse + "/" + uuidName);
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    });
}
exports.fileExist = fileExist;
//# sourceMappingURL=fileInfo.js.map