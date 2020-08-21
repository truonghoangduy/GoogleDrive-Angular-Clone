import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth"
import * as fire from 'firebase'
import {Router, RouterLink} from '@angular/router'
import { ThrowStmt } from '@angular/compiler';

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
    let provider = new fire.auth.GoogleAuthProvider();
    await this.Auth.signInWithPopup(provider).then(data=> this.user= data.user)
    this.router.navigate(["drive/main-screen"]);

  }
    // public async Logout(){
    //   await this.Auth.signOut();
    //   this.router.navigate([""]);
    // }
    public async Logout(){
      await this.Auth.signOut()
      // this.user = null;
      // this.router.navigateByUrl('');
      // this.router.navigate(['../drive'])
      location.reload();      // this.routerlink.routerLink =['']
      // this.routerlink.onClick()
    }


  }

