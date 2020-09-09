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
  constructor(public Auth: AngularFireAuth, public router: Router, private api: ApiService, private client: HttpClient) { }



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

  public async loginGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
    await this.Auth.signInWithPopup(provider).then(data => this.user = data.user)


    // await this.client.post(environment.endpoint+"user/checkauth",{},{
    //  "headers":{
    //    'idToken':await this.user.getIdToken()
    //  }
    // }).toPromise()
<<<<<<< HEAD
    this.router.navigate(["/drive"]);
=======
    this.router.navigate(["/drive/"]);
>>>>>>> 654423c11fd9ecaafc2e30e2d75f418a6501c848

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

