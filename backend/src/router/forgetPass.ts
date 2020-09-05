import express = require('express');

const router = express.Router();
import admin = require('firebase-admin');
const auth = admin.auth()

router.post('/', async (res,reps) => {
    const {email} = res.body;
    try{
        let user = await auth.getUserByEmail(email);
       
        

    }catch(e){
        reps.send({
            message: "This email is not existed"
        })
    }
})





export = router;