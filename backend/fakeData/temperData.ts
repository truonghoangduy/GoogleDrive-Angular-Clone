import { VirtualFile } from '../src/models/file.model';
import { Folder } from '../src/models/folder.model';
const fakeData = {
    folders:[
        <Folder>{
            uuid: "SubFolder1",
            name: "SubFolder1",
            volume: "10KB",
            createDate: "",
            owner: "TH1305"
        },
        <Folder>{
            uuid: "SubFolder01",
            name: "SubFolder1",
            volume: "10KB",
            createDate: "",
            owner: "TH1305",
            folder:[
                <Folder>{
                    uuid: "SubFolder001",
                    name: "SubFolder1",
                    volume: "10KB",
                    createDate: "",
                    owner: "TH1305",
                    folder:[
                        <Folder>{
                            uuid: "SubFolder0001",
                            name: "SubFolder1",
                            volume: "10KB",
                            createDate: "",
                            owner: "TH1305",
                            folder:[
                                
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}


const fakeData2 = <Folder>{
    uuid:"123123123",
    name:"HelloWorld123",
    volume:"0",
    owner:"DUYTH1305"
}


// export = fakeData;
export = {
    fakeData:fakeData,
    fakeData2:fakeData2
};
