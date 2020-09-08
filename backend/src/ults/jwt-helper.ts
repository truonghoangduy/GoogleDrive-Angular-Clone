import jwt = require('jsonwebtoken');
import evn = require('../../environment');
import { env } from 'process';


export function generateJWT(userInfo:string){
    return jwt.sign(userInfo,evn.environment.JWT_CONFIG.JWT_SECRET);
    
}

export async function vertifyJWT(token:string){
    return jwt.verify(token,<jwt.Secret>evn.environment.JWT_CONFIG.JWT_SECRET)
};


