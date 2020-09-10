import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, RouterLink } from '@angular/router'
import { ThrowStmt } from '@angular/compiler';
import { AngularFireAuth } from '@angular/fire/auth';
import { ApiService } from './api.service';
import {User} from '../models/user.model'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public idToken: string;
  public uid: string;
  public user: firebase.User = null;
  constructor(public Auth: AngularFireAuth, public router: Router, private client: HttpClient) { }



  public debugUserOb$() {
    this.Auth.user.subscribe((user) => {
      this.user = user;
    })
  }

  public debugUserOb$zzz() {
    this.Auth.user.subscribe((user) => {
      this.user = user;
    })
  }
  username = '';
  public async loginGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
    let logeduser = await this.Auth.signInWithPopup(provider)
    this.user = logeduser.user;
    this.username = logeduser.user.email
    await this.client.post(environment.endpoint+'user/googleUser',{
      email:this.username}).toPromise()
    // await this.client.post(environment.endpoint+"user/checkauth",{},{
    //  "headers":{
    //    'idToken':await this.user.getIdToken()
    //  }
    // }).toPromise()
    this.router.navigate(["/drive"]);

  }
  public async loginWithEmail(email: string, password: string) {
    try {
      let credential = await this.Auth.signInWithEmailAndPassword(email,password);
      this.idToken = await credential.user.getIdToken();
      this.uid = (await this.Auth.currentUser).uid;
      return { uid: this.uid, idToken: this.idToken };
    }
    catch {
      return null;
    }
  }

  public async Logout() {
    await this.Auth.signOut()
    location.reload();
    this.router.navigate(['']);
  }
}

