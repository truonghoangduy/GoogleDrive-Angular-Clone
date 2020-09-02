import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Router, RouterLink} from '@angular/router'
import { ThrowStmt } from '@angular/compiler';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: firebase.User=null;
  constructor(public Auth:AngularFireAuth,public router:Router) {
    this.debugUserOb$()
   }

  public debugUserOb$(){
    this.Auth.user.subscribe((user)=>{
      this.user = user;
    })
  }

  public debugUserOb$zzz(){
    this.Auth.user.subscribe((user)=>{
      this.user = user;
    })
  }

  public async loginGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();
    await this.Auth.signInWithPopup(provider).then(data=> this.user= data.user)
    this.router.navigate(["/drive"]);

  }
    public async Logout(){
      await this.Auth.signOut()
      location.reload();     
        }
}

