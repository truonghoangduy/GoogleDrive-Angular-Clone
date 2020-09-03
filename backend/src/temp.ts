import {Folder} from './models/folder.model'
let fakeData:Folder = {
    uuid:"213213213123",
    folder:[
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
};

export = {
    fakedata:fakeData
};