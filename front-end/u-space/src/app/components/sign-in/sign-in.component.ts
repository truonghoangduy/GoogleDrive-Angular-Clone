import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(public auth:AuthService) { }
  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  ngOnInit(): void {
  }

}
