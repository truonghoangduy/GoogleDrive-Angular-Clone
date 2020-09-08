import admin = require('firebase-admin');
import { VirtualFile } from '../models/file.model';
import { Folder } from '../models/folder.model';
const firestore = admin.firestore();

const FileCollectionRef = firestore.collection("user");
const FolderCollectionRef = firestore.collection("share");




