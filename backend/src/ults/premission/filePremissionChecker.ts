import express = require('express');
import {HTTP_CODE} from '../../models/HTTPCODE'
const router = express.Router();
import admin = require('firebase-admin');

const auth = admin.auth();

export async function checkAuth(token:string,uuid:string){
    try {
        let verifyIdToken = await auth.verifyIdToken(token);
        return verifyIdToken.uid == uuid
    } catch (error) {
        console.log(error)
        return false
    }
}

