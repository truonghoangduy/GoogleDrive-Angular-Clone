import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, RouterLink } from '@angular/router'
import { ThrowStmt } from '@angular/compiler';
import { AngularFireAuth } from '@angular/fire/auth';
import { ApiService } from './api.service';
import {User} from '../models/user.model'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
    this.router.navigate(["/drive"]);

  }
  public loginEmail(email,password) {
    
    this.Auth.signInWithEmailAndPassword(email,password).then((data) => this.user=data.user) 
    try{
      
      this.router.navigate(['./drive']);
    }catch(err){
      console.log(err);
    }

  }
  public async Logout() {
    await this.Auth.signOut()
    location.reload();
    this.router.navigate(['']);
  }
}

