import admin = require('firebase-admin');
import { VirtualFile } from '../../models/file.model';
import { Folder } from '../../models/folder.model';
const firestore = admin.firestore();
async function checkExits(checkArea: string, UUID: string): Promise<boolean> {
    let data = await firestore.collection(checkArea).doc(UUID).get()
    if (data.exists) {
        return true;
    }
    return false
}
export async function generateGobleFilePath(fileUUID: string, file: VirtualFile) {
    if (!await checkExits('files',fileUUID)) {
        let roomRef = await firestore.collection("files").doc(fileUUID).set(file)
    }
}

export async function generateGobleFolderPath(folderUUID: string, file: Folder) {
    if (!await checkExits('folders',folderUUID)) {
        // Folder "A" -> 'a.txt':'a.txt'
        let roomRef = await firestore.collection("files").doc(folderUUID).set(file.files)
    }
}

