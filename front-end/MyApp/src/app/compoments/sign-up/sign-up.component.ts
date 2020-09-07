import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators  } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public auth:AuthService, public http:HttpClient) { }
  userprofile = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phonenumber:new FormControl(''),

  });

async onSummitFrom(){
  console.log( this.userprofile.value);
  this.createuser(this.userprofile.value)
}
public async createuser(user:any){
  try {
   console.log(await this.http.post(environment.endpoint+'user',user).toPromise());
  } catch (error) {
    console.log(error)
  }
}
  
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
  }
  
 
  


}
