import { Folder } from '../models/folder.model';
export function getFilesName(folder:Folder){
    return folder.files.map((file)=>file.uuid);
}