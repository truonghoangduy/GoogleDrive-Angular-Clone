import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth"
import * as fire from 'firebase'
import {Router} from '@angular/router'

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
  public async loginGoogle(){
    let provider = new fire.auth.GoogleAuthProvider();
    await this.Auth.signInWithPopup(provider).then(data=> this.user= data.user)
    this.router.navigate(["main-screen"]);
  }
    // public async Logout(){
    //   await this.Auth.signOut();
    //   this.router.navigate([""]);
    // }
    public Logout(){
      this.user = null;
      this.router.navigate([""]);
    }


  }

