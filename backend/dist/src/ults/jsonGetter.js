"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilesName = void 0;
function getFilesName(folder) {
    return folder.files.map((file) => file.uuid);
}
exports.getFilesName = getFilesName;
//# sourceMappingURL=jsonGetter.js.map