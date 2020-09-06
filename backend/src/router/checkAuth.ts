
import express = require('express');
const router = express.Router();
import admin = require('firebase-admin');
const auth = admin.auth()

router.get('/', async (res, reps) =>{
    try{
        let itemDocList = await admin.firestore().collection("store-item").listDocuments();
        let itemList = [];
        for(let i = 0; i < itemDocList.length; i++){
            itemList.push((await itemDocList[i].get()).data());
        }
        reps.send({
            item:itemList,
        });
    }catch(e){
        reps.send({
            item: [],
        });
    }
})

export = router;