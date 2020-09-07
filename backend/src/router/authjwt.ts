import express = require('express');
import jwtUlts = require('../ults/jwt-helper');
const router = express.Router();

router.post("/generate",(req,res,next)=>{
    const {userInfo} = req.body
    const expiration = 500000;
    let token = jwtUlts.generateJWT(JSON.stringify(userInfo));
    res.cookie('token', token, {
        expires: new Date(Date.now() + expiration),
        secure: false, // set to true if your using https
        httpOnly: false,
    });
    res.send({
        token:token
    })
})


router.post("/verify",(req,res,next)=>{

    let abc = req.cookies.token;
    const {token} = req.body;
    res.send(jwtUlts.vertifyJWT(abc));
})

export = router;