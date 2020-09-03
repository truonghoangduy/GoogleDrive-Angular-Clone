"use strict";
const fakeData = {
    files: [
        {
            uuid: "File1",
            name: "File1",
            pictureURL: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
            createDate: new Date().toUTCString(),
            volume: "10KB",
            owner: "TH1305"
        },
        {
            uuid: "File1",
            name: "File1",
            pictureURL: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
            createDate: new Date().toUTCString(),
            volume: "10KB",
            owner: "TH1305"
        }
    ],
    folders: [
        {
            uuid: "SubFolder1",
            name: "SubFolder1",
            files: [
                {
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
        {
            uuid: "SubFolder1",
            name: "SubFolder1",
            files: [
                {
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
};
module.exports = fakeData;
//# sourceMappingURL=temperData.js.map