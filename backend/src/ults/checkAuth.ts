import fs = require('fs-extra')
import evn = require('../../environment');
import admin = require('firebase-admin');
const auth = admin.auth()
import * as fsrealLib from 'fs'

export async function checkAuth(idtoken:string, uuid:string): Promise<boolean>{
    try {
        // await fs.access(evn.environment.warehouse+"/"+uuidName);
 
        let user = await auth.verifyIdToken(<string>idtoken);
        if(uuid == user.email){
              return true;
        }else{
             return false;
        }
        // reps.send(user)       
      
    } catch (error) {
        console.log(error)

    }
}
