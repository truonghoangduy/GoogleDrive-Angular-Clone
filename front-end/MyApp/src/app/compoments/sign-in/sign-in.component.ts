import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import {HttpClient} from '@angular/common/http';

import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  
  constructor(public auth:AuthService, public router:Router, ) { }
  hide = true;
  public email = '';
  public password =  '';
  ngOnInit(): void {
  }
  public async onClickLoginWithEmail(email, password) {
    console.log(this.email, this.password);
    email= this.email;
    password = this.password
    try {
      let result = await this.auth.loginWithEmail(email, password);
      if (result != null) {
        this.router.navigate(["drive/main-page"]);
      }
    }
    catch (e) {
     console.log(e);
    }
  }
}
