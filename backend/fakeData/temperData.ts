import { VirtualFile } from '../models/file.model';
import { Folder } from '../models/folder.model';
const fakeData = {
    files: [
        <VirtualFile>{
            uuid: "File1",
            name: "File1",
            pictureURL: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
            createDate: new Date().toUTCString(),
            volume: "10KB",
            owner: "TH1305"
        },
        <VirtualFile>{
            uuid: "File1",
            name: "File1",
            pictureURL: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
            createDate: new Date().toUTCString(),
            volume: "10KB",
            owner: "TH1305"
        }
    ],
    folders:[
        <Folder>{
            uuid: "SubFolder1",
            name: "SubFolder1",
            files: [
                <VirtualFile>{
                    uuid: "SubFolder1",
                    name: "SubFolder1",
                    pictureURL: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
                    createDate: new Date().toUTCString(),
                    volume: "10KB",
                    owner: "TH1305"
                },

            ],
            volume: "10KB",
            createDate: "",
            owner: "TH1305"
        },
        <Folder>{
            uuid: "SubFolder1",
            name: "SubFolder1",
            files: [
                <VirtualFile>{
                    uuid: "SubFolder1",
                    name: "SubFolder1",
                    pictureURL: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
                    createDate: new Date().toUTCString(),
                    volume: "10KB",
                    owner: "TH1305"
                },

            ],
            volume: "10KB",
            createDate: "",
            owner: "TH1305"
        }
    ]
}

export = fakeData;
