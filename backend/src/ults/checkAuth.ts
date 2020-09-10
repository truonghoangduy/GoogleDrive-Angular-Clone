import fs = require('fs-extra')
import evn = require('../../environment');
import admin = require('firebase-admin');
import path = require('path');
const auth = admin.auth()
import * as fsrealLib from 'fs'

export async function checkAuth(idtoken:string, email:string): Promise<boolean>{
    try {
        // await fs.access(evn.environment.warehouse+"/"+uuidName);
 
        let user = await auth.verifyIdToken(<string>idtoken);
        if(email == user.email){
            let userWareHousePath = path.join(evn.environment.warehouse,email)
            if (! await fs.pathExists(userWareHousePath)) {
                fs.ensureDir(userWareHousePath)
            } 
              return true;
        }else{
             return false;
        }
        // reps.send(user)       
      
    } catch (error) {
        console.log(error)

    }
}
